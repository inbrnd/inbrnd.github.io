// The repository component owns the clock. Copy only follows its opening event.
const wheel=document.querySelector('inbrnd-flywheel');
const copy=document.querySelector('.opening-copy');
const cue=document.querySelector('.scroll-cue');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const phase=(value,start,end)=>{
  const t=Math.max(0,Math.min(1,(value-start)/(end-start)));
  return t*t*(3-2*t);
};
wheel.addEventListener('opening-progress',({detail:{raw,stable,invitation}})=>{
  const fade=stable?0:phase(raw,0,.085);
  copy.style.opacity=1-fade;
  copy.style.transform=`translateY(${-22*fade}px)`;
  // Hold the invitation in view as the same curve rises toward it.
  // The title remains in document flow; only the cue follows the scroll.
  cue.style.transform=stable?'none':`translate(-50%, ${Math.min(scrollY,innerHeight)-16*(1-invitation)}px)`;
  cue.style.opacity=stable?1:invitation;
  cue.style.pointerEvents=stable||invitation>0?'auto':'none';
  cue.tabIndex=stable||invitation>0?0:-1;
});
cue.addEventListener('click',event=>{
  event.preventDefault();
  if(wheel.hasAttribute('data-static')){
    wheel.scrollIntoView({block:'start',behavior:'instant'});
  }else{
    const root=wheel.shadowRoot;
    const journey=root.querySelector('.journey');
    const frame=root.querySelector('.frame');
    window.scrollTo({top:scrollY+journey.getBoundingClientRect().top+(journey.offsetHeight-frame.offsetHeight)*.17,behavior:reduced.matches?'instant':'smooth'});
  }
});

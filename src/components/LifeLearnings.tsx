'use client';
import {useLayoutEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useSmoothScroll} from './SmoothScroll';
const lessons=[
 ['Act Without Attachment','2.47','Give the work your best. Release your grip on the outcome.'],
 ['Remain Steady','2.48','Meet success and failure with the same steady mind.'],
 ['Let the Seasons Pass','2.14','Pleasure and pain pass. Patience helps me keep moving.'],
 ['Choose Inner Freedom','16.21','Step away from anger, greed, and impulses that narrow the mind.'],
 ['Let Wisdom Bring Peace','4.39','Keep learning with faith, dedication, and discipline.'],
 ['Become Your Own Friend','6.5','Build a mind that supports you through difficult days.'],
 ['Live in Balance','6.17','Make room for work, rest, food, and recreation.'],
 ['Return to Stillness','6.26','When attention wanders, gently bring it back.'],
 ['Let Compassion Lead','12.13–14','Choose kindness, forgiveness, and humility.'],
 ['Take Refuge in Me','18.66','Let trust make room for courage and peace.'],
];
export default function LifeLearnings(){
 const root=useRef<HTMLDivElement>(null);const smooth=useSmoothScroll();
 useLayoutEffect(()=>{gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
  const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.learning-chapter').forEach(chapter=>{
   gsap.fromTo(chapter.querySelector('.learning-frame'),{y:70,scale:.94,opacity:.35},{y:0,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:chapter,start:'top 90%',end:'top 25%',scrub:true}});
   gsap.fromTo(chapter.querySelector('.learning-caption'),{y:24,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:chapter,start:'top 60%',end:'top 25%',scrub:true}});
  });gsap.to('.learning-progress-fill',{scaleY:1,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:root.current,start:'top top',end:'bottom bottom',scrub:true}})},root);return()=>ctx.revert();
 });return()=>mm.revert()},[]);
 function jump(i:number){const element=document.getElementById(`learning-${i+1}`);if(element){if(smooth.current)smooth.current.scrollTo(element,{offset:-90});else element.scrollIntoView({behavior:'auto'})}}
 return <div ref={root} className="learnings-journey"><div className="learning-progress" aria-hidden="true"><i className="learning-progress-fill"/></div><nav className="learning-index" aria-label="Life Learnings chapters">{lessons.map(([title],i)=><button key={title} onClick={()=>jump(i)} aria-label={`Go to learning ${i+1}: ${title}`}>{String(i+1).padStart(2,'0')}</button>)}</nav>{lessons.map(([title,verse,reflection],i)=><section className="learning-chapter" id={`learning-${i+1}`} key={title} aria-labelledby={`lesson-title-${i}`}><figure className="learning-frame"><img src={`/learnings/learning-${String(i+1).padStart(2,'0')}.jpeg`} width="1600" height="900" loading={i===0?'eager':'lazy'} alt={`${title}. Bhagavad Gita ${verse}; English paraphrase illustrated with Krishna.`}/></figure><div className="learning-caption"><span>{String(i+1).padStart(2,'0')} / 10 · BHAGAVAD GITA {verse}</span><h2 id={`lesson-title-${i}`}>{title}</h2><p>{reflection}</p></div></section>)}</div>
}

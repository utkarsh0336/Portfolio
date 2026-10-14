'use client';
import Link from 'next/link';
import {useLayoutEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useSmoothScroll} from './SmoothScroll';
import MountainWaypoints from './MountainWaypoints';
import CardArrow from './CardArrow';
import PixelDust, {type PixelDustHandle} from './PixelDust';
import {links,motion,navigation,sceneAssets} from '@/data/portfolio';
export default function Landing(){
 const smooth=useSmoothScroll();const root=useRef<HTMLElement>(null);const dust=useRef<PixelDustHandle>(null);const manualCard=useRef(false);const [stop,setStop]=useState(0);const [arrowReplay,setArrowReplay]=useState(0);const advance=useRef<(direction:number)=>void>(()=>{});
 useLayoutEffect(()=>{gsap.registerPlugin(ScrollTrigger);const media=gsap.matchMedia();media.add({desktop:'(min-width:769px)',mobile:'(max-width:768px)',reduced:'(prefers-reduced-motion:reduce)'},context=>{
  const {reduced}=context.conditions!;if(reduced)return;manualCard.current=false;
  const actors=root.current?.querySelector<HTMLElement>('.summit-actors');
  const openingZoom=()=>{
   const width=actors?.offsetWidth??innerWidth*.04;
   gsap.set('.hero-cast,.summit-figures',{scale:width/1217,transformOrigin:'0 0'});
   return Math.min(innerHeight*motion.openingCastHeight,innerWidth*.94*motion.castAspect)/(width*motion.castAspect);
  };
  const openingX=()=>innerWidth*.5-((actors?.offsetLeft??0)+(actors?.offsetWidth??0)*.5)*openingZoom();
  const openingY=()=>innerHeight*(innerWidth<=768?.78:.94)-((actors?.offsetTop??0)+(actors?.offsetHeight??0))*openingZoom();
  gsap.set('.summit-actors',{scale:1});
  gsap.set('.cinematic-world',{scale:openingZoom,x:openingX,y:openingY,transformOrigin:'0 0'});
  gsap.set('.reference-mountain',{opacity:0});
  gsap.set('.hero-cast',{opacity:1,maskImage:'linear-gradient(to bottom,#000 0%,#000 91%,#0009 96%,transparent 100%)'});
  gsap.set('.cinematic-world',{filter:'none'});
  const skyX=gsap.quickTo('.scene-sky-parallax','x',{duration:1.4,ease:'power2.out'});
  const skyY=gsap.quickTo('.scene-sky-parallax','y',{duration:1.4,ease:'power2.out'});
  const cloudX=gsap.quickTo('.scene-cloud-parallax','x',{duration:1.6,ease:'power2.out'});
  const cloudY=gsap.quickTo('.scene-cloud-parallax','y',{duration:1.6,ease:'power2.out'});
  const pointer=(event:PointerEvent)=>{if(event.pointerType!=='mouse')return;const x=event.clientX/innerWidth-.5,y=event.clientY/innerHeight-.5;skyX(x*18);skyY(y*10);cloudX(x*36);cloudY(y*18)};
  const resetPointer=()=>{skyX(0);skyY(0);cloudX(0);cloudY(0)};
  root.current?.addEventListener('pointermove',pointer);root.current?.addEventListener('pointerleave',resetPointer);
  let settleTimer:ReturnType<typeof setTimeout>|undefined;
  let movingTo:number|null=null;let version=0;
  const restingProgress=.65;
  function travel(target:number){
   if(settleTimer)clearTimeout(settleTimer);
   movingTo=target;const ownVersion=++version;
   const finish=()=>{if(ownVersion===version)movingTo=null};
   const start=tl.scrollTrigger?.start??0;const end=tl.scrollTrigger?.end??innerHeight*motion.scrollScreens;
   const position=start+(end-start)*target;
   const distance=Math.abs(position-(smooth.current?.animatedScroll??window.scrollY));
   const duration=Math.max(.65,motion.openingDuration*Math.min(1,distance/((end-start)*restingProgress)));
   // Lenis supplies the easing once; the camera follows its position directly.
   if(smooth.current)smooth.current.scrollTo(position,{lerp:0,duration,easing:t=>(1-Math.cos(Math.PI*t))/2,onComplete:finish});
   else{window.scrollTo({top:position,behavior:'smooth'});movingTo=null}
  }
  const breakup={progress:0};
  const tl=gsap.timeline({scrollTrigger:{trigger:root.current,start:'top top',end:()=>`+=${innerHeight*motion.scrollScreens}`,pin:true,scrub:true,invalidateOnRefresh:true,anticipatePin:1,onUpdate:self=>{
   if(self.progress<.45)manualCard.current=false;
   if(!manualCard.current)setStop(Math.min(3,Math.floor(Math.max(0,self.progress-.66)/.085)));
   if(self.progress<.001){gsap.set('.hero-cast',{opacity:1,maskImage:'linear-gradient(to bottom,#000 0%,#000 91%,#0009 96%,transparent 100%)'});gsap.set('.hero-dust',{autoAlpha:0});gsap.set('.intro-radiance',{opacity:0});dust.current?.draw(0)}
   if(settleTimer)clearTimeout(settleTimer);
   if(movingTo===null&&self.progress>.001&&self.progress<restingProgress-.005){const direction=self.direction;settleTimer=setTimeout(()=>{if(!document.querySelector('dialog[open]'))travel(direction>0?restingProgress:0)},180)}
  }}});
  tl.to('.scroll-prompt',{autoAlpha:0,duration:.1},0)
   .fromTo('.drifting-cloud',{opacity:0},{opacity:1,duration:.3,ease:'sine.inOut'},.48)
   .fromTo('.cinematic-world',{scale:openingZoom,x:openingX,y:openingY},{scale:1,x:0,y:0,duration:.7,ease:'none'},.1)
   .fromTo('.reference-mountain',{opacity:0},{opacity:1,duration:.5,ease:'sine.inOut'},.2)
   .fromTo('.opening-ground',{opacity:1},{opacity:0,duration:.5,ease:'sine.inOut'},.2)
   .to('.intro-radiance',{opacity:.7,duration:.16,ease:'sine.out'},.16)
   .to('.intro-radiance',{opacity:0,duration:.35,ease:'sine.inOut'},.45)
   .to('.hero-cast',{opacity:0,duration:.15},.2)
   .fromTo('.hero-dust',{autoAlpha:0},{autoAlpha:1,duration:.1},.2)
   .to(breakup,{progress:1,duration:.3,onUpdate:()=>dust.current?.draw(breakup.progress)},.2)
   .to(breakup,{progress:0,duration:.2,onUpdate:()=>dust.current?.draw(breakup.progress)},.52)
   .fromTo('.summit-figures',{autoAlpha:0},{autoAlpha:1,duration:.18},.6)
   .to('.hero-dust',{autoAlpha:0,duration:.12},.66)
   .to('.pixel',{opacity:1,duration:.05,stagger:{each:.00045,from:'edges'}},.12)
   .to('.pixel',{opacity:0,duration:.08,stagger:{each:.0003,from:'random'}},.61)
   .set('.pixel',{opacity:0},1)
   .set('.cinematic-world',{clearProps:'transform,filter'},.8)
   .fromTo('.landing-copy',{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.35},.8)
   .fromTo('.destination-card',{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.3},.85)
   .fromTo('.mountain-waypoints',{autoAlpha:0},{autoAlpha:1,duration:.3},.8)
   .fromTo('.mountain-trail-reveal',{strokeDashoffset:1},{strokeDashoffset:0,duration:.45,ease:'power2.out'},.76)
   .to({}, {duration:.65});
  let accumulated=0;let used=false;let gestureDirection=0;
  let idleTimer:ReturnType<typeof setTimeout>|undefined;
  function step(direction:number){
   const progress=tl.scrollTrigger?.progress??0;
   if(direction>0&&(progress<restingProgress-.01||movingTo===0)){manualCard.current=true;setStop(0);travel(restingProgress);return}
   if(direction<0){manualCard.current=true;setStop(0);travel(0);return}
   manualCard.current=true;setStop(i=>(i+(direction>0?1:3))%4);
  }
  advance.current=step;
  function wheel(event:WheelEvent){
   if(event.ctrlKey||document.querySelector('dialog[open]')||Math.abs(event.deltaX)>Math.abs(event.deltaY)*1.5||!event.deltaY)return;
   event.preventDefault();
   const direction=Math.sign(event.deltaY);
   if(idleTimer)clearTimeout(idleTimer);
   idleTimer=setTimeout(()=>{used=false;accumulated=0;gestureDirection=0},180);
   if(direction!==gestureDirection){used=false;accumulated=0;gestureDirection=direction}
   if(used)return;
   accumulated+=Math.abs(event.deltaY)*(event.deltaMode===1?16:1);
   if(accumulated<12)return;
   used=true;
   // Inertia from the entrance gesture must not advance the destination card.
   if(movingTo!==null){if((movingTo===0&&direction>0)||(movingTo!==0&&direction<0))step(direction);return}
   step(direction);
  }
  function key(event:KeyboardEvent){
   if(event.ctrlKey||event.altKey||event.metaKey||document.querySelector('dialog[open]'))return;
   const target=event.target as HTMLElement;
   if(target.closest('input,textarea,select,[contenteditable="true"]'))return;
   if(['ArrowDown','PageDown','ArrowUp','PageUp','Home','End'].includes(event.key)){
    event.preventDefault();if(event.repeat)return;
    if(event.key==='Home'){setStop(0);travel(0)}
    else if(event.key==='End'){setStop(0);manualCard.current=true;travel(restingProgress)}
    else step(event.key==='ArrowDown'||event.key==='PageDown'?1:-1);
   }
  }
  window.addEventListener('wheel',wheel,{passive:false,capture:true});
  window.addEventListener('keydown',key);
  return()=>{root.current?.removeEventListener('pointermove',pointer);root.current?.removeEventListener('pointerleave',resetPointer);window.removeEventListener('wheel',wheel,true);window.removeEventListener('keydown',key);if(idleTimer)clearTimeout(idleTimer);if(settleTimer)clearTimeout(settleTimer);version++;advance.current=()=>{}};

 },root);return()=>media.revert()},[]);
 const destination=navigation[stop];
 return <section ref={root} className="landing cinematic" aria-label="Mountain introduction">
  <div className="scene-artwork"><div className="scene-sky-parallax"><div className="reference-sky"/></div><div className="scene-cloud-parallax"><div className="drifting-cloud"/></div>
  <div className="fireflies" aria-hidden="true">{Array.from({length:12},(_,i)=><img key={i} src="/reference/firefly.svg" style={{left:`${(i*23+9)%100}%`,top:`${(i*17+8)%85}%`,animationDelay:`${i*.4}s`}} alt=""/>)}</div>
  <div className="opening-ground" aria-hidden="true"/><div className="cinematic-world"><img width="3374" height="1864" fetchPriority="high" className="reference-mountain" src={sceneAssets.mountain} alt=""/><div className="summit-actors"><img width="1217" height="1292" fetchPriority="high" className="hero-cast" src={sceneAssets.character} alt="Illustrated Utkarsh in a maroon blazer with two caped companion dogs on the summit"/><div className="summit-figures" aria-hidden="true"><img className="summit-figure figure-person" src={sceneAssets.character} alt=""/><img className="summit-figure figure-left-dog" src={sceneAssets.character} alt=""/><img className="summit-figure figure-right-dog" src={sceneAssets.character} alt=""/></div><PixelDust ref={dust} src={sceneAssets.character}/></div><MountainWaypoints active={stop} onSelect={i=>{manualCard.current=true;setStop(i)}}/></div>
  <div className="intro-radiance" aria-hidden="true"/><div className="scene-shade"/></div><div className="pixel-transition" aria-hidden="true">{Array.from({length:240},(_,i)=><i className="pixel" key={i}/>)}</div>
  <div className="landing-copy"><h1>I build software<br/>seriously.<br/>Solving real problems<br/>even more so.</h1><p className="role">Software Engineer · India</p><a className="contact-button" href={links.email}>CONTACT ME ↗</a></div>

  <div className="destination-card"><Link href={destination.href} prefetch={destination.external?false:undefined} target={destination.external?'_blank':undefined} rel={destination.external?'noopener noreferrer':undefined} className="destination-link" onPointerEnter={()=>setArrowReplay(i=>i+1)} onFocus={()=>setArrowReplay(i=>i+1)}><span key={destination.cardLabel} className="card-title">{destination.cardLabel}</span><CardArrow key={`${stop}:${arrowReplay}`}/><img key={`art:${destination.cardLabel}`} className={`destination-art art-${stop}`} src={destination.art} alt=""/></Link><div className="destination-controls" aria-label="Choose destination">{navigation.map((item,i)=><button key={item.label} aria-label={`Show ${item.cardLabel}`} aria-pressed={i===stop} onClick={()=>{manualCard.current=true;setStop(i)}}>{i===stop?'●':'○'}</button>)}</div></div>
  <button className="scroll-prompt" onClick={()=>advance.current(1)}><span>SCROLL</span><span className="scroll-line"/></button>
 </section>
}

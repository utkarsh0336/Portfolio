'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
const photos=[{src:'/photos/utkarsh-1.jpeg',alt:'Utkarsh outdoors in a floral shirt'},{src:'/photos/utkarsh-3.jpeg',alt:'Utkarsh in a black outfit'}];
export default function HumanPortrait(){
 const [view,setView]=useState(0);const [paused,setPaused]=useState(false);const root=useRef<HTMLDivElement>(null);const tween=useRef<gsap.core.Timeline|null>(null);
 useEffect(()=>()=>{tween.current?.kill()},[]);
 const change=useCallback((next:number)=>{tween.current?.kill();const cells=root.current?.querySelectorAll('.portrait-pixel');if(!cells||matchMedia('(prefers-reduced-motion:reduce)').matches){setView(next);return}tween.current=gsap.timeline().to(cells,{opacity:1,duration:.08,stagger:{each:.001,from:'random'}}).call(()=>setView(next)).to(cells,{opacity:0,duration:.12,stagger:{each:.001,from:'edges'}})},[]);
 useEffect(()=>{if(paused||matchMedia('(prefers-reduced-motion:reduce)').matches)return;const timer=setInterval(()=>change((view+1)%photos.length),5500);return()=>clearInterval(timer)},[view,paused,change]);
 const displayView=view%photos.length;
 return <div className="human-portrait real-portrait" ref={root}><img src={photos[displayView].src} alt={photos[displayView].alt}/><div className="portrait-mosaic" aria-hidden="true">{Array.from({length:180},(_,i)=><i className="portrait-pixel" key={i}/>)}</div><div className="portrait-controls" aria-label="About photographs">{photos.map(({alt:label},i)=><button key={label} aria-label={label} aria-pressed={displayView===i} onClick={()=>change(i)}>{displayView===i?'●':'○'}</button>)}<button aria-label={paused?'Resume photo slideshow':'Pause photo slideshow'} onClick={()=>setPaused(p=>!p)}>{paused?'▶':'Ⅱ'}</button></div></div>
}

'use client';
import {createContext,useContext,useLayoutEffect,useRef,type ReactNode,type RefObject} from 'react';
import {usePathname} from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const ScrollContext=createContext<RefObject<Lenis|null>>({current:null});
export const useSmoothScroll=()=>useContext(ScrollContext);
export default function SmoothScroll({children}:{children:ReactNode}){
 const instance=useRef<Lenis|null>(null);const path=usePathname();
 useLayoutEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);const preference=matchMedia('(prefers-reduced-motion: reduce)');
  function setup(){
   instance.current?.destroy();instance.current=null;if(preference.matches)return;
   const lenis=new Lenis({autoRaf:true,lerp:.1,wheelMultiplier:1.15,smoothWheel:true,anchors:true,prevent:node=>node.tagName==='DIALOG'||node.hasAttribute('data-lenis-prevent'),virtualScroll:data=>!data.event.defaultPrevented});
   instance.current=lenis;lenis.on('scroll',ScrollTrigger.update);
  }
  setup();preference.addEventListener('change',setup);
  return()=>{preference.removeEventListener('change',setup);instance.current?.destroy();instance.current=null};
 },[]);
 useLayoutEffect(()=>{instance.current?.scrollTo(0,{immediate:true});instance.current?.resize();ScrollTrigger.refresh()},[path]);
 return <ScrollContext.Provider value={instance}>{children}</ScrollContext.Provider>;
}

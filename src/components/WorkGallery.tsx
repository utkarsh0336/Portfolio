'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {projects} from '@/data/portfolio';
import ProjectScreens from './ProjectScreens';
export default function WorkGallery(){
 const [open,setOpen]=useState(0);const [mobile,setMobile]=useState(false);
 useEffect(()=>{const media=matchMedia("(max-width:767px)");const update=()=>setMobile(media.matches);update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update)},[]);
 return <div className="reference-work-list">{projects.map((p,i)=><section className={`project-row ${p.slug==='misc'?'misc-row':''}`} key={p.slug} onPointerEnter={e=>{if(e.pointerType==='mouse')setOpen(i)}} onFocusCapture={()=>setOpen(i)}>
  <div className="project-row-head"><span className="eyebrow">{p.number.padStart(3,'0')}</span><button className="work-title" aria-expanded={mobile||open===i} aria-controls={`gallery-${p.slug}`} onClick={()=>setOpen(i)}><h2>{p.name}</h2></button><p className={open===i?'row-description is-open':'row-description'}>{p.summary}</p><Link className="contact-button row-project-link" href={`/work/${p.slug}`}>VIEW PROJECT <span aria-hidden="true">↗</span></Link></div>
  <div className="work-reveal" data-open={open===i} id={`gallery-${p.slug}`} inert={!mobile&&open!==i}><div><div className="work-reveal-inner"><ProjectScreens project={p} drift active={open===i}/><Link className="contact-button mobile-project-link" href={`/work/${p.slug}`}>VIEW PROJECT <span aria-hidden="true">↗</span></Link></div></div></div>
 </section>)}</div>
}

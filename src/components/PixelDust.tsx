'use client';
import {forwardRef,useEffect,useImperativeHandle,useRef} from 'react';
type Particle={x:number;y:number;color:string;vx:number;vy:number};
export type PixelDustHandle={draw:(progress:number)=>void};
const PixelDust=forwardRef<PixelDustHandle,{src:string}>(function PixelDust({src},ref){
 const canvas=useRef<HTMLCanvasElement>(null);const particles=useRef<Particle[]>([]);const offset=useRef({x:60,y:60});
 function draw(progress:number){const c=canvas.current;const ctx=c?.getContext('2d');if(!c||!ctx)return;ctx.clearRect(0,0,c.width,c.height);const spread=Math.sin(progress*Math.PI/2);for(const point of particles.current){ctx.fillStyle=point.color;ctx.fillRect(point.x+offset.current.x+point.vx*spread,point.y+offset.current.y+point.vy*spread,2*(1-spread*.35),2*(1-spread*.35))}}
 useImperativeHandle(ref,()=>({draw}),[]);
 useEffect(()=>{const image=new Image();image.onload=()=>{const c=canvas.current;if(!c)return;const w=320;const h=Math.round(w*image.height/image.width);const buffer=document.createElement('canvas');buffer.width=w;buffer.height=h;const ctx=buffer.getContext('2d');if(!ctx)return;ctx.drawImage(image,0,0,w,h);const bytes=ctx.getImageData(0,0,w,h).data;c.width=Math.round(w*1.6);c.height=Math.round(h*1.6);offset.current={x:w*.3,y:h*.3};const result:Particle[]=[];for(let y=0;y<h;y+=2)for(let x=0;x<w;x+=2){const i=(y*w+x)*4;if(bytes[i+3]<30)continue;const noise=Math.sin(x*127.1+y*311.7)*43758.5453;const nx=(noise-Math.floor(noise))-.5;const noiseY=Math.sin(x*269.5+y*183.3)*43758.5453;const ny=(noiseY-Math.floor(noiseY))-.5;result.push({x,y,color:`rgba(${bytes[i]},${bytes[i+1]},${bytes[i+2]},${bytes[i+3]/255})`,vx:nx*90,vy:ny*100})}particles.current=result;draw(0)};image.src=src;return()=>{image.onload=null;particles.current=[]}},[src]);
 return <canvas className="hero-dust" ref={canvas} aria-hidden="true"/>;
});
export default PixelDust;

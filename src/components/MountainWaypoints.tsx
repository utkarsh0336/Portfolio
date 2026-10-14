import {navigation} from '@/data/portfolio';
// Coordinates share the mountain image's 1687 × 932 design space.
const route='M350 900 C470 830 650 760 770 650 S970 480 1050 350 S1110 320 1090 270 S1130 240 1105 190 S1100 160 1060 120 S1040 100 1030 85';
const points=[{x:1060,y:120},{x:1105,y:190},{x:1090,y:270},{x:1050,y:350}];
export default function MountainWaypoints({active,onSelect}:{active:number;onSelect:(index:number)=>void}){
 return <div className="mountain-waypoints" aria-label="Mountain destinations">
  <svg className="mountain-trail" viewBox="0 0 1687 932" fill="none" aria-hidden="true"><defs><linearGradient id="mountain-trail-glow" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff5cf"/><stop offset=".8" stopColor="#fff5cf" stopOpacity=".8"/><stop offset="1" stopColor="#fff5cf" stopOpacity="0"/></linearGradient><mask id="mountain-trail-mask"><path className="mountain-trail-reveal" d={route} pathLength="1" stroke="white" strokeWidth="12" strokeDasharray="1" strokeDashoffset="1"/></mask></defs><path mask="url(#mountain-trail-mask)" d={route} stroke="url(#mountain-trail-glow)" strokeWidth="2.5" strokeDasharray="5 7"/></svg>
  {navigation.map((item,i)=><button className="mountain-waypoint-button" key={item.label} style={{left:`${points[i].x/1687*100}%`,top:`${points[i].y/932*100}%`}} aria-label={`Select ${item.cardLabel} waypoint`} aria-pressed={active===i} onClick={()=>onSelect(i)}><span className="waypoint-dot" aria-hidden="true"/><svg className="waypoint-marker-star" aria-hidden="true" viewBox="0 0 32 32"><path d="M16 1L20 12L31 16L20 20L16 31L12 20L1 16L12 12Z" fill="currentColor"/></svg><span className="waypoint-tooltip">{item.cardLabel}</span></button>)}
 </div>;
}

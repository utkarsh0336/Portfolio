import {links} from '@/data/portfolio';
import Link from 'next/link';
export default function Compass({className = ''}: {className?:string}) {
 return <nav className={`compass ${className}`} aria-label="Explore the portfolio">
   <span className="compass-ring" aria-hidden="true"/><span className="compass-needle" aria-hidden="true"/>
   <Link className="north" href="/work">Work <span>↗</span></Link>
   <Link className="west" href="/human">Human <span>↗</span></Link>
   <Link className="east" href="/life-learnings">Life Learnings <span>↗</span></Link>
   <Link className="south" href={links.resume} prefetch={false} target="_blank" rel="noopener noreferrer">Resume <span>↗</span></Link>
 </nav>;
}

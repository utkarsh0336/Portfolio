'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
export default function LegacyPage(){const router=useRouter();useEffect(()=>{router.replace('/life-learnings')},[router]);return <main id="main" className="page-content"><Link href="/life-learnings">Explore Life Learnings →</Link></main>}

'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
export default function LegacyPage(){const router=useRouter();useEffect(()=>{router.replace('/work/world-mart')},[router]);return <main id="main" className="page-content"><Link href="/work/world-mart">Explore World Mart →</Link></main>}

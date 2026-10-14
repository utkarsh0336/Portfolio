import type { Metadata } from 'next';
import './globals.css';
import 'lenis/dist/lenis.css';
import SmoothScroll from '@/components/SmoothScroll';
export const metadata: Metadata = { title: 'Utkarsh Sahay — Software Engineer', description: 'I build software seriously. Solving real problems even more so.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a><SmoothScroll>{children}</SmoothScroll><noscript><style>{`.opening-note,.scroll-prompt{display:none}.landing-copy,.landing-compass{opacity:1;visibility:visible}.cinematic-world{transform:none}.destination-card{opacity:1;visibility:visible}`}</style></noscript></body></html>;
}

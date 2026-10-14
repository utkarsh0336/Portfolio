import Header from '@/components/Header';
import WorkGallery from '@/components/WorkGallery';
import EndScene from '@/components/EndScene';
export const metadata = {title:'Work · Utkarsh Sahay'};
export default function Work(){return <><Header/><main id="main" className="page-content work-page"><h1>Selected work</h1><WorkGallery/><EndScene/></main></>}

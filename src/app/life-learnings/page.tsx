import Header from '@/components/Header';
import LifeLearnings from '@/components/LifeLearnings';
import EndScene from '@/components/EndScene';
export const metadata={title:'Life Learnings · Utkarsh Sahay',description:'Ten reminders from the Bhagavad Gita that guide my life and work.'};
export default function Page(){return <><Header/><main id="main" className="learnings-page"><div className="learnings-intro"><p>BEYOND THE CODE</p><h1>Life Learnings</h1><p>Ten reminders I return to.<br/>From the Bhagavad Gita, into everyday life.</p><a href="#learning-1">SCROLL TO EXPLORE ↓</a></div><LifeLearnings/><EndScene/></main></>}

// Content transcribed from the supplied CV; project images are concept previews.
export const projects = [
  {slug:'world-mart', name:'World Mart', number:'01', color:'#c0c7a9', summary:'A multi-tenant B2B/B2C marketplace connecting buyers, sellers, logistics and operations.', stack:'React · TypeScript · Node.js · Prisma · MySQL', detail:'Four role-based portals, tenant isolation and RBAC support catalogue discovery, bulk ordering, quotations and purchasing. A Gemini-powered assistant helps users navigate products; ERP synchronization, logistics tracking and inspection controls connect the order journey.', context:'SPM Medicare · Software Engineer · Aug 2026–Present'},
  {slug:'bankability', name:'BankAbility', number:'02', color:'#d8bca5', summary:'An accessibility-first Open Banking platform with adaptive interface recommendations.', stack:'KNN · Android · Web · Accessibility', detail:'A KNN-based UAES/SAES pipeline predicts user cohorts. A mathematical scoring model aggregates accessibility signals across sessions to personalize Android and Web experiences.', context:'SynapseHealthTech · Software Engineer · Dec 2025–Aug 2026'},
  {slug:'rolefit-ai', name:'RoleFit AI', number:'03', color:'#bbb5d0', summary:'An AI interview-preparation platform for job matching, skill-gap analysis and preparation roadmaps.', stack:'React · Node.js · Express.js · MongoDB · Google GenAI', detail:'Eight REST APIs and four protected routes support JWT/bcrypt authentication and validated resume uploads. Google GenAI powers job-match scores, interview questions, skill-gap analysis and ATS-friendly resume PDF exports.', context:'Personal project'},
  {slug:'fraud-detection',name:'Fraud Detection',number:'04',color:'#c6def9',summary:'Financial transaction analysis and data engineering at Sigmoid.',stack:'Python · SQL · Apache Spark · Azure Data Factory · Databricks · Snowflake',detail:'Prepared transaction data, built ETL workflows and optimized Spark batch processing to support fraud analysis and review.',context:'Sigmoid · Data Engineering'},
  {slug:'dress-recognition',name:'Dress Recognition System',number:'05',color:'#e4d0cb',summary:'Computer vision for dress recognition, visual similarity and fashion discovery.',stack:'Python · CNN · Image processing · CSV',detail:'Processed and labeled image datasets, trained a CNN for dress recognition, and explored image similarity for search and recommendations.',context:'Computer vision project'},
  {slug:'misc',name:'Misc',number:'06',color:'#223c32',summary:'Beyond work. Music, sports, travel and the things that keep me curious.',stack:'Music · Sports · Travel',detail:'A collection of interests and inspirations beyond software engineering.',context:'Personal explorations'},
];
export const sceneAssets = {
  landscape: '/art/sunset-landscape.png',
  mountain: '/reference/mountain.webp',
  // Supplied illustrated likeness, adapted to a transparent scene layer.
  character: '/art/utkarsh-and-pets-cutout.png',
  portrait: '/art/utkarsh-and-pets-original.png',
  companions: '/art/companions.svg',
};
export const motion = { scrollScreens: 2, openingDuration: 2.8, openingCastHeight: .97, castAspect: 1292/1217 };
export const links = {
  resume: '/Utkarsh-Sahay-Resume.pdf',
  email: 'mailto:utkarshsahay674@gmail.com?subject=Hello%20Utkarsh',
  github: 'https://github.com/utkarsh0336',
  linkedin: 'https://www.linkedin.com/in/utkarsh-sahay-136125232/',
  leetcode: 'https://leetcode.com/utkarshsahay674/',
};
export const navigation = [
  {label:'Work',cardLabel:'Work',href:'/work',icon:'▱',art:'/reference/laptop.webp'},
  {label:'About',cardLabel:'About',href:'/human',icon:'✌',art:'/reference/hand.webp'},
  {label:'Life Learnings',cardLabel:'Life Learnings',href:'/life-learnings',icon:'✧',art:'/learnings/learning-01.jpeg'},
  {label:'Resume',cardLabel:'Resume',href:links.resume,icon:'▤',art:'/reference/book.webp',external:true},
];
export const projectDestinations: Record<string,{label:string;href:string}> = {
  'world-mart': {label:'VISIT WORLD MART',href:'https://gloviaa.ubossai.com/'},
  'fraud-detection': {label:'DISCUSS THIS WORK',href:links.email},
  'dress-recognition': {label:'DISCUSS THIS PROJECT',href:links.email},
  misc: {label:'GET IN TOUCH',href:links.email},
  'bankability': {label:'VIEW MODEL CODE',href:'https://github.com/utkarsh0336/KNN-Model-for-UAES-and-SAES'},
  'rolefit-ai': {label:'VIEW PROJECT CODE',href:'https://github.com/utkarsh0336/Role-Fit-AI'},
};
// Supplied portfolio concept artwork, in the attachment order.
export const projectScreens: Record<string,{src:string;label:string}[]> = {
  'world-mart': [{"src": "/projects/world-mart/01.jpeg", "label": "Quality and assurance"}, {"src": "/projects/world-mart/02.jpeg", "label": "Smarter procurement"}, {"src": "/projects/world-mart/03.jpeg", "label": "AI-assisted sourcing"}, {"src": "/projects/world-mart/04.jpeg", "label": "Connected operations"}, {"src": "/projects/world-mart/05.jpeg", "label": "Connected logistics"}],
  'bankability': [{"src": "/projects/bankability/01.jpeg", "label": "Personalisation"}, {"src": "/projects/bankability/02.jpeg", "label": "Project overview"}, {"src": "/projects/bankability/03.jpeg", "label": "Calibration"}, {"src": "/projects/bankability/04.jpeg", "label": "Gaze tracking"}, {"src": "/projects/bankability/05.jpeg", "label": "UX insights"}],
  'rolefit-ai': [{"src": "/projects/rolefit-ai/01.jpeg", "label": "Skill gap detection"}, {"src": "/projects/rolefit-ai/02.jpeg", "label": "Resume analysis"}, {"src": "/projects/rolefit-ai/03.jpeg", "label": "Interview preparation"}, {"src": "/projects/rolefit-ai/04.jpeg", "label": "Resume PDF"}, {"src": "/projects/rolefit-ai/05.jpeg", "label": "Project overview"}],
  'fraud-detection': [{"src": "/projects/fraud-detection/01.jpeg", "label": "Cloud data engineering"}, {"src": "/projects/fraud-detection/02.jpeg", "label": "ETL pipelines"}, {"src": "/projects/fraud-detection/03.jpeg", "label": "Transaction insights"}, {"src": "/projects/fraud-detection/04.jpeg", "label": "Spark batch workflows"}, {"src": "/projects/fraud-detection/05.jpeg", "label": "Fraud detection"}],
  'dress-recognition': [{"src": "/projects/dress-recognition/01.jpeg", "label": "Recommendations"}, {"src": "/projects/dress-recognition/02.jpeg", "label": "Visual similarity"}, {"src": "/projects/dress-recognition/03.jpeg", "label": "Fashion search"}, {"src": "/projects/dress-recognition/04.jpeg", "label": "Dress recognition"}, {"src": "/projects/dress-recognition/05.jpeg", "label": "Dataset preparation"}],
  'misc': [{"src": "/projects/misc/01.jpeg", "label": "Stay in Motion"}, {"src": "/projects/misc/02.jpeg", "label": "Play with Heart"}, {"src": "/projects/misc/03.jpeg", "label": "Get Beautifully Lost"}, {"src": "/projects/misc/04.jpeg", "label": "Take the Scenic Route"}, {"src": "/projects/misc/05.jpeg", "label": "Chase New Horizons"}, {"src": "/projects/misc/06.jpeg", "label": "Unplug & Unwind"}, {"src": "/projects/misc/07.jpeg", "label": "Feel Every Beat"}, {"src": "/projects/misc/08.jpeg", "label": "Find Your Rhythm"}, {"src": "/projects/misc/09.jpeg", "label": "Enjoy the Rally"}, {"src": "/projects/misc/10.jpeg", "label": "More Than a Job Title"}],
};

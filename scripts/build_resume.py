"""Rebuild the public, text-based resume. Run with ReportLab installed."""
from pathlib import Path
from xml.sax.saxutils import escape
import reportlab
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path(reportlab.__file__).parent / 'fonts'
pdfmetrics.registerFont(TTFont('Resume', str(FONTS / 'Vera.ttf')))
pdfmetrics.registerFont(TTFont('ResumeBold', str(FONTS / 'VeraBd.ttf')))
pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold')
INK = colors.HexColor('#152433')
body = ParagraphStyle('Body', fontName='Resume', fontSize=9.5, leading=12.1,
                      textColor=INK, spaceAfter=2.4, alignment=TA_LEFT)
bullet = ParagraphStyle('Bullet', parent=body, leftIndent=9, firstLineIndent=0,
                        bulletIndent=0, spaceAfter=2)
heading = ParagraphStyle('Heading', parent=body, fontName='ResumeBold',
                         fontSize=10.1, leading=12, spaceBefore=5, spaceAfter=3,
                         keepWithNext=True)
role = ParagraphStyle('Role', parent=body, fontName='ResumeBold', fontSize=9.7,
                      spaceBefore=3, spaceAfter=1, keepWithNext=True)
meta = ParagraphStyle('Meta', parent=body, fontSize=8.7, leading=11,
                      textColor=colors.HexColor('#435365'), keepWithNext=True)
story = []

def p(text, style=body):
    return Paragraph(text, style)

def section(title):
    story.append(p(title, heading))

def bullets(items):
    story.extend(Paragraph(escape(item), bullet, bulletText='-') for item in items)

def job(title, dates, items):
    story.append(p(escape(title), role))
    story.append(p(escape(dates), meta))
    bullets(items)

story.append(p('UTKARSH SAHAY', ParagraphStyle('Name', parent=body,
                  fontName='ResumeBold', fontSize=22, leading=25, spaceAfter=3)))
story.append(p('Software Engineer | Backend, Full Stack &amp; Applied AI',
               ParagraphStyle('Title', parent=body, fontSize=10.4, leading=14)))
story.append(p('India | <link href="mailto:utkarshsahay674@gmail.com">utkarshsahay674@gmail.com</link> | +91-9905535123', meta))
story.append(p('<link href="https://utkarsh-sahay-portfolio.vercel.app/">utkarsh-sahay-portfolio.vercel.app</link> | '
               '<link href="https://github.com/utkarsh0336">github.com/utkarsh0336</link> | '
               '<link href="https://www.linkedin.com/in/utkarsh-sahay-136125232/">LinkedIn: utkarsh-sahay-136125232</link>',
               ParagraphStyle('Links', parent=body, fontSize=8, leading=11)))

section('TECHNICAL SKILLS')
for line in [
    '<b>Languages:</b> Python, C++, Java, TypeScript, JavaScript, SQL',
    '<b>Full Stack:</b> React, Node.js, Express.js, REST APIs, Prisma, MySQL, MongoDB, Redis',
    '<b>Cloud &amp; Data:</b> AWS, Azure, Docker, GitHub Actions, CI/CD, Spark/PySpark, Snowflake, Airflow, ETL',
    '<b>AI &amp; Real-Time 3D:</b> Google GenAI/Gemini, KNN, CNN, OpenCV, Unreal Engine, MetaHuman, lip sync',
    '<b>Fundamentals:</b> Data structures, algorithms, OOP, system design, authentication, RBAC, integration/E2E testing',
]:
    story.append(p(line))

section('PROFESSIONAL EXPERIENCE')
job('SPM Medicare Pvt. Ltd. | Senior Software Engineer - AI',
    'Aug 2026 - Present | Noida, India', [
    'Developed Glovia / World Mart, a multi-tenant B2B/B2C marketplace with four role-based portals, using React, TypeScript, Node.js, Prisma and MySQL.',
    'Built REST APIs and transactional procurement workflows; implemented tenant isolation, RBAC, API validation and automated cross-account access checks.',
    'Integrated Stripe payments, multi-currency pricing, reconciliation, refund tracking and seller-fee records; connected ERP inventory, logistics and inspection-driven dispatch controls.',
    'Integrated a Gemini product-discovery assistant; containerized services with Docker and automated CI/CD with GitHub Actions, with integration/E2E tests for critical workflows and provider failures.',
    'Built the UBOSS company website with responsive CXO, World Mart and AI Avatar product pages, motion design, interactive concept previews and contact journeys.',
    'Developing AI Avatar with MetaHuman and Unreal Engine: character creation, facial animation and lip sync, with human-like conversational interaction in development.',
])
job('SynapseHealthTech | Software Engineer',
    'Dec 2025 - Aug 2026 | Remote', [
    'Engineered BankAbility, an accessibility-first Open Banking platform, with KNN-based UAES/SAES cohort prediction and adaptive Android/web interface recommendations.',
    'Designed accessibility scoring across sessions and contributed Rust-based gaze-processing and UX intelligence workflows to support personalized experiences.',
])
job('Sigmoid Analytics | Data Engineer Intern',
    'Jan 2025 - Jul 2025 | Bengaluru, India', [
    'Implemented Python, SQL and Spark/PySpark ETL transformations, joins, aggregations and validation; used Azure, Snowflake and Airflow for cloud processing and orchestration.',
])
job('Intrainz | Machine Learning Intern',
    'Dec 2022 - May 2023 | Remote', [
    'Built a CNN dress-recognition workflow; preprocessed 500+ images using OpenCV and achieved approximately 85% test accuracy.',
])

section('SELECTED PROJECTS')
story.append(p('RoleFit AI | React, Node.js, Express.js, MongoDB, Google GenAI', role))
bullets(['Built 8 REST APIs and 4 protected routes with JWT/bcrypt authentication and validated resume uploads; integrated job matching, skill-gap analysis, interview preparation and resume PDF export.'])
story.append(p('StellaCam.ai | Educational video studio | V1, invite-only testing', role))
bullets(['Built a cinematic site with interactive SVG science and algorithm demos, presenting a conversational idea-to-storyboard-to-video workflow for narrated educational explainers.'])

section('EDUCATION & ACHIEVEMENTS')
story.append(p('<b>Birla Institute of Technology, Mesra</b> | B.Tech., Computer Science and Engineering | 2025'))
story.append(p('CGPA: 9.11/10 | Dean\'s top 10% | GP Birla Scholarship awarded twice'))
story.append(p('LeetCode: global rank 107 of 35,000+ in Biweekly Contest 184; rating 1838.'))

target = ROOT / 'public' / 'Utkarsh-Sahay-Resume.pdf'
doc = SimpleDocTemplate(str(target), pagesize=letter, rightMargin=34, leftMargin=34,
                        topMargin=28, bottomMargin=27, title='Utkarsh Sahay - Software Engineer',
                        author='Utkarsh Sahay', pageCompression=1)
doc.build(story)
print(target)

import {
  FiCpu, FiCode, FiCloud, FiSmartphone, FiDatabase, FiZap,
  FiShield, FiCompass, FiTrendingUp, FiRefreshCw,
} from 'react-icons/fi'

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
 // { label: 'Innovation Hub', href: '/innovation-hub' }, 
 // { label: 'Programs', href: '/programs' },
 // { label: 'Projects', href: '/projects' },
  { label: 'Community', href: '/community' },
//  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const partners = [
  'Federal University Dutse', 'Lagos Innovation Lab', 'Kano Tech Collective',
  'Savanna Research Institute', 'Northgate Ventures', 'Bridge Cloud Partners',
]

export const services = [
  { icon: FiCpu, title: 'AI & Machine Learning', desc: 'Custom models, predictive systems, and applied research that turn raw data into decisions your organisation can act on.' },
  { icon: FiCode, title: 'Software Development', desc: 'Full-stack products built on modern, maintainable architecture — from first commit to production scale.' },
  { icon: FiCloud, title: 'Cloud Engineering', desc: 'Resilient, cost-aware infrastructure on AWS, Azure, and GCP, designed to grow with your traffic, not against your budget.' },
  { icon: FiSmartphone, title: 'Web & Mobile Apps', desc: 'Cross-platform experiences engineered for speed and clarity, from customer-facing apps to internal tools.' },
  { icon: FiDatabase, title: 'Data Engineering', desc: 'Pipelines and warehouses that make your data trustworthy, queryable, and ready for analytics or AI.' },
  { icon: FiZap, title: 'Automation', desc: 'Workflow and process automation that removes repetitive work so your team can focus on judgment calls.' },
  { icon: FiShield, title: 'Cybersecurity', desc: 'Security reviews, hardening, and monitoring built around real African threat models, not generic checklists.' },
  { icon: FiCompass, title: 'Innovation Consulting', desc: 'Strategic guidance for organisations exploring AI adoption, digital products, or new technical direction.' },
  { icon: FiTrendingUp, title: 'Startup Incubation', desc: 'Structured support — technical, strategic, and financial — for early-stage founders building real companies.' },
  { icon: FiRefreshCw, title: 'Digital Transformation', desc: 'End-to-end modernisation for institutions moving legacy processes onto reliable digital systems.' },
]

export const programs = [
  { title: 'AI Bootcamp', duration: '12 weeks', desc: 'An intensive, project-based introduction to machine learning and applied AI, ending with a deployed capstone project.' },
  { title: 'Software Engineering Fellowship', duration: '6 months', desc: 'A rigorous fellowship covering full-stack engineering, system design, and real client-facing project work.' },
  { title: 'Cloud Academy', duration: '8 weeks', desc: 'Hands-on training in cloud infrastructure, DevOps practices, and production deployment across major providers.' },
  { title: 'Startup Accelerator', duration: '4 months', desc: 'Technical, product, and fundraising support for early-stage startups building their first real product.' },
  { title: 'Hackathons', duration: '48 hours', desc: 'Fast-paced build sprints where students and engineers ship working prototypes to solve local problems.' },
  { title: 'Research Program', duration: 'Ongoing', desc: 'Applied research placements exploring AI, data systems, and emerging technology relevant to African markets.' },
]

export const projects = [
  { title: 'Smart Hospital AI', stack: 'Python · TensorFlow · React · PostgreSQL', desc: 'A triage support system that helps clinical staff prioritise patients using predictive risk scoring.' },
  { title: 'AgriTech Platform', stack: 'Node.js · React Native · MySQL', desc: 'A marketplace connecting smallholder farmers directly to buyers, with weather and yield insights built in.' },
  { title: 'Education Management System', stack: 'React · Express · MongoDB', desc: 'A unified platform for attendance, grading, and communication across multi-campus institutions.' },
  { title: 'AI Chatbot', stack: 'Python · LangChain · FastAPI', desc: 'A multilingual support assistant trained to handle customer queries across English and regional languages.' },
  { title: 'Business Analytics Dashboard', stack: 'React · D3.js · Node.js', desc: 'A real-time reporting dashboard giving SME owners visibility into sales, inventory, and cash flow.' },
]

export const testimonials = [
  { name: 'Amina Yusuf', role: 'Founder, AgriLink', quote: 'Netraform did not just build our platform — they taught our team how to think about scale from day one.' },
  { name: 'Chidi Okonkwo', role: 'AI Fellow, 2025 Cohort', quote: 'The bootcamp was the most demanding twelve weeks of my career, and the most useful. I deployed real models within weeks.' },
  { name: 'Fatima Bello', role: 'CTO, ClinicOS', quote: 'Their engineering standard is the highest I have worked with locally. Every review made our codebase better.' },
]

export const blogPosts = [
  { title: 'The Future of AI in Africa', date: 'July 14, 2026', excerpt: 'Why the next wave of AI adoption will be shaped as much in Lagos and Nairobi as in San Francisco.' },
  { title: 'How Students Can Build Real Projects', date: 'June 30, 2026', excerpt: 'A practical framework for moving from tutorials to a portfolio that actually gets you hired.' },
  { title: 'Cloud Computing Roadmap for African Startups', date: 'June 12, 2026', excerpt: 'A step-by-step path from your first deploy to infrastructure that survives real traffic.' },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Partner Organisations' },
  { value: 50, suffix: '+', label: 'Events Hosted' },
]

export const whyReasons = [
  { title: 'Experienced Team', desc: 'Engineers and researchers who have shipped production systems, not just prototypes.' },
  { title: 'Industry Projects', desc: 'Real client work, not simulated exercises — every program is grounded in live problems.' },
  { title: 'Innovation Culture', desc: 'A standard that rewards curiosity and rigor over shortcuts.' },
  { title: 'Modern Technology', desc: 'Current tools and architecture, kept current as the industry moves.' },
  { title: 'AI First', desc: 'Machine intelligence built into how we design solutions, not bolted on afterward.' },
  { title: 'Global Standards', desc: 'Engineering and design practice benchmarked against the best studios worldwide.' },
  { title: 'Community Driven', desc: 'A growing network of developers, founders, and researchers who support each other.' },
]

export const faqs = [
  { q: 'Who can join Netraform programs?', a: 'Students, early-career developers, founders, and researchers across Africa. Most programs have no strict prerequisite beyond a willingness to build.' },
  { q: 'Are the programs free?', a: 'Some programs, like our hackathons and community events, are free. Bootcamps and fellowships have tuition with need-based support available — details are listed on each program page.' },
  { q: 'Does Netraform take equity in incubated startups?', a: 'For our Startup Accelerator, we take a small, transparent equity stake in exchange for technical and strategic support. Terms are shared upfront before any commitment.' },
  { q: 'Can organisations hire Netraform for client work?', a: 'Yes. Our engineering team takes on select client projects across AI, software, and cloud engineering — reach out through the Contact page.' },
  { q: 'Where is Netraform based?', a: 'Netraform operates as a distributed hub with a physical base in Nigeria, working with contributors and partners across the continent.' },
]

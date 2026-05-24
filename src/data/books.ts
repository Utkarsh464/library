export interface Book {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  gradient: string
  year: string
  features: string[]
  liveUrl?: string
}

export const books: Book[] = [
  {
    id: 'pulsemed',
    title: 'PulseMed',
    category: 'Healthcare',
    description: 'Patient management dashboard for a multi-specialty clinic in Pune.',
    fullDescription: 'A comprehensive patient management platform that streamlines appointment scheduling, medical records, billing, and analytics for a growing multi-specialty clinic. Built for doctors who need data at their fingertips, not buried in files.',
    gradient: 'from-blue-900/40 to-teal-900/40',
    year: '2025',
    features: ['Appointment scheduling', 'Patient records', 'Billing integration', 'Analytics dashboard'],
  },
  {
    id: 'quickfund',
    title: 'QuickFund',
    category: 'Fintech',
    description: 'Loan origination platform with real-time approval workflows.',
    fullDescription: 'A modern loan origination system that cuts approval times from days to minutes. Automated verification, credit assessment, and disbursement tracking — all in one clean interface for lenders and borrowers alike.',
    gradient: 'from-emerald-900/40 to-cyan-900/40',
    year: '2025',
    features: ['Real-time approvals', 'Credit assessment', 'Disbursement tracking', 'Borrower portal'],
  },
  {
    id: 'tradesift',
    title: 'TradeSift',
    category: 'Analytics',
    description: 'Market intelligence dashboard with live data visualizations.',
    fullDescription: 'A real-time market intelligence platform that ingests streaming data from multiple exchanges and presents actionable insights through interactive charts, alerts, and customizable dashboards.',
    gradient: 'from-violet-900/40 to-fuchsia-900/40',
    year: '2025',
    features: ['Live market data', 'Interactive charts', 'Custom alerts', 'Portfolio tracking'],
  },
  {
    id: 'spicehaven',
    title: 'Spice Haven',
    category: 'Restaurant',
    description: 'Elegant dining website with online reservations and gallery.',
    fullDescription: 'A warm and inviting website for a fine Indian dining restaurant featuring an immersive gallery, digital menu, table booking system, and a brand presence that matches the quality of the cuisine.',
    gradient: 'from-amber-900/40 to-red-900/40',
    year: '2025',
    features: ['Online reservations', 'Digital menu', 'Photo gallery', 'Location & hours'],
  },
  {
    id: 'console',
    title: 'WebGrowth Console',
    category: 'SaaS',
    description: 'Client portal for tracking project milestones and site analytics.',
    fullDescription: 'A client-facing dashboard that puts project progress, site analytics, and communication in one place. Clients stay informed without the back-and-forth emails.',
    gradient: 'from-sky-900/40 to-indigo-900/40',
    year: '2025',
    features: ['Milestone tracking', 'Site analytics', 'Client communication', 'File sharing'],
  },
  {
    id: 'dashboard',
    title: 'Growth Dashboard',
    category: 'Analytics',
    description: 'Business KPI tracker with live metrics and reporting.',
    fullDescription: 'A real-time business intelligence dashboard that aggregates KPIs from multiple sources into a single, clean view. Track revenue, users, orders, and growth — all updated live.',
    gradient: 'from-rose-900/40 to-pink-900/40',
    year: '2025',
    features: ['Live KPI tracking', 'Custom reports', 'Data aggregation', 'Export & share'],
  },
]

export const categories = ['All', 'Healthcare', 'Fintech', 'Analytics', 'Restaurant', 'SaaS']

export const readingRooms = [
  { icon: 'Globe', title: 'Web Development', desc: 'Custom websites built from scratch — no templates, no compromises. Every pixel crafted for your brand.' },
  { icon: 'BarChart3', title: 'Business Dashboards', desc: 'Real-time data rooms with live metrics, charts, and KPI tracking tailored to your operations.' },
  { icon: 'Lightbulb', title: 'Digital Strategy', desc: 'A curated roadmap for your online presence — branding, UX, content, and launch.' },
  { icon: 'ShoppingCart', title: 'E-Commerce', desc: 'Online stores designed for conversion. Product catalogs, payments, inventory — all in one place.' },
]

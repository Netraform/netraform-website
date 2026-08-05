import { Metadata } from 'next';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
  title: 'Research | Netraform Technologies',
  description: 'Explore our research initiatives in AI, robotics, cloud computing, and digital transformation.',
  openGraph: {
    title: 'Research | Netraform',
    description: 'Innovation through research and development.',
  },
};

export default function Research() {
  return <ResearchClient />;
}

import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Netraform Technologies',
  description: 'Learn about Netraform Technologies - our mission to build Africa\'s future through innovation, AI, and digital transformation.',
  openGraph: {
    title: 'About Netraform Technologies',
    description: 'Empowering the next generation through intelligent solutions and innovation.',
  },
};

export default function About() {
  return <AboutClient />;
}

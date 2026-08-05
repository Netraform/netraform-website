import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services | Netraform Technologies',
  description: 'Explore our comprehensive technology services including AI, software development, cloud solutions, and digital transformation.',
  openGraph: {
    title: 'Our Services | Netraform',
    description: 'End-to-end technology solutions for your business.',
  },
};

export default function Services() {
  return <ServicesClient />;
}

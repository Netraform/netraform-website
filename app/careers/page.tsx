import { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Netraform Technologies',
  description: 'Join our team. Explore career opportunities, internships, and grow with us.',
  openGraph: {
    title: 'Careers at Netraform',
    description: 'Build the future with us.',
  },
};

export default function Careers() {
  return <CareersClient />;
}

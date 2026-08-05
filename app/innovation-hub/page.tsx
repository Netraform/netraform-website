import { Metadata } from 'next';
import InnovationHubClient from './InnovationHubClient';

export const metadata: Metadata = {
  title: 'Innovation Hub | Netraform Technologies',
  description: 'Explore our innovation programs: bootcamps, hackathons, fellowships, and startup incubation.',
  openGraph: {
    title: 'Innovation Hub | Netraform',
    description: 'Build, learn, and innovate with us.',
  },
};

export default function InnovationHub() {
  return <InnovationHubClient />;
}

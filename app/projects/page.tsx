import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Netraform Technologies',
  description: 'Explore our portfolio of innovative projects and successful case studies.',
  openGraph: {
    title: 'Our Projects | Netraform',
    description: 'Innovation in action across multiple industries.',
  },
};

export default function Projects() {
  return <ProjectsClient />;
}

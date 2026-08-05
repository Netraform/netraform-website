import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog | Netraform Technologies',
  description: 'Latest articles, tutorials, and insights on AI, software engineering, robotics, and innovation.',
  openGraph: {
    title: 'Blog | Netraform',
    description: 'Technology insights and industry trends.',
  },
};

export default function Blog() {
  return <BlogClient />;
}

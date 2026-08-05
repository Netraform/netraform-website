import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Netraform Technologies',
  description: 'Frequently asked questions about Netraform, our services, and programs.',
  openGraph: {
    title: 'FAQ | Netraform',
    description: 'Find answers to your questions.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | Netraform Technologies',
  description: 'Frequently asked questions about Netraform Technologies, our services, bootcamps, and programs.',
  openGraph: {
    title: 'Frequently Asked Questions | Netraform',
    description: 'Find answers to common questions about Netraform.',
  },
};

export default function FAQ() {
  return <FAQClient />;
}

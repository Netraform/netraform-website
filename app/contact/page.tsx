import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | Netraform Technologies',
  description: 'Get in touch with Netraform. Let\'s discuss your project or inquiry.',
  openGraph: {
    title: 'Contact Us | Netraform',
    description: 'We\'d love to hear from you.',
  },
};

export default function Contact() {
  return <ContactClient />;
}

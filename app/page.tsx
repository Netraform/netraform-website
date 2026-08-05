import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/StatsSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import ServicesPreview from '@/components/sections/ServicesPreview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import InnovationHighlight from '@/components/sections/InnovationHighlight';
import CommunitySection from '@/components/sections/CommunitySection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TrustedBy from '@/components/sections/TrustedBy';
import BlogPreview from '@/components/sections/BlogPreview';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Netraform Technologies | Building the Future, Together',
  description: 'An AI, software engineering, and innovation hub empowering the next generation through intelligent solutions, startup incubation, and applied research.',
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StatsSection />
      <WhatWeDo />
      <ServicesPreview />
      <FeaturedProjects />
      <InnovationHighlight />
      <CommunitySection />
      <TestimonialSection />
      <TrustedBy />
      <BlogPreview />
      <CTASection />
    </div>
  );
}

import Hero from '../components/sections/Hero'
 import TrustedBy from '../components/sections/TrustedBy' 
import AboutSection from '../components/sections/AboutSection'
import WhatWeDo from '../components/sections/WhatWeDo'
import InnovationHubSection from '../components/sections/InnovationHubSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import CommunitySection from '../components/sections/CommunitySection'
import WhyChoose from '../components/sections/WhyChoose'
import StatsSection from '../components/sections/StatsSection'
import Testimonials from '../components/sections/Testimonials'
import BlogSection from '../components/sections/BlogSection'
import CTASection from '../components/sections/CTASection'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Hero />
   {/*    <TrustedBy /> */}
      <AboutSection />
     {/*  <WhatWeDo /> */}
      <InnovationHubSection />
     {/*  <ProgramsSection /> */}
    {/*   <FeaturedProjects /> */}
      <CommunitySection />
      <WhyChoose />
    {/*   <StatsSection /> */}
      <Testimonials />
      <BlogSection />
      <CTASection />
      <Footer /> 
    </>
  )
}


import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import GetStartedSection from '@/components/GetStartedSection';
import PricingSection from '@/components/PricingSection';
import WhyUsSection from '@/components/WhyUsSection';
import CollegesSection from '@/components/CollegesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <GetStartedSection />
        <WhyUsSection />
        <PricingSection />
        <CollegesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

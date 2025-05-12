
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-gray-900">
              Smarter Learning. Stronger Skills. Better Placements.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Ikshvaku Innovations empowers students with Astra, Yudha, and Drona — a next-gen suite for learning, assessment, and placement readiness.
            </p>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/AstraLogo.png" alt="Astra Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Astra</h3>
                    <p className="text-xs text-gray-500">Structured Learning</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/DronaLogo.png" alt="Drona Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Drona</h3>
                    <p className="text-xs text-gray-500">DSA Visualizer</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl col-span-2 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/YudhaLogo.png" alt="Yudha Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Yudha</h3>
                    <p className="text-xs text-gray-500">Assessment Platform</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-100 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

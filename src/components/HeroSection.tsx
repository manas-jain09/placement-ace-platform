
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
              Empowering Students to Ace Placements through Smart Learning & Assessment
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Ikshvaku Innovations is redefining how students learn, assess, and prepare for technical placements 
              with a powerful suite of platforms: Astra, Yodha, Drona, Yudha, and AstraSiksha.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium">
                Explore Astra
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
              <Button variant="secondary" className="bg-secondary hover:bg-secondary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </div>
            
            <div className="mt-10">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-primary-light border-2 border-white"></div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">1200+ Students</p>
                  <p className="text-xs text-gray-500">Got placed in top tech companies</p>
                </div>
              </div>
            </div>
          </div>
          
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
                  <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/YudhaLogo.png" alt="Yudha Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Yodha</h3>
                    <p className="text-xs text-gray-500">Performance Dashboard</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/DronaLogo.png" alt="Drona Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Drona</h3>
                    <p className="text-xs text-gray-500">DSA Visualizer</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img src="/YudhaLogo.png" alt="Yudha Logo" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-semibold">Yudha</h3>
                    <p className="text-xs text-gray-500">Assessment Platform</p>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <div className="bg-pink-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-2">
                      A
                    </div>
                    <h3 className="font-semibold">AstraSiksha</h3>
                    <p className="text-xs text-gray-500">Mentorship & Community</p>
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

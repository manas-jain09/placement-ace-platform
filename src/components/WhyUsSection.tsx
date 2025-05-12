
import React from 'react';
import { TrendingUp, Brain, Lightbulb } from 'lucide-react';

const WhyUsSection = () => {
  return (
    <section id="why" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary-lighter/10 text-primary-light px-4 py-1.5 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Why Ikshvaku Innovations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Makes Us Different?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built our platforms with real industry challenges in mind, focusing on what matters most for technical placements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Designed by Students</h3>
            <p className="text-gray-600">
              Built by students who've been through the placement process and understand what truly matters.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Placement Focused</h3>
            <p className="text-gray-600">
              Curriculum and assessments tailored specifically for technical interview preparation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <div className="font-bold text-lg text-purple-600">5</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Integrated Ecosystem</h3>
            <p className="text-gray-600">
              Five powerful platforms working seamlessly together for complete learning experience.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Track record of helping students secure placements in top tech companies.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <p className="italic text-gray-600 mb-4">
                    "The structured approach of Astra helped me build a solid foundation in DSA, while Yudha's mock tests prepared me for the actual interview experience."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <p className="font-semibold">Priya Mehta</p>
                      <p className="text-xs text-gray-500">Placed at Microsoft</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <p className="italic text-gray-600 mb-4">
                    "The visualizations on Drona helped me truly understand complex algorithms. I could finally see what was happening instead of just memorizing steps."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <p className="font-semibold">Raj Sharma</p>
                      <p className="text-xs text-gray-500">Placed at Amazon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Students Placed</span>
                    <span className="font-semibold">1200+</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Partner Colleges</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Partner Companies</span>
                    <span className="font-semibold">40+</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-purple-500 rounded-full" style={{width: "60%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Average Placement Rate</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-orange-500 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

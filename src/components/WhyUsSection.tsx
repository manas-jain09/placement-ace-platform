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
            We seamlessly integrate technical skill-building into academics — making students industry-ready without overwhelming their schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Built for Academia</h3>
            <p className="text-gray-600">
              Designed to complement academic schedules while boosting coding and technical proficiency.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Placement-Ready Skills</h3>
            <p className="text-gray-600">
              Focused on core computer science subjects and DSA to crack technical interviews.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <div className="font-bold text-lg text-purple-600">5</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Complete Learning Suite</h3>
            <p className="text-gray-600">
              From coding assessments to concept visualization and curated learning paths—all in one ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Academic Collaboration</h3>
            <p className="text-gray-600">
              Built in close collaboration with educators to integrate skill development directly into curriculum delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

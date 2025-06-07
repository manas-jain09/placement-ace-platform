
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Ready to Transform Your Learning?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900">
            Start Your Journey to Technical Excellence
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who are already mastering DSA, acing technical interviews, and securing their dream placements with our comprehensive learning platform.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

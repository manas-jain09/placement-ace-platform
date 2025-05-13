
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CollegesSection = () => {
  return (
    <section id="colleges" className="section-padding bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary-lighter/10 text-primary-light px-4 py-1.5 rounded-full mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">For Colleges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Empower Your Institution</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help your students excel in placements with our comprehensive software suite designed for educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">
              <h3 className="text-2xl font-bold mb-6">Custom Licensing</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-1">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Suite</h4>
                    <p className="text-gray-600">
                      Get access to Astra, Drona & Yudha suite with bulk user enrollment options.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-1">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Performance Analytics</h4>
                    <p className="text-gray-600">
                      Comprehensive placement-readiness reporting for administrators and faculty.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-1">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Faculty Tools</h4>
                    <p className="text-gray-600">
                      Create custom assignments, track progress and identify at-risk students.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-1">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    className="h-5 w-5 text-blue-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Access Control</h4>
                  <p className="text-gray-600">
                    Grant role-based access to departments, faculty, and students to ensure structured usage and data privacy.
                  </p>
                </div>
              </div>

              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Benefits for Your Institution</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 card-hover">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-green-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Improved Placement Rates</h4>
                  <p className="text-gray-600 text-sm">
                    Enhance your institution's placement statistics and reputation.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 card-hover">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-blue-600"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Standardized Learning</h4>
                  <p className="text-gray-600 text-sm">
                    Ensure consistent quality of technical education across departments.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 card-hover">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-purple-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Early Intervention</h4>
                  <p className="text-gray-600 text-sm">
                    Identify students who need additional help before it's too late.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 card-hover">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-orange-600"
                    >
                      <path d="M5 22h14" />
                      <path d="M5 2h14" />
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Time Efficiency</h4>
                  <p className="text-gray-600 text-sm">
                    Automate assessments and grading to free up faculty time.
                  </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;

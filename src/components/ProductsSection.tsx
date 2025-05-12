import React from 'react';
import { 
  Rocket, 
  List, 
  Check, 
  Badge, 
  ChartLine, 
  Eye, 
  Play, 
  LayoutDashboard,
  Shield,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary-lighter/10 text-primary-light px-4 py-1.5 rounded-full mb-4">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">A Complete Ecosystem for Technical Placement Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our integrated platforms work together to deliver a comprehensive learning and assessment experience.
          </p>
        </div>

        {/* Product 1: Astra */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-primary/5 p-2 rounded-lg inline-block mb-4">
                <span className="font-semibold text-primary">Astra</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Structured Learning Platform</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Learning Paths:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">CS Subjects:</span> In-depth coverage of Operating Systems, OOP, DBMS, and Computer Networks with rich, article-based content.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">Beginner | Intermediate | Advanced:</span> DSA-centric paths curated with handpicked problems and solutions.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <List className="h-5 w-5 text-primary mr-3" />
                    <span>Curated topic-wise questions</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <ChartLine className="h-5 w-5 text-primary mr-3" />
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span>Step-by-step solutions</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Badge className="h-5 w-5 text-primary mr-3" />
                    <span>Weekly challenges</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">
                  <span className="font-bold">Outcome:</span> Build a solid foundation and advance to company-level DSA mastery.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/Astra.png" 
                  alt="Astra Learning Platform" 
                  className="w-full h-auto rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
{/* Product 2: Yodha */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/Yodha.png" 
                  alt="Yodha Performance Dashboard" 
                  className="w-full h-auto rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-primary/5 p-2 rounded-lg inline-block mb-4">
                <span className="font-semibold text-primary">Yodha</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Personalized Performance Dashboard</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Profile Details:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      Name, College, CGPA, and Bio.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Learning Metrics:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <ChartLine className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      Progress in each learning path.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <ChartLine className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      Question statistics: Easy, Medium, Hard.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <ChartLine className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      Topic-wise strengths and weaknesses.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Badge System:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <Badge className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      Earn badges for consistency, excellence, and challenge wins.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-medium text-purple-900">
                  <span className="font-bold">Outcome:</span> Understand where you stand, grow smarter, and showcase achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 3: Drona */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-primary/5 p-2 rounded-lg inline-block mb-4">
                <span className="font-semibold text-primary">Drona</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Algorithm & DSA Visualizer</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Data Structure Visualizations:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Eye className="h-4 w-4 text-accent-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Fundamental Structures:</span> Arrays, Linked Lists, Stacks, Queues, Deques, Trees, BSTs, Graphs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Eye className="h-4 w-4 text-accent-blue" />
                    </div>
                    <div>
                      <span className="font-medium">Interactive Elements:</span> Step-by-step visualization with adjustable parameters and speeds.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Algorithm Visualizations:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Sparkles className="h-5 w-5 text-accent-blue mr-3" />
                    <span>Searching & Sorting</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Sparkles className="h-5 w-5 text-accent-blue mr-3" />
                    <span>CPU & Disk Scheduling</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Sparkles className="h-5 w-5 text-accent-blue mr-3" />
                    <span>Recursion Problems</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Sparkles className="h-5 w-5 text-accent-blue mr-3" />
                    <span>Classic Algorithms</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">
                  <span className="font-bold">Outcome:</span> Conceptual clarity through intuitive animations. Perfect for classroom teaching and self-learning.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/Drona.png" 
                  alt="Drona Visualization Platform" 
                  className="w-full h-auto rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product 4: Yudha */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/Yudha.png" 
                  alt="Yudha Assessment Platform" 
                  className="w-full h-auto rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-primary/5 p-2 rounded-lg inline-block mb-4">
                <span className="font-semibold text-primary">Yudha</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Advanced Assessment Platform</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Assessment Types:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <span className="font-medium">Mixed-format:</span> MCQs + Coding assessments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <span className="font-medium">Weekly, Monthly, and Company-specific:</span> Comprehensive mock tests.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Security Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Shield className="h-5 w-5 text-orange-600 mr-3" />
                    <span>Anti-cheating detection</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm card-hover">
                    <Shield className="h-5 w-5 text-orange-600 mr-3" />
                    <span>AI-based proctoring</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Admin Tools:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                      <LayoutDashboard className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      Faculty/Moderator assessment creation dashboard.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                      <ChartLine className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      Live tracking and reporting.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="font-medium text-orange-900">
                  <span className="font-bold">Outcome:</span> A robust platform for institutes to conduct credible assessments and prepare students for interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

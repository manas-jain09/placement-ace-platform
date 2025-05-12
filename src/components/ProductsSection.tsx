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
  Users 
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
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">A</span>
                      </div>
                      <span className="font-bold text-lg">Astra Dashboard</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold mb-1">CS Subjects</h5>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{width: "65%"}}></div>
                      </div>
                      <span className="text-xs text-gray-600 mt-1">65% complete</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold mb-1">DSA Paths</h5>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{width: "40%"}}></div>
                      </div>
                      <span className="text-xs text-gray-600 mt-1">40% complete</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-3 bg-gray-50 border-b">
                      <h5 className="font-semibold">Weekly Challenge Progress</h5>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Binary Trees</span>
                          <span className="text-green-600">4/5 completed</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{width: "80%"}}></div>
                        </div>
                        
                        <div className="flex justify-between text-sm pt-2">
                          <span>Dynamic Programming</span>
                          <span className="text-orange-600">2/5 completed</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-orange-500 rounded-full" style={{width: "40%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Yodha */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">Y</span>
                      </div>
                      <span className="font-bold text-lg">Performance Dashboard</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div>
                      <h5 className="font-semibold">Rahul Sharma</h5>
                      <p className="text-sm text-gray-600">VIT Vellore • CGPA: 8.9</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">42</div>
                      <div className="text-xs text-gray-600">Easy</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">28</div>
                      <div className="text-xs text-gray-600">Medium</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-3xl font-bold text-red-600">15</div>
                      <div className="text-xs text-gray-600">Hard</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border p-2 rounded-lg text-center flex flex-col items-center">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                        <Badge className="h-5 w-5 text-yellow-600" />
                      </div>
                      <span className="text-sm">Consistency Badge</span>
                    </div>
                    <div className="border p-2 rounded-lg text-center flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                        <Badge className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-sm">Excellence Badge</span>
                    </div>
                  </div>
                </div>
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

        {/* Other Products in Card Format */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Drona */}
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Drona</CardTitle>
              <CardDescription>Algorithm & DSA Visualizer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Data Structure Visualizations</h4>
                  <p className="text-sm text-gray-600">Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and more.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Algorithm Visualizations</h4>
                  <p className="text-sm text-gray-600">CPU & Disk Scheduling, Searching, Sorting, and classic algorithms like Knapsack.</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium">
                    <span className="font-bold">Outcome:</span> Conceptual clarity through intuitive animations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Yudha */}
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <LayoutDashboard className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Yudha</CardTitle>
              <CardDescription>Advanced Assessment Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Assessment Types</h4>
                  <p className="text-sm text-gray-600">Mixed-format MCQs + Coding, weekly and company-specific tests.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Security Features</h4>
                  <p className="text-sm text-gray-600">Anti-cheating screen detection and AI-based proctoring.</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium">
                    <span className="font-bold">Outcome:</span> A robust platform for credible assessments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AstraSiksha */}
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <CardTitle className="text-xl">AstraSiksha</CardTitle>
              <CardDescription>Mentorship & Community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Top Performer Interviews</h4>
                  <p className="text-sm text-gray-600">Learn from students who cracked top companies.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Bootcamps & Webinars</h4>
                  <p className="text-sm text-gray-600">3-7 day focused bootcamps on CS subjects and DSA.</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium">
                    <span className="font-bold">Outcome:</span> Real-world guidance and inspiration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

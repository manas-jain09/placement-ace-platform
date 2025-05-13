
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Target, Lightbulb, Award, Linkedin, Users, Shield, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ikshvaku Innovations</h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering the next generation of technical professionals through innovative learning solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-blue-100 text-blue-600 p-3 rounded-full w-fit">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To transform technical education by creating innovative platforms that bridge the gap between academic learning and industry requirements, empowering every student to realize their full potential.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-5">
                    <li>Create accessible learning platforms for all</li>
                    <li>Establish new standards for technical assessments</li>
                    <li>Bridge the industry-academia gap effectively</li>
                    <li>Empower educational institutions with cutting-edge tools</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-purple-100 text-purple-600 p-3 rounded-full w-fit">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To develop comprehensive technological solutions that enhance learning outcomes, optimize assessment processes, and improve placement rates for educational institutions across India.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-5">
                    <li>Provide personalized learning journeys for students</li>
                    <li>Develop AI-powered assessment tools</li>
                    <li>Create industry-relevant learning content</li>
                    <li>Support educational institutions in placement preparation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Principles that guide everything we do at Ikshvaku Innovations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in everything we create and deliver</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously pushing boundaries to create better learning experiences</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">Acting with honesty and transparency in all our operations</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">Working together with educators and industry to achieve shared goals</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-red-100 text-red-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-600">Building trust through consistent delivery of quality solutions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-teal-100 text-teal-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-gray-600">Creating educational solutions accessible to students of all backgrounds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Founders Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Co-Founders</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visionaries leading the transformation of technical education in India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/Manas.jpeg" alt="Manas Sharma" className="object-cover" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CardTitle className="text-center text-xl">Manas Sharma</CardTitle>
                    <a href="https://www.linkedin.com/in/manas-sharma" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 transition-colors" />
                    </a>
                  </div>
                  <CardDescription className="text-center mb-4">Co-Founder & CEO</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    "Our mission at Ikshvaku Innovations is to revolutionize how technical education is delivered and assessed. We believe in creating tools that not only measure skills but help develop them in a meaningful way."
                  </p>
                  <p className="text-gray-600">
                    With over 15 years of experience in education technology, Manas brings a wealth of expertise in creating scalable EdTech solutions that address real educational challenges across diverse learning environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/Varad.jpeg" alt="Varad Patel" className="object-cover" />
                      <AvatarFallback>VP</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CardTitle className="text-center text-xl">Varad Patel</CardTitle>
                    <a href="https://www.linkedin.com/in/varad-patel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 transition-colors" />
                    </a>
                  </div>
                  <CardDescription className="text-center mb-4">Co-Founder & CTO</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    "Technology should enhance learning, not complicate it. At Ikshvaku, we're building platforms that make advanced technical concepts more accessible while providing educators with powerful tools to measure progress."
                  </p>
                  <p className="text-gray-600">
                    Varad brings technical leadership from his background at leading tech companies, where he specialized in AI-powered educational platforms and assessment systems designed to optimize learning outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;

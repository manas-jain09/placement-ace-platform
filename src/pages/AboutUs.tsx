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
            To provide technologically advanced platforms that make students placement-ready, by blending academic learning with real-world technical skills.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-5">
            <li>Bridge the gap between education and employability</li>
            <li>Deliver scalable and intuitive tools to enhance learning</li>
            <li>Foster industry-grade skill development from within academia</li>
            <li>Empower students to succeed in technical interviews and careers</li>
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
            To reach and support as many learners as possible with accessible, outcome-driven tools that simplify the path from education to employment.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 list-disc pl-5">
            <li>Expand access to placement-focused resources</li>
            <li>Support institutions with smart teaching and tracking tools</li>
            <li>Continuously innovate for better learning and assessments</li>
            <li>Build a community that grows together through knowledge</li>
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
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-green-100 text-green-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Award className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Excellence</h3>
        <p className="text-gray-600">Striving for the highest standards in every solution we design and deliver</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Award className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Innovation</h3>
        <p className="text-gray-600">Constantly evolving through creativity and technology to enhance learning experiences</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Award className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Integrity</h3>
        <p className="text-gray-600">Upholding honesty, transparency, and strong ethical principles in all our endeavors</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Users className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Collaboration</h3>
        <p className="text-gray-600">Partnering with educators, institutions, and industry to drive meaningful outcomes</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-red-100 text-red-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Shield className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Reliability</h3>
        <p className="text-gray-600">Delivering consistent, dependable tools that learners and institutions can trust</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
        <div className="bg-teal-100 text-teal-600 p-3 rounded-full w-fit mx-auto mb-4">
          <Globe className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
        <p className="text-gray-600">Making education equitable and accessible to students of all backgrounds and abilities</p>
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
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CardTitle className="text-center text-xl">Manas Jain</CardTitle>
                    <a href="https://www.linkedin.com/in/manas-jain-806718246/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 transition-colors" />
                    </a>
                  </div>
                  <CardDescription className="text-center mb-4">Co-Founder</CardDescription>
                </div>
               <CardContent className="pt-6">
  <p className="text-gray-600 mb-4">
    "At Ikshvaku Innovations, we set out with a simple yet powerful mission — to empower learners with tools that make them not just placement-ready, but future-ready. We believe education must evolve with technology, and our goal is to make that transition seamless for institutions and students alike."
  </p>
  <p className="text-gray-600">
    As a co-founder, I’ve seen firsthand how transformative the right learning platform can be. With a deep passion for education and a commitment to innovation, we’re building systems that close the gap between academic theory and industry expectations. This is just the beginning of a journey to make quality tech-driven education accessible to all.
  </p>
  <p className="text-gray-600 mt-4 font-semibold">
    – Manas, Co-founder of Ikshvaku Innovations
  </p>
</CardContent>

              </Card>
              
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="/Varad.jpeg" alt="Varad Patel" className="object-cover" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CardTitle className="text-center text-xl">Varad Charholikar</CardTitle>
                    <a href="https://www.linkedin.com/in/varad-charholikar-6b7070278/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 transition-colors" />
                    </a>
                  </div>
                  <CardDescription className="text-center mb-4">Co-Founder</CardDescription>
                </div>
                <CardContent className="pt-6">
  <p className="text-gray-600 mb-4">
    "Technology should enhance learning, not complicate it. At Ikshvaku Innovations, we aim to simplify complex technical education through intuitive, AI-driven platforms that serve both learners and educators with clarity and purpose."
  </p>
  <p className="text-gray-600">
    As a co-founder, I’ve witnessed how impactful the right blend of technology and pedagogy can be. With a strong belief in practical, accessible learning, we are committed to closing the gap between classroom concepts and real-world industry needs. This is only the beginning of our journey to democratize skill development at scale.
  </p>
  <p className="text-gray-600 mt-4 font-semibold">
    – Varad, Co-founder of Ikshvaku Innovations
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

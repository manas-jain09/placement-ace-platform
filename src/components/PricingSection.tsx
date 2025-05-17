
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, BadgeDollarSign, Layers, Book } from 'lucide-react';

const PricingSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary-lighter/10 text-primary-light px-4 py-1.5 rounded-full mb-4">
            <BadgeDollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Flexible Plans for Every Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the right solution for your institution or individual learning needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* PLAN A */}
          <Card className="border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="space-y-1 text-center pb-2">
              <Badge variant="outline" className="mb-2 mx-auto border-primary/30 text-primary font-medium">
                PLAN A
              </Badge>
              <CardTitle className="text-2xl font-bold">Pay-Per-Assessment</CardTitle>
              <CardDescription className="text-center">
                <span className="block font-medium text-primary">YUDHA</span>
                Perfect for one-time assessments
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <div className="flex justify-center items-baseline">
                  <span className="text-3xl font-bold">₹119</span>
                  <span className="text-sm text-gray-500 ml-1">/ student</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">(for first 100 students)</p>
                <p className="text-sm text-gray-500 mt-1">₹99/student beyond initial 100</p>
                <p className="text-sm font-medium text-primary mt-1">Minimum: 100 students</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Billed per assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Faculty dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Detailed analytics</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={scrollToContact}>Contact Sales</Button>
            </CardContent>
          </Card>

          {/* PLAN B */}
          <Card className="border-2 border-primary relative hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-primary text-white">Most Popular</Badge>
            </div>
            <CardHeader className="space-y-1 text-center pb-2">
              <Badge variant="outline" className="mb-2 mx-auto border-primary/30 text-primary font-medium">
                PLAN B
              </Badge>
              <CardTitle className="text-2xl font-bold">Unlimited Assessments</CardTitle>
              <CardDescription className="text-center">
                <span className="block font-medium text-primary">YUDHA</span>
                Comprehensive testing solution
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <div className="flex justify-center items-baseline">
                  <span className="text-3xl font-bold">₹1,199</span>
                  <span className="text-sm text-gray-500 ml-1">/ student</span>
                </div>
                <div className="flex justify-center items-center mt-1">
                  <span className="text-sm text-gray-500 line-through mr-2">₹1,499</span>
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-1.5 rounded">Save 20%</span>
                </div>
                <p className="text-sm font-medium text-primary mt-1">6 Months Access</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm"><span className="font-medium">Unlimited</span> assessments</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">All topics covered</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">All difficulty levels</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Detailed reports</span>
                </div>
              </div>
              
              <Button className="w-full" onClick={scrollToContact}>Contact Sales</Button>
            </CardContent>
          </Card>

          {/* PLAN C */}
          <Card className="border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="space-y-1 text-center pb-2">
              <Badge variant="outline" className="mb-2 mx-auto border-primary/30 text-primary font-medium">
                PLAN C
              </Badge>
              <CardTitle className="text-2xl font-bold">DSA Visualizers</CardTitle>
              <CardDescription className="text-center">
                <span className="block font-medium text-primary">DRONA</span>
                Visual learning tools
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <div className="flex justify-center items-baseline">
                  <span className="text-3xl font-bold">₹299</span>
                  <span className="text-sm text-gray-500 ml-1">/ user</span>
                </div>
                <div className="flex justify-center items-center mt-1">
                  <span className="text-sm text-gray-500 line-through mr-2">₹499</span>
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-1.5 rounded">Save 40%</span>
                </div>
                <p className="text-sm font-medium text-primary mt-1">6 Months Access</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm"><span className="font-medium">Unlimited</span> access</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Data Structures Visualizations</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Algorithm Animations</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={scrollToContact}>Contact Sales</Button>
            </CardContent>
          </Card>

          {/* PLAN D */}
          <Card className="border-2 border-primary/30 bg-primary/5 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader className="space-y-1 text-center pb-2">
              <Badge variant="outline" className="mb-2 mx-auto border-primary/30 text-primary font-medium">
                PLAN D
              </Badge>
              <CardTitle className="text-2xl font-bold">Complete Bundle</CardTitle>
              <CardDescription className="text-center">
                <span className="block font-medium text-primary">YUDHA + DRONA + ASTRA</span>
                Best value package
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <div className="flex justify-center items-baseline">
                  <span className="text-3xl font-bold">₹1,298</span>
                  <span className="text-sm text-gray-500 ml-1">/ student</span>
                </div>
                <div className="flex justify-center items-center mt-1">
                  <span className="text-sm text-gray-500 line-through mr-2">₹1,998</span>
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-1.5 rounded">Save 35%</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">₹1,099 (Yudha) + ₹199 (Drona)</div>
                <p className="text-sm font-medium text-primary mt-1">6 Months Access</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm"><span className="font-medium">Unlimited</span> assessments</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Full Drona access</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Book className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm"><span className="font-medium">Free</span> Astra Platform access</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1 rounded-full mr-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Video solutions included</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary-light" onClick={scrollToContact}>Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Need a custom plan for your institution?</p>
          <Button variant="outline" className="px-8" onClick={scrollToContact}>Contact Us for Enterprise Pricing</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

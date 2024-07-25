import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="w-12 h-12 text-blue-500 mb-2" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Revolutionize Your Workflow with Our SaaS Solution</h1>
            <p className="text-xl mb-8">Streamline your business processes, boost productivity, and drive growth with our cutting-edge software.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">Start Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={CheckCircle}
              title="Easy Integration"
              description="Seamlessly integrate with your existing tools and workflows."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Experience unparalleled speed and performance."
            />
            <FeatureCard
              icon={Shield}
              title="Secure & Reliable"
              description="Your data is protected with enterprise-grade security."
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Support"
              description="Our expert team is always ready to assist you."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your operations to the next level.</p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Get Started Now</Button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="text-center py-10">
                <p className="text-xl italic mb-6">"This SaaS solution has completely transformed how we operate. It's intuitive, powerful, and has saved us countless hours. I can't imagine running our business without it now."</p>
                <p className="font-semibold">Jane Doe, CEO of TechCorp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Our SaaS Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
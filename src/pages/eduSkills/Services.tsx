
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Building, Users, GraduationCap, Award, Briefcase } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              Discover how EduSkills can help bridge the gap between education and employment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Services List */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
              
              {/* Service 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skills Training Programs</h3>
                  <p className="text-gray-600">
                    Comprehensive courses in technology, business, and creative fields designed to equip learners with industry-relevant skills.
                  </p>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
                  <p className="text-gray-600">
                    Customized training solutions for businesses looking to upskill their workforce and improve productivity.
                  </p>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Job Placement Services</h3>
                  <p className="text-gray-600">
                    Connecting qualified graduates with employers looking for skilled professionals in various fields.
                  </p>
                </div>
              </div>
              
              {/* Service 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Counseling</h3>
                  <p className="text-gray-600">
                    Professional guidance to help individuals identify their strengths and choose the right career path.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Our services" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our process is designed to ensure you gain the skills you need and connect with relevant job opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Explore Courses</h3>
              <p className="text-gray-600 text-sm">
                Browse our range of courses and find the ones that match your interests and career goals.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Enroll & Learn</h3>
              <p className="text-gray-600 text-sm">
                Register for your chosen course and begin learning with our expert instructors and comprehensive materials.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Build Your Portfolio</h3>
              <p className="text-gray-600 text-sm">
                Complete projects and assignments to build a portfolio that showcases your skills to potential employers.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-full mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Connect with Employers</h3>
              <p className="text-gray-600 text-sm">
                Get introduced to our network of employer partners who are looking for candidates with your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">For Employers</h2>
                <p className="text-gray-600">
                  Looking for skilled professionals? Partner with EduSkills to access a pool of trained candidates who match your requirements.
                </p>
              </div>
              <div>
                <Button size="lg">
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Skills?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Start your journey toward a rewarding career with our industry-focused courses.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/eduSkills/courses">Explore Our Courses</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

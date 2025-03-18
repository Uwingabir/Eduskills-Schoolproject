
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-800 bg-opacity-50 rounded-full text-sm font-medium">
              Transforming Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learn. Grow. <span className="text-yellow-300">Succeed.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              EduSkills bridges the gap between education and industry needs, empowering individuals with practical skills for today's job market.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-yellow-100">
                <Link to="/eduSkills/courses">Browse Courses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-blue-800">
                <Link to="/eduSkills/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 rounded-full opacity-10"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="EduSkills Students" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-700">25+</div>
                    <div className="text-xs text-gray-600">Courses</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-700">15k</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-700">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

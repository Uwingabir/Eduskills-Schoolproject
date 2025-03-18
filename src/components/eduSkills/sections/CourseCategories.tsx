
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Briefcase, ChevronRight } from "lucide-react";

const CourseCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Course Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses designed to equip you with the skills needed in today's competitive job market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technology Category */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-blue-600 px-2 py-1 bg-blue-50 rounded-full">
                  12 Courses
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-600 mb-6">
                Master modern programming languages, web development, data science, and more with our tech-focused courses.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/eduSkills/courses/tech" className="flex justify-between items-center">
                  <span>Explore Tech Courses</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Business Category */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-green-600 px-2 py-1 bg-green-50 rounded-full">
                  8 Courses
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <p className="text-gray-600 mb-6">
                Develop entrepreneurial skills, marketing strategies, financial planning, and leadership capabilities.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/eduSkills/courses/business" className="flex justify-between items-center">
                  <span>Explore Business Courses</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Art & Design Category */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-purple-600 px-2 py-1 bg-purple-50 rounded-full">
                  6 Courses
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Art & Design</h3>
              <p className="text-gray-600 mb-6">
                Unleash your creativity with graphic design, digital illustration, UI/UX design, and other artistic skills.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/eduSkills/courses/art" className="flex justify-between items-center">
                  <span>Explore Art Courses</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;

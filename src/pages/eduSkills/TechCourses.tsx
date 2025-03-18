
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Code } from "lucide-react";
import { courses } from "@/data/courses";

const TechCourses = () => {
  const techCourses = courses.filter(course => course.category === "tech");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 bg-blue-100 w-16 h-16 rounded-full">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Technology Courses</h1>
            <p className="text-lg text-gray-600">
              Gain in-demand skills in programming, web development, data science, and more with our technology courses designed for the modern job market.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Technology
                    </span>
                    <div className="ml-auto flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-3 w-3 mr-1" />
                      {course.students} students
                    </div>
                    <Button asChild>
                      <Link to={`/eduSkills/courses/${course.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Tech Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Technology learning" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Learn Technology Skills?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">High Demand</h3>
                    <p className="text-gray-600">Tech skills are among the most sought-after in today's job market, with consistently growing demand.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Competitive Salaries</h3>
                    <p className="text-gray-600">Technology professionals typically earn above-average salaries, even at entry-level positions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Remote Work Opportunities</h3>
                    <p className="text-gray-600">Tech skills often allow for remote work flexibility, offering a better work-life balance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation & Creativity</h3>
                    <p className="text-gray-600">Technology careers allow you to be at the forefront of innovation and creative problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Tech Career Today</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Enroll in one of our technology courses and take the first step toward a rewarding career in tech.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/eduSkills/courses">Browse All Courses</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TechCourses;

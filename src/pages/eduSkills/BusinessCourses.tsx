
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Briefcase } from "lucide-react";
import { courses } from "@/data/courses";

const BusinessCourses = () => {
  const businessCourses = courses.filter(course => course.category === "business");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 bg-green-100 w-16 h-16 rounded-full">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Business Courses</h1>
            <p className="text-lg text-gray-600">
              Gain essential business skills and knowledge to excel in today's competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                      Business
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

      {/* Why Learn Business Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Business learning" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Learn Business Skills?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Career Advancement</h3>
                    <p className="text-gray-600">Business skills are essential for career progression in virtually any industry or field.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Entrepreneurship</h3>
                    <p className="text-gray-600">Learn the foundations needed to start, manage, and grow your own business successfully.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Versatility</h3>
                    <p className="text-gray-600">Business knowledge is applicable across industries, making you a more versatile professional.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Decision Making</h3>
                    <p className="text-gray-600">Develop analytical skills to make better decisions in both your professional and personal life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Your Business Acumen</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Enroll in one of our business courses and develop the skills employers are looking for in today's market.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/eduSkills/courses">Browse All Courses</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessCourses;

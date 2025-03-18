
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, Code, Briefcase, Palette, Clock, Users } from "lucide-react";
import { courses } from "@/data/courses";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Explore Our Courses</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover a wide range of courses designed to equip you with industry-relevant skills.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for courses..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              All Courses
            </Button>
            
            <Button 
              variant={selectedCategory === "tech" ? "default" : "outline"}
              onClick={() => setSelectedCategory("tech")}
              className="flex items-center gap-2"
            >
              <Code className="h-4 w-4" />
              Technology
            </Button>
            
            <Button 
              variant={selectedCategory === "business" ? "default" : "outline"}
              onClick={() => setSelectedCategory("business")}
              className="flex items-center gap-2"
            >
              <Briefcase className="h-4 w-4" />
              Business
            </Button>
            
            <Button 
              variant={selectedCategory === "art" ? "default" : "outline"}
              onClick={() => setSelectedCategory("art")}
              className="flex items-center gap-2"
            >
              <Palette className="h-4 w-4" />
              Art & Design
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        course.category === "tech" ? "bg-blue-100 text-blue-800" :
                        course.category === "business" ? "bg-green-100 text-green-800" :
                        "bg-purple-100 text-purple-800"
                      }`}>
                        {course.category === "tech" ? "Technology" : 
                         course.category === "business" ? "Business" : "Art & Design"}
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;

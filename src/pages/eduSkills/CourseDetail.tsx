
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, BookOpen, CheckCircle, Award } from "lucide-react";
import { courses } from "@/data/courses";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(course => course.id === Number(id));

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="mb-8">The course you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/eduSkills/courses">Back to Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Course Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    course.category === "tech" ? "bg-blue-100 text-blue-800" :
                    course.category === "business" ? "bg-green-100 text-green-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {course.category === "tech" ? "Technology" : 
                     course.category === "business" ? "Business" : "Art & Design"}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} students
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-600 max-w-2xl">{course.description}</p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <Button size="lg" asChild>
                  <Link to={`/eduSkills/enroll/${course.id}`}>Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* About the Course */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-600 mb-4">
                    {course.fullDescription || `This comprehensive course on ${course.title} will teach you everything you need to know to excel in this field. Whether you're a beginner or looking to enhance your existing skills, this course provides the perfect learning path.`}
                  </p>
                  <p className="text-gray-600">
                    By the end of this course, you'll have gained practical skills that employers are actively seeking, positioning you for success in your career journey.
                  </p>
                </div>
                
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(course.learningOutcomes || [
                      "Understand core concepts and principles",
                      "Apply industry best practices",
                      "Complete hands-on projects",
                      "Develop a portfolio of work",
                      "Prepare for certification exams",
                      "Network with industry professionals"
                    ]).map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Course Content */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="space-y-3">
                    {(course.modules || [
                      { title: "Introduction to the Course", lessons: 3 },
                      { title: "Fundamental Concepts", lessons: 5 },
                      { title: "Practical Applications", lessons: 7 },
                      { title: "Advanced Techniques", lessons: 4 },
                      { title: "Final Project", lessons: 2 }
                    ]).map((module, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Module {index + 1}: {module.title}</h3>
                          <span className="text-sm text-gray-500">{module.lessons} lessons</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Instructor */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Instructor</h2>
                  <div className="flex items-start">
                     <img src="public/assets/gideon.jpeg" 
                      alt="Instructor" 
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{course.instructor || "Safi Gideon"}</h3>
                      <p className="text-primary mb-2">{course.instructorTitle || "Senior Industry Expert"}</p>
                      <p className="text-gray-600 text-sm">
                        {course.instructorBio || "With over 10 years of experience in the industry, Alex brings practical insights and expert knowledge to guide students through this comprehensive learning journey."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Course Details</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <span className="block font-medium">Duration</span>
                            <span className="text-sm text-gray-600">{course.duration}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <BookOpen className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <span className="block font-medium">Level</span>
                            <span className="text-sm text-gray-600">{course.level || "Intermediate"}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <span className="block font-medium">Students</span>
                            <span className="text-sm text-gray-600">{course.students} enrolled</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <span className="block font-medium">Certificate</span>
                            <span className="text-sm text-gray-600">Yes, on completion</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Button className="w-full mb-3" size="lg" asChild>
                        <Link to={`/eduSkills/enroll/${course.id}`}>Enroll Now</Link>
                      </Button>
                      <p className="text-sm text-center text-gray-500">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter(relatedCourse => 
                relatedCourse.category === course.category && relatedCourse.id !== course.id
              )
              .slice(0, 3)
              .map(relatedCourse => (
                <Card key={relatedCourse.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={relatedCourse.image} 
                    alt={relatedCourse.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{relatedCourse.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedCourse.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedCourse.duration}
                      </div>
                      <Button variant="outline" asChild size="sm">
                        <Link to={`/eduSkills/courses/${relatedCourse.id}`}>View Course</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Enroll now and take the first step toward building your skills and advancing your career.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to={`/eduSkills/enroll/${course.id}`}>Enroll in This Course</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;

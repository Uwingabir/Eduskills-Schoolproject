import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/eduSkills/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { courses } from "@/data/courses";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

const Enroll = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find(course => course.id === Number(id));

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [experiance, setExperiance] = useState("");
  const [learningGoals, setLearningGoals] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="mb-8">The course you are trying to enroll in does not exist.</p>
          <Button asChild>
            <Link to="/eduSkills/courses">Browse Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    setIsSubmitting(true);
    
    const enrollData = {
      fullName,
      emailAddress,
      phoneNumber,
      experiance,
      educationLevel,
      learningGoals
    };

    try {
    
      const response = await axios.post("http://localhost:9090/addEnroll", enrollData);
      
      
      toast({
        title: "Enrollment Successful!",
        description: `You have successfully enrolled in ${course.title}. Check your email for further instructions.`,
        variant: "default",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      // If failed, show error toast
      console.error("Enrollment failed:", error);
      toast({
        title: "Enrollment Failed",
        description: "There was a problem with your enrollment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 max-w-md">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Enrollment Successful!</CardTitle>
              <CardDescription>
                Thank you for enrolling in {course.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-600">
                We've sent a confirmation email to {emailAddress} with all the details and next steps.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">What's Next?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Check your email for login details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Complete your student profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Join the orientation session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Start your learning journey</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button onClick={() => navigate("/eduSkills/courses")}>
                  Browse More Courses
                </Button>
                <Button variant="outline" onClick={() => navigate("/eduSkills")}>
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Enroll in Course</h1>
            <p className="text-gray-600">
              Complete the form below to enroll in <span className="font-medium">{course.title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="education">Educational Background</Label>
                    <Input
                      id="education"
                      name="education"
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      placeholder="Highest qualification or current study"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={experiance}
                      onChange={(e) => setExperiance(e.target.value)}
                      placeholder="Any relevant experience in this field"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="goals">Learning Goals</Label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={learningGoals}
                      onChange={(e) => setLearningGoals(e.target.value)}
                      placeholder="What do you hope to achieve from this course?"
                      className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Complete Enrollment"}
                </Button>
                
                <p className="text-sm text-center text-gray-500">
                  By enrolling, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            
            {/* Course Summary */}
            <div>
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Course Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Duration: {course.duration}
                      </p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">What's Included:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span>Full course access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span>Project portfolio</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span>Job placement assistance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 text-sm text-gray-600">
                      Need help? <a href="#" className="text-primary font-medium">Contact support</a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enroll;

import React from "react";
import { Briefcase, Users, Bookmark, Award } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose EduSkills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our approach to education is focused on practical skills and real-world applications to ensure your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry-Relevant</h3>
            <p className="text-gray-600">
              Curriculum developed with input from industry leaders to ensure relevant skills.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="p-3 bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from professionals with extensive experience in their respective fields.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="p-3 bg-purple-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Bookmark className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Choose from online, in-person, or hybrid formats to fit your schedule.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="p-3 bg-amber-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Job Placement</h3>
            <p className="text-gray-600">
              Access to our network of employer partners and career services support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

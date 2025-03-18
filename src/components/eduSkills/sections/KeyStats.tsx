
import React from "react";
import { GraduationCap, Briefcase, Users, Award } from "lucide-react";

const KeyStats = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">10,000+</div>
            <div className="text-sm text-gray-500">Graduates</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <Briefcase className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">250+</div>
            <div className="text-sm text-gray-500">Employer Partners</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">95%</div>
            <div className="text-sm text-gray-500">Employment Rate</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
            <div className="text-sm text-gray-500">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStats;


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of students who have transformed their careers with EduSkills. 
            Our courses are designed to give you the skills employers are looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-yellow-100">
              <Link to="/eduSkills/courses">Explore All Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-blue-800">
              <Link to="/eduSkills/about">About Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

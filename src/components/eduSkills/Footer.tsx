
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">EduSkills</h3>
            <p className="text-gray-600 text-sm">
              Empowering individuals with industry-relevant skills, fostering a well-educated workforce that drives innovation and growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/eduSkills" className="text-gray-600 hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/eduSkills/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
              <li><Link to="/eduSkills/services" className="text-gray-600 hover:text-primary text-sm">Services</Link></li>
              <li><Link to="/eduSkills/courses" className="text-gray-600 hover:text-primary text-sm">Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Course Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/eduSkills/courses/tech" className="text-gray-600 hover:text-primary text-sm">Tech Courses</Link></li>
              <li><Link to="/eduSkills/courses/business" className="text-gray-600 hover:text-primary text-sm">Business Courses</Link></li>
              <li><Link to="/eduSkills/courses/art" className="text-gray-600 hover:text-primary text-sm">Art Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@eduskills.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EduSkills. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-primary">Terms</a>
            <a href="#" className="text-gray-600 hover:text-primary">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

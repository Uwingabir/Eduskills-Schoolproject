
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/eduSkills" className="text-xl font-bold text-primary">
              EduSkills
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/eduSkills" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/eduSkills/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/eduSkills/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link to="/eduSkills/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/eduSkills/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Search and Account */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isSearchOpen ? (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="w-48 h-9 pl-8 pr-2 text-sm"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="h-9 w-9"
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden space-y-1 px-4 pb-3 pt-2 bg-white">
          <Link to="/eduSkills" className="block px-3 py-2 text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/eduSkills/about" className="block px-3 py-2 text-sm font-medium hover:text-primary">About</Link>
          <Link to="/eduSkills/courses" className="block px-3 py-2 text-sm font-medium hover:text-primary">Courses</Link>
          <Link to="/eduSkills/services" className="block px-3 py-2 text-sm font-medium hover:text-primary">Services</Link>
          <Link to="/eduSkills/contact" className="block px-3 py-2 text-sm font-medium hover:text-primary">Contact Us</Link>
          
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <div className="relative w-full max-w-sm">
              <Input type="text" placeholder="Search courses..." className="w-full h-9 pl-8 pr-2 text-sm" />
              <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-3 pt-3">
            <Button variant="outline" size="sm" className="w-full justify-center">
              <User className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Button>
            <Button size="sm" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

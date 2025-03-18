
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);

  const toggleMic = () => {
    setIsMicActive(!isMicActive);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Gain skills
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/">Enrolled</NavLink>
          </div>

          {/* Search, Mic, and MIS */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isSearchOpen ? (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-40 h-8 pl-8 pr-2 text-sm"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute left-2 top-1.5 h-4 w-4 text-muted-foreground" />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMic}
              className={`h-8 w-8 ${isMicActive ? 'text-primary' : ''}`}
            >
              <Mic className="h-4 w-4" />
            </Button>
            <span className="font-medium text-sm">Get Job</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-8 w-8"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-1 px-4 pb-3 pt-2 bg-white">
          <Link to="/Home" className="block px-3 py-2 text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-sm font-medium hover:text-primary">About</Link>
          <Link to="/courses" className="block px-3 py-2 text-sm font-medium hover:text-primary">Courses</Link>
          <Link to="/services" className="block px-3 py-2 text-sm font-medium hover:text-primary">Services</Link>
          <Link to="/enrolled" className="block px-3 py-2 text-sm font-medium hover:text-primary">Enrolled</Link>
          
          
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <div className="relative w-full max-w-sm">
              <Input type="text" placeholder="Search..." className="w-full h-8 pl-8 pr-2 text-sm" />
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-muted-foreground" />
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleMic}
              className="h-8 w-8 ml-2"
            >
              <Mic className="h-4 w-4" />
            </Button> */}
            <span className="font-medium text-sm ml-4">Get Job</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  
  return (
    <footer className="border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brand</h3>
            {/* <p className="text-muted-foreground">
              Elevating experiences through thoughtful design and innovation.
            </p> */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Cookies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-transition">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Brand. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

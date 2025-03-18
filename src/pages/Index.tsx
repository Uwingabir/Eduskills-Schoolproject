
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "EDUSKILLS";
    
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

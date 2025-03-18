
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function Cta() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={ctaRef} className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div 
          className={`relative overflow-hidden rounded-2xl 
            ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/90 z-0"></div>
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 0)',
              backgroundSize: '40px 40px' 
            }}></div>
          </div>
          
          <div className="relative z-10 px-6 py-16 md:py-20 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to transform your experience?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Join thousands of satisfied users who have already made the switch.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="rounded-md px-8 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-md px-8 text-white border-white hover:bg-white/10 transition-all duration-300"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

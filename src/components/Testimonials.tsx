
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This product has completely transformed how I approach my work. The attention to detail is unmatched.",
    author: "Caline Uwingabire",
    title: "Creative Director"
  },
  {
    quote: "Intuitive, elegant, and incredibly powerful. It's rare to find something that excels in both form and function.",
    author: "Cyuzuzo Sandrine",
    title: "Product Manager"
  },
  {
    quote: "After trying countless alternatives, I've finally found the solution that meets all my needs without compromise.",
    author: "Cyuza Nicole",
    title: "Design Lead"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
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
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <section ref={testimonialRef} className="section-spacing overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary text-primary rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What people are saying
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -left-8 opacity-10">
              <Quote className="h-24 w-24 text-primary" />
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-12 relative">
              <div className="relative h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-out
                      ${activeIndex === index 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeIndex 
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                      }
                    `}
                  >
                    <blockquote className="mb-6 text-xl md:text-2xl font-light italic text-center">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all
                      ${activeIndex === index 
                        ? 'bg-primary w-6' 
                        : 'bg-secondary'}
                    `}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

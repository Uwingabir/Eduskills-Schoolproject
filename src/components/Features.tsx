
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Feather, Shield, Zap } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef}
      className={`p-6 rounded-xl transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="feature-icon-container mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-primary font-medium hover:underline smooth-transition">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}

export default function Features() {
  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thoughtfully crafted for you
          </h2>
          <p className="text-lg text-muted-foreground">
            We've refined every detail to deliver a seamless experience that meets your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<Feather className="h-8 w-8 text-primary" />}
            title="Elegant Design"
            description="Immerse yourself in a beautifully crafted interface that balances form and function."
            delay={0}
          />
          <Feature 
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="Lightning Fast"
            description="Experience unparalleled performance with our optimized architecture."
            delay={200}
          />
          <Feature 
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="Secure & Private"
            description="Your data remains protected with our industry-leading security measures."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}

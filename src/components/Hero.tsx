import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-indigo-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(79, 70, 229, 0.2) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Accent elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
          <div className={`space-y-10 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-block">
              <div className="px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                EduSkills Platform
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Bridge the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">skills gap</span> 
                <br />for tomorrow's jobs
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Discover courses tailored to industry demands, equipping you with the skills employers seek. Your journey from education to employment starts here.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">M</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">J</div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">K</div>
              </div>
              {/* <p className="text-sm text-gray-600">
                <span className="font-medium">500+</span> students already enrolled
              </p> */}
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70"></div>
            
            <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Featured course or hero image would go here */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <div className="text-indigo-600 text-4xl">✓</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Job-Ready Skills</h3>
                    <p className="text-gray-600">Learn exactly what employers are looking for</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">Top Course</div>
                  <div className="text-sm text-gray-500">4.9 ★★★★★</div>
                </div>
                
                <h3 className="text-lg font-bold mb-2">Web Development Bootcamp</h3>
                <p className="text-sm text-gray-600 mb-4">Learn full-stack development with hands-on projects</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$199</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
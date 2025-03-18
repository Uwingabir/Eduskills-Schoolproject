
import React from "react";
import Layout from "@/components/eduSkills/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About EduSkills</h1>
            <p className="text-lg text-gray-600">
              Learn about our mission to bridge the skills gap and connect talent with opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To empower individuals with industry-relevant skills, fostering a well-educated and highly skilled workforce that drives innovation, economic growth, and social development.
              </p>
              
              <h2 className="text-3xl font-bold pt-6">Our Mission</h2>
              <p className="text-gray-600">
                EduSkills aims to bridge the gap between education and industry needs by providing accessible, high-quality, and practical learning opportunities. Through collaboration with educational institutions, businesses, and industry experts, we equip learners with the skills required for today's job market, promoting job creation and professional excellence.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Goals</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Reduce Unemployment</h3>
                <p className="text-gray-600">
                  To reduce unemployment by ensuring graduates and job seekers have the technical, vocational, and soft skills needed for meaningful employment and entrepreneurial success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Connect Talent with Opportunities</h3>
                <p className="text-gray-600">
                  Create a bridge between unemployed individuals and companies looking for skilled workers, facilitating job placements and career growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Foster Industry Partnerships</h3>
                <p className="text-gray-600">
                  Develop strong relationships with businesses across various sectors to understand their evolving skill requirements and tailor our training programs accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals working to bridge the skills gap and create opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
               <img src="public/assets/my.jpeg"
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Caline Uwingabire</h3>
              <p className="text-primary mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                With 15+ years in education and workforce development, John leads our mission to connect skills with opportunities.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
              <img src="public/assets/sando.jpeg" 
                  alt="Director of Education" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Cyuzuzo Sandrine</h3>
              <p className="text-primary mb-2">Director of Education</p>
              <p className="text-gray-600 text-sm">
                Sarah oversees our curriculum development, ensuring courses meet industry standards and learner needs.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
              <img src="public/assets/nicole.jpeg" 
                  alt="Head of Partnerships" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Cyuzuzo Nicole</h3>
              <p className="text-primary mb-2">Head of Industry Partnerships</p>
              <p className="text-gray-600 text-sm">
                Michael builds relationships with employers to create job placement opportunities for our graduates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;


import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Accreditation = () => {
  useEffect(() => {
    document.title = "Accreditation - HEC";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Accreditation</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg mb-8">
              Welcome to HEC accreditation model. Our accreditation process ensures 
              quality education and compliance with national standards across all 
              higher education institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signin">
                <Button className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="w-full sm:w-auto">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accreditation;

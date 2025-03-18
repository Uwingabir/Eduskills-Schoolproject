
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, GraduationCap, BookOpen, Award } from "lucide-react";

const Application = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Application Center</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Welcome to the HEC Application Center. Choose from the options below to start your application process.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                Loan Applications
              </CardTitle>
              <CardDescription>
                Apply for financial assistance for your studies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                Get financial support for your education through our various loan programs for local and international studies.
              </p>
              <Link to="/application/loan">
                <Button className="w-full">View Loan Options</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                Scholarship Programs
              </CardTitle>
              <CardDescription>
                Apply for merit-based scholarships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                Explore various scholarship opportunities for undergraduate and graduate studies based on academic excellence.
              </p>
              <Button className="w-full" variant="outline">Coming Soon</Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Research Grants
              </CardTitle>
              <CardDescription>
                Apply for funding for research projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                Get financial support for innovative research projects in various academic disciplines.
              </p>
              <Button className="w-full" variant="outline">Coming Soon</Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Academic Programs
              </CardTitle>
              <CardDescription>
                Apply for various academic programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                Apply for specialized academic programs, courses, and workshops offered by HEC partner institutions.
              </p>
              <Button className="w-full" variant="outline">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Application;

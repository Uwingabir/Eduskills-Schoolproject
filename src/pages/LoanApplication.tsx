
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { DollarSign, FileText, Users } from "lucide-react";

const LoanApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Loan Applications</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Apply for Local Study Loan
            </h2>
            <p className="text-gray-600 mb-6">
              Financial assistance for students pursuing higher education within the country. Apply now to cover your tuition fees, books, and living expenses.
            </p>
            <Link to="/application/loan/local">
              <Button>Apply Now</Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Apply for International Study Loan
            </h2>
            <p className="text-gray-600 mb-6">
              Financial support for students pursuing education abroad. This loan covers tuition fees, travel expenses, and living costs in foreign countries.
            </p>
            <Link to="/application/loan/international">
              <Button>Apply Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Check Application Status
          </h2>
          <p className="text-gray-600 mb-6">
            Already applied for a loan? Check the status of your application here. Enter your application reference number and ID/Passport number.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reference">Application Reference Number</Label>
              <Input id="reference" placeholder="Enter reference number" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="idNumber">ID/Passport Number</Label>
              <Input id="idNumber" placeholder="Enter ID or passport number" className="mt-1" />
            </div>
          </div>
          <Button className="mt-4">Check Status</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanApplication;

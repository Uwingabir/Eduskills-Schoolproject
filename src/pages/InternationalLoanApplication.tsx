
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InternationalLoanApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/application/loan" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Loan Applications
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">International Study Loan Application</h1>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="idNumber">ID/Passport Number</Label>
                  <Input id="idNumber" placeholder="Enter your ID number" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" className="mt-1" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Educational Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country of Study</Label>
                  <Input id="country" placeholder="Enter country name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="institution">Educational Institution</Label>
                  <Input id="institution" placeholder="Enter institution name" className="mt-1" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="program">Program of Study</Label>
                  <Input id="program" placeholder="Enter program name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="programDuration">Program Duration (years)</Label>
                  <Input id="programDuration" type="number" placeholder="E.g., 4" className="mt-1" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Program Start Date</Label>
                  <Input id="startDate" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="endDate">Expected End Date</Label>
                  <Input id="endDate" type="date" className="mt-1" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Loan Details</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tuitionFees">Annual Tuition Fees</Label>
                  <Input id="tuitionFees" placeholder="Enter amount in $" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="livingExpenses">Estimated Living Expenses</Label>
                  <Input id="livingExpenses" placeholder="Enter amount in $" className="mt-1" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="travelCost">Travel Cost</Label>
                  <Input id="travelCost" placeholder="Enter amount in $" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="totalLoanAmount">Total Loan Amount</Label>
                  <Input id="totalLoanAmount" placeholder="Enter total amount in $" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Input id="additionalInfo" placeholder="Any other relevant information" className="mt-1" />
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">Submit Application</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternationalLoanApplication;

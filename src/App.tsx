
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accreditation from "./pages/Accreditation";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import LoanApplication from "./pages/LoanApplication";
import LocalLoanApplication from "./pages/LocalLoanApplication";
import InternationalLoanApplication from "./pages/InternationalLoanApplication";
import Application from "./pages/Application";

// EduSkills Pages
import Home from "./pages/eduSkills/Home";
import About from "./pages/eduSkills/About";
import Services from "./pages/eduSkills/Services";
import Courses from "./pages/eduSkills/Courses";
import Enrolled from "./pages/eduSkills/Enrolled.tsx";
import CourseDetail from "./pages/eduSkills/CourseDetail";
import Enroll from "./pages/eduSkills/Enroll";
import TechCourses from "./pages/eduSkills/TechCourses";
import BusinessCourses from "./pages/eduSkills/BusinessCourses";
import ArtCourses from "./pages/eduSkills/ArtCourses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/application" element={<Application />} />
          <Route path="/application/loan" element={<LoanApplication />} />
          <Route path="/application/loan/local" element={<LocalLoanApplication />} />
          <Route path="/application/loan/international" element={<InternationalLoanApplication />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/updates" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* For EduSkills Routes */}
          <Route path="/eduSkills" element={<Home />} />
          <Route path="/eduSkills/about" element={<About />} />
          <Route path="/eduSkills/services" element={<Services />} />
          <Route path="/eduSkills/courses" element={<Courses />} />
          <Route path="/eduSkills/enrolled" element={<Enrolled/>} />
          {/* <Route path="/eduSkills/contactus" element={<ContactUs />} /> */}
    
          <Route path="/eduSkills/courses/tech" element={<TechCourses />} />
          <Route path="/eduSkills/courses/business" element={<BusinessCourses />} />
          <Route path="/eduSkills/courses/art" element={<ArtCourses />} />
          <Route path="/eduSkills/courses/:id" element={<CourseDetail />} />
          <Route path="/eduSkills/enroll/:id" element={<Enroll />} />
          
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

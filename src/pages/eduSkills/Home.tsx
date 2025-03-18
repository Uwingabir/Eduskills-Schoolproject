
import React from "react";
import Layout from "@/components/eduSkills/Layout";
import Hero from "@/components/eduSkills/sections/Hero";
import KeyStats from "@/components/eduSkills/sections/KeyStats";
import CourseCategories from "@/components/eduSkills/sections/CourseCategories";
import WhyChooseUs from "@/components/eduSkills/sections/WhyChooseUs";
import Cta from "@/components/eduSkills/sections/Cta";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <KeyStats />
      <CourseCategories />
      <WhyChooseUs />
      <Cta />
    </Layout>
  );
};

export default Home;

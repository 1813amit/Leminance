import React from "react";
import Header from "../../Component/Home/Header";
import HeroSection from "../../Component/Home/HeroSection";
import ExperienceSection from "../../Component/Home/ExperienceSection";
import CollectionsSection from "../../Component/Home/CollectionsSection";
import ServicesSection from "../../Component/Home/ServicesSection";
import SafetySection from "../../Component/Home/SafetySection";
import ExploreSection from "../../Component/Home/ExploreSection";
import TestimonialsSection from "../../Component/Home/TestimonialsSection";
import NewsSection from "../../Component/Home/NewsSection";
import Footer from "../../Component/Home/Footer";
import Slider from "./Landingpage/Slider";

const Landingpagess = () => {
  return (
    <>
      
      <Header />
      <Slider />
      <ExperienceSection />
      <CollectionsSection />
      <ServicesSection />
      <SafetySection />
      <ExploreSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default Landingpagess;
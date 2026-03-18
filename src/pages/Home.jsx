import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Identity from "../components/Identity";
import MwambaBridge from "../components/MwambaBridge";
import BiocharCycle from "../components/BiocharCycle";
import ServiceTiles from "../components/ServiceTiles";
import GlobalImpact from "../components/GlobalImpact";
import Footer from "../components/Footer";
import ImpactSidebar from "../components/ImpactSidebar";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <div id="mission">
        <Identity />
      </div>
      <MwambaBridge />
      <BiocharCycle />
      <div id="services">
        <ServiceTiles />
      </div>
      <GlobalImpact />
      <Footer />
    </>
  );
};

export default Home;
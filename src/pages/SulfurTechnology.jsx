import React, { useEffect } from "react";
import SulfurHero from "../components/sulfur/SulfurHero";
import OriginStory from "../components/sulfur/OriginStory";
import CatalystCore from "../components/sulfur/CatalystCore";
import DataCards from "../components/sulfur/DataCards";
import StrategicAlignment from "../components/sulfur/StrategicAlignment";
import SulfurFooter from "../components/sulfur/SulfurFooter";

const SulfurTechnology = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-blue">
      <SulfurHero />
      <OriginStory />
      <CatalystCore />
      <DataCards />
      <StrategicAlignment />
      <SulfurFooter />
    </div>
  );
};

export default SulfurTechnology;
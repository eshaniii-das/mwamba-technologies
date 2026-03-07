import Hero from '../components/Hero';
import Identity from '../components/Identity';
import ExpertiseCore from '../components/ExpertiseCore';
import ServiceTiles from '../components/ServiceTiles';
import GlobalImpact from '../components/GlobalImpact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <div id="mission">
        <Identity />
      </div>
      <ExpertiseCore />
      <div id="services">
        <ServiceTiles />
      </div>
      <GlobalImpact />
      <Footer />
    </>
  );
};

export default Home;
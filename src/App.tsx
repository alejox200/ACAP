import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { FeatureCards } from './components/FeatureCards';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}

export default App;

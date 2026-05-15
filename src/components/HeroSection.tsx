import { ChevronRight } from 'lucide-react';
import './HeroSection.css';
import fondoACAP from '../assets/fondoACAP.jpg';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${fondoACAP})` }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle delay-1 animate-fade-in">Liderazgo Regional</span>
          <h1 className="hero-title delay-2 animate-fade-in">
            Impulsando la Excelencia y el Desarrollo
          </h1>
          <p className="hero-description delay-3 animate-fade-in">
            Acreditando programas de alto nivel para fortalecer el impacto y la innovación en Centroamérica. Construimos confianza y calidad para un futuro sostenible.
          </p>
          <div className="hero-actions delay-3 animate-fade-in">
            <button className="btn btn-primary">
              Conoce Nuestros Programas <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Más sobre ACAP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

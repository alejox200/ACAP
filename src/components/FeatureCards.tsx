import { ArrowRight, Award, Globe, Leaf } from 'lucide-react';
import './FeatureCards.css';
import img1 from '../assets/images/tarjeta1ACAP.jpg'
import img2 from '../assets/images/tarjeta2ACAP.jpg'
import img3 from '../assets/images/tarjeta3ACAP.jpg'

export function FeatureCards() {
  const features = [
    {
      title: 'Productos de Calidad',
      description: 'Cada producto, desde la semilla hasta el consumidor final, se somete a rigurosos controles de calidad.',
      icon: <Award size={32} />,
      image: img1
    },
    {
      title: 'Desarrollo Sostenible',
      description: 'Promoviendo prácticas que aseguren el crecimiento a largo plazo y el cuidado del entorno.',
      icon: <Leaf size={32} />,
      image: img3
    },
    {
      title: 'Integración Nacional',
      description: 'Conectando a productores, empresas y consumidores a nivel nacional.',
      icon: <Globe size={32} />,
      image: img2
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header text-center animate-fade-in">
          <h2 className="section-title">Pilares de Nuestra Organización</h2>
          <p className="section-subtitle">
            Trabajamos bajo los más altos estándares para asegurar el liderazgo y la excelencia en la región centroamericana.
          </p>
        </div>

        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card delay-${index + 1} animate-fade-in`}>
              <div className="feature-image-wrapper">
                {/* Fallback visual si la imagen no existe */}
                <div
                  className="feature-image-fallback"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
                <div className="feature-icon">
                  {feature.icon}
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="feature-link">
                  Leer más <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import './StatsSection.css';

export function StatsSection() {
  const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '120', label: 'Programas Acreditados' },
    { number: '8', label: 'Países Miembros' },
    { number: '50+', label: 'Instituciones Aliadas' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid grid grid-2 md:grid-4">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card delay-${index % 4} animate-fade-in`}>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

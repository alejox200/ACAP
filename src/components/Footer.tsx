import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';
import logoACAP from '../assets/LogoACAP.jpeg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid grid md:grid-4">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logoACAP} alt="ACAP Logo" />
            </div>
            <p className="footer-description">
              Agencia Centroamericana de Acreditación de Postgrado. Asegurando la calidad y promoviendo la excelencia regional.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Quiénes Somos</a></li>
              <li><a href="#">Acreditación</a></li>
              <li><a href="#">Instituciones Miembro</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-links">
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Documentos Oficiales</a></li>
              <li><a href="#">Portal de Miembros</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>Ciudad de Guatemala, Guatemala, C.A.</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+502 2000-0000</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@acap.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ACAP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

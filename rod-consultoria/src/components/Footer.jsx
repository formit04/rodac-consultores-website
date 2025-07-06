import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo className="footer-logo" size="40" />
            <h3>RODAC <span className="logo-sub">CONSULTORES</span></h3>
            <p>{t('footer.tagline')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><Link to="/servicios">Asesoría Fiscal</Link></li>
              <li><Link to="/servicios">Contabilidad</Link></li>
              <li><Link to="/servicios">Auditoría</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
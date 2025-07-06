import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo-block">
            <Logo className="logo-img" size="40" />
            <span className="logo-text">RODAC <span className="logo-sub">CONSULTORES</span></span>
          </NavLink>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</NavLink>
          </nav>

          <div className="header-actions">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('es')}
              >
                ES
              </button>
              <button 
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
            </div>
            
            <NavLink to="/contacto" className="btn btn-primary">
              {t('nav.cta')}
            </NavLink>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
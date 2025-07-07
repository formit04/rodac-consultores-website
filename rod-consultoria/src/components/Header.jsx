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

  const handleLogoClick = () => {
    // Zamknij menu mobilne jeśli jest otwarte
    setIsMenuOpen(false);
    // Przewiń na górę strony
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo-block" onClick={handleLogoClick}>
            <Logo className="logo-img" size="40" />
            <span className="logo-text">RODAC <span className="logo-sub">CONSULTORES</span></span>
          </NavLink>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</NavLink>
            <NavLink to="/rodac-ai" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t('nav.aiConsultant')}</NavLink>
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
            
            <NavLink to="/contacto#contact-form" className="btn btn-primary">
              {t('nav.cta')}
            </NavLink>
            
            <div className="mobile-header-controls">
              <div className="mobile-language-switcher">
                <button 
                  className={`mobile-lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
                  onClick={() => i18n.changeLanguage('es')}
                >
                  ES
                </button>
                <button 
                  className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => i18n.changeLanguage('en')}
                >
                  EN
                </button>
              </div>
              
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
      </div>
    </header>
  );
};

export default Header; 
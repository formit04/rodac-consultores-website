import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />
      <div className="brand-rect"></div>
      
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('about.hero.title')}</h1>
            <p>{t('about.hero.desc')}</p>
          </div>
        </div>
      </section>
      <div className="brand-circle">
        <Logo />
      </div>

      {/* ABOUT CONTENT */}
      <section className="about-page">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('about.history.title')}</h2>
              <p>{t('about.history.p1')}</p>
              <p>{t('about.history.p2')}</p>
              <blockquote>
                {t('about.history.quote')}
                <cite>{t('about.history.signature')}</cite>
              </blockquote>
            </div>
            <div className="about-image">
              <div className="office-placeholder">
                <div className="office-icon">🏢</div>
                <p>Oficina Rodac Consultores</p>
              </div>
            </div>
          </div>
          
          <div className="values-section">
            <h2>{t('about.values.title')}</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">⚖️</div>
                <h3>{t('about.values.integrity.title')}</h3>
                <p>{t('about.values.integrity.desc')}</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>{t('about.values.precision.title')}</h3>
                <p>{t('about.values.precision.desc')}</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>{t('about.values.proactivity.title')}</h3>
                <p>{t('about.values.proactivity.desc')}</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔒</div>
                <h3>{t('about.values.confidentiality.title')}</h3>
                <p>{t('about.values.confidentiality.desc')}</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>{t('about.team.title')}</h2>
            <p className="team-intro">{t('about.team.intro')}</p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <div className="member-avatar david-avatar">DR</div>
                </div>
                <div className="member-info">
                  <h3>Lic. David Rodríguez</h3>
                  <h4>{t('about.team.david.title')}</h4>
                  <p>{t('about.team.david.desc')}</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <div className="member-avatar maria-avatar">MG</div>
                </div>
                <div className="member-info">
                  <h3>Lic. María González</h3>
                  <h4>{t('about.team.maria.title')}</h4>
                  <p>{t('about.team.maria.desc')}</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <div className="member-avatar carlos-avatar">CM</div>
                </div>
                <div className="member-info">
                  <h3>Lic. Carlos Mendoza</h3>
                  <h4>{t('about.team.carlos.title')}</h4>
                  <p>{t('about.team.carlos.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros; 
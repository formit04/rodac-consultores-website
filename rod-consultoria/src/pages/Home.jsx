import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Home = () => {
  const [activeService, setActiveService] = useState('asesoria');
  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />

      {/* HERO SECTION */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="brand-rect"></div>
          <div className="hero-content">
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-desc">{t('hero.desc')}</p>
            <div className="hero-buttons">
              <Link to="/contacto" className="btn btn-primary">{t('hero.cta1')}</Link>
              <Link to="/servicios" className="btn btn-secondary">{t('hero.cta2')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="trusted-by">
        <div className="container">
          <div className="brand-circle">
            <Logo />
          </div>
          <h2 className="section-title">{t('trustedBy.title')}</h2>
          <div className="sectors-grid">
            <div className="sector">
              <div className="sector-icon">🏭</div>
              <h3>{t('trustedBy.sectors.manufacturing')}</h3>
            </div>
            <div className="sector">
              <div className="sector-icon">🚚</div>
              <h3>{t('trustedBy.sectors.logistics')}</h3>
            </div>
            <div className="sector">
              <div className="sector-icon">🏗️</div>
              <h3>{t('trustedBy.sectors.construction')}</h3>
            </div>
            <div className="sector">
              <div className="sector-icon">💻</div>
              <h3>{t('trustedBy.sectors.technology')}</h3>
            </div>
            <div className="sector">
              <div className="sector-icon">🏪</div>
              <h3>{t('trustedBy.sectors.commerce')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🛡️</div>
              <h3>{t('benefits.protection.title')}</h3>
              <p>{t('benefits.protection.desc')}</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📊</div>
              <h3>{t('benefits.intelligence.title')}</h3>
              <p>{t('benefits.intelligence.desc')}</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">👥</div>
              <h3>{t('benefits.team.title')}</h3>
              <p>{t('benefits.team.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services" id="servicios">
        <div className="container">
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="services-grid">
            <div className="service">
              <div className="service-icon">⚖️</div>
              <h3>{t('services.asesoria.title')}</h3>
              <p>{t('services.asesoria.desc')}</p>
              <ul>
                {t('services.asesoria.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service">
              <div className="service-icon">📈</div>
              <h3>{t('services.contabilidad.title')}</h3>
              <p>{t('services.contabilidad.desc')}</p>
              <ul>
                {t('services.contabilidad.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service">
              <div className="service-icon">🔍</div>
              <h3>{t('services.auditoria.title')}</h3>
              <p>{t('services.auditoria.desc')}</p>
              <ul>
                {t('services.auditoria.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.desc')}</p>
            <Link to="/contacto" className="btn btn-primary">{t('cta.button')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 
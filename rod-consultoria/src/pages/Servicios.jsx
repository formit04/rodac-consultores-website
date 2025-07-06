import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Servicios = () => {
  const [activeTab, setActiveTab] = useState('asesoria');
  const { t } = useTranslation();

  const services = [
    {
      id: 'asesoria',
      title: t('servicesPage.asesoria.title'),
      subtitle: t('servicesPage.asesoria.subtitle'),
      desc: t('servicesPage.asesoria.desc'),
      features: t('servicesPage.asesoria.features', { returnObjects: true }),
      idealFor: t('servicesPage.asesoria.idealFor', { returnObjects: true })
    },
    {
      id: 'contabilidad',
      title: t('servicesPage.contabilidad.title'),
      subtitle: t('servicesPage.contabilidad.subtitle'),
      desc: t('servicesPage.contabilidad.desc'),
      features: t('servicesPage.contabilidad.features', { returnObjects: true }),
      idealFor: t('servicesPage.contabilidad.idealFor', { returnObjects: true })
    },
    {
      id: 'auditoria',
      title: t('servicesPage.auditoria.title'),
      subtitle: t('servicesPage.auditoria.subtitle'),
      desc: t('servicesPage.auditoria.desc'),
      features: t('servicesPage.auditoria.features', { returnObjects: true }),
      idealFor: t('servicesPage.auditoria.idealFor', { returnObjects: true })
    }
  ];

  return (
    <div className="app">
      <Header />
      
      {/* HERO SECTION */}
      <section className="page-hero servicios-hero">
        <div className="container">
          <div className="brand-rect"></div>
          <div className="hero-content">
            <h1>{t('servicesPage.hero.title')}</h1>
            <p>{t('servicesPage.hero.desc')}</p>
          </div>
        </div>
      </section>
      <div className="brand-circle">
        <Logo />
      </div>

      {/* SERVICES NAVIGATION */}
      <section className="services-tabs">
        <div className="container">
          <div className="tabs-header">
            {services.map((service) => (
              <button
                key={service.id}
                className={`tab-btn ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {services.map((service) => (
              <div
                key={service.id}
                className={`tab-panel ${activeTab === service.id ? 'active' : ''}`}
              >
                <div className="service-header">
                  <h2>{service.title}</h2>
                  <h3>{service.subtitle}</h3>
                  <p>{service.desc}</p>
                </div>

                <div className="service-details">
                  <div className="features-section">
                    <h4>Lo que incluye:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ideal-for-section">
                    <h4>Ideal para ti si:</h4>
                    <ul>
                      {service.idealFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('servicesPage.cta.title')}</h2>
            <p>{t('servicesPage.cta.desc')}</p>
            <Link to="/contacto#contact-form" className="btn btn-primary">
              {t('servicesPage.cta.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* ALL SERVICES OVERVIEW */}
      <section className="all-services">
        <div className="container">
          <h2>Nuestros Servicios Principales</h2>
          <div className="services-overview">
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Asesoría Fiscal y Legal</h3>
              <p>Anticipamos riesgos y creamos oportunidades. Tu defensa y estrategia ante el SAT.</p>
              <Link to="/servicios" className="service-link">Conocer más →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Contabilidad Estratégica</h3>
              <p>Más que números, es el mapa financiero de tu negocio. Precisión y cumplimiento total.</p>
              <Link to="/servicios" className="service-link">Conocer más →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Auditoría y Dictámenes</h3>
              <p>Validación y certeza para directivos, socios e inversionistas. La máxima confianza en tu información.</p>
              <Link to="/servicios" className="service-link">Conocer más →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios; 
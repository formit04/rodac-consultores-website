import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import usePageScroll from '../hooks/usePageScroll';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  usePageScroll();

  // Scroll to contact form when hash is present
  useEffect(() => {
    if (location.hash === '#contact-form') {
      const timer = setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          // Calculate offset to show the section title
          const elementRect = element.getBoundingClientRect();
          const offset = window.pageYOffset + elementRect.top - 100; // 100px offset from top
          
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure page is fully rendered
      
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="app">
      <Header />
      
      {/* HERO SECTION */}
      <section className="page-hero contacto-hero">
        <div className="container">
          <div className="brand-rect"></div>
          <div className="hero-content">
            <h1>{t('contact.hero.title')}</h1>
            <p>{t('contact.hero.desc')}</p>
          </div>
        </div>
      </section>
      <div className="brand-circle">
        <Logo />
      </div>

      {/* CONTACT CONTENT */}
      <section className="contact-page" id="main-content">
        <div className="container">
          <div className="contact-content">
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="contact-info">
              <h2>{t('contact.info.title')}</h2>
              <p>{t('contact.info.desc')}</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>{t('contact.info.office')}</h4>
                    <p>Guadalajara, Jalisco, México</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>{t('contact.info.phone')}</h4>
                    <p>+52 (33) 1234-5678</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>{t('contact.info.email')}</h4>
                    <p>contacto@rodconsultoria.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h4>{t('contact.info.hours')}</h4>
                    <p>{t('contact.info.hoursValue')}</p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <h4>{t('contact.info.location')}</h4>
                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59721.827237493!2d-103.39182!3d20.659699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb6a51d97%3A0x4e2ccfe1107b9e2d!2sGuadalajara%2C%20Jal.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1641234567890!5m2!1ses!2smx"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Rodac Consultores en Guadalajara"
                  ></iframe>
                </div>
                <p className="map-description">{t('contact.info.locationDesc')}</p>
              </div>
            </div>

            {/* RIGHT COLUMN - CONTACT FORM */}
            <div className="contact-form-container" id="contact-form">
              <h2>{t('contact.form.title')}</h2>
              <p>{t('contact.form.desc')}</p>
              
              {isSubmitted ? (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <h3>{t('contact.form.success.title')}</h3>
                  <p>{t('contact.form.success.desc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">{t('contact.form.company')}</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">{t('contact.form.service')}</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">{t('contact.form.serviceOptions.placeholder')}</option>
                      <option value="asesoria">{t('contact.form.serviceOptions.asesoria')}</option>
                      <option value="contabilidad">{t('contact.form.serviceOptions.contabilidad')}</option>
                      <option value="auditoria">{t('contact.form.serviceOptions.auditoria')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2>{t('contact.faq.title')}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t('contact.faq.q1')}</h3>
              <p>{t('contact.faq.a1')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq.q2')}</h3>
              <p>{t('contact.faq.a2')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq.q3')}</h3>
              <p>{t('contact.faq.a3')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq.q4')}</h3>
              <p>{t('contact.faq.a4')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto; 
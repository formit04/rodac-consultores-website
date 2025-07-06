import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FloatingContact = () => {
  const { t } = useTranslation();

  return (
    <Link to="/contacto#contact-form" className="floating-contact">
      <div className="floating-contact-icon">
        <span>✉️</span>
      </div>
      <div className="floating-contact-tooltip">
        {t('nav.contact')}
      </div>
    </Link>
  );
};

export default FloatingContact; 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        services: 'Servicios',
        blog: 'Blog',
        contact: 'Contacto',
        aiConsultant: 'Rodac AI',
        cta: 'Agendar Consulta'
      },
      hero: {
        subtitle: 'TU ALIADO ESTRATÉGICO EN CONSULTORÍA FISCAL',
        title: 'Rodac Consultores\nCerteza y Blindaje para tu Patrimonio.',
        desc: 'En Rodac Consultores convertimos la complejidad fiscal en tu mayor fortaleza. Duerme tranquilo, nosotros nos encargamos del SAT.',
        cta1: 'Agendar Diagnóstico Confidencial',
        cta2: 'Explorar Servicios'
      },
      trustedBy: {
        title: 'Protegiendo a líderes en los sectores:',
        sectors: {
          manufacturing: 'Manufactura',
          logistics: 'Logística',
          construction: 'Construcción',
          technology: 'Tecnología',
          commerce: 'Comercio'
        }
      },
      benefits: {
        protection: {
          title: 'Blindaje Fiscal y Legal',
          desc: 'Diseñamos estrategias proactivas para proteger tu empresa ante auditorías y optimizar tu carga fiscal dentro del marco legal.'
        },
        intelligence: {
          title: 'Inteligencia de Negocios',
          desc: 'Traducimos tus estados financieros en decisiones estratégicas. Te damos la claridad que necesitas para crecer con seguridad.'
        },
        team: {
          title: 'Equipo Experto a tu Lado',
          desc: 'Accedes al conocimiento colectivo de un equipo de contadores y abogados dedicados a entender y defender tus intereses.'
        }
      },
      services: {
        title: 'Soluciones a la medida de tu tranquilidad',
        asesoria: {
          title: 'Asesoría Fiscal y Legal',
          desc: 'Anticipamos riesgos y creamos oportunidades. Tu defensa y estrategia ante el SAT.',
          features: [
            'Planificación y estrategia fiscal personalizada',
            'Representación ante el SAT, IMSS, e INFONAVIT',
            'Consultoría permanente sobre cambios legislativos'
          ]
        },
        contabilidad: {
          title: 'Contabilidad Estratégica',
          desc: 'Más que números, es el mapa financiero de tu negocio. Precisión y cumplimiento total.',
          features: [
            'Contabilidad integral para personas físicas y morales',
            'Análisis financiero estratégico',
            'Cumplimiento total con normativas mexicanas'
          ]
        },
        auditoria: {
          title: 'Auditoría y Dictámenes',
          desc: 'Validación y certeza para directivos, socios e inversionistas. La máxima confianza en tu información.',
          features: [
            'Auditorías financieras y fiscales',
            'Dictámenes para socios e inversionistas',
            'Validación de información financiera'
          ]
        }
      },
      cta: {
        title: '¿Tu estrategia fiscal actual te da total tranquilidad?',
        desc: 'Permítenos realizar un diagnóstico inicial sin costo. Identificaremos áreas de riesgo y oportunidades de mejora en una sesión 100% confidencial.',
        button: 'Solicitar mi Diagnóstico Gratuito'
      },
      footer: {
        tagline: 'Consultoría fiscal y contable de confianza.',
        services: 'Servicios',
        servicesList: {
          asesoria: 'Asesoría Fiscal',
          contabilidad: 'Contabilidad',
          auditoria: 'Auditoría'
        },
        contact: 'Contacto',
        copyright: '© 2025 Rodac Consultores. Todos los derechos reservados.'
      },
      about: {
        hero: {
          title: 'Somos los arquitectos de tu seguridad fiscal.',
          desc: 'En Rodac Consultores, la certeza es el activo más valioso.'
        },
        history: {
          title: 'Nuestra Historia',
          p1: 'Rodac Consultores nació en Guadalajara con una misión clara: ser el socio estratégico que brinda certeza a cada uno de nuestros clientes. En un mundo donde la normativa fiscal cambia constantemente, nosotros nos mantenemos un paso adelante.',
          p2: 'No solo administramos tu contabilidad; construimos una fortaleza legal y fiscal alrededor de tu patrimonio para que puedas operar con absoluta confianza y libertad.',
          quote: '"Nuestro objetivo es que nuestros clientes no tengan que pensar en el SAT. Ese es nuestro trabajo. Su trabajo es hacer crecer su negocio."',
          signature: '- Lic. David Rodríguez, Socio Director'
        },
        values: {
          title: 'Nuestros Pilares',
          integrity: {
            title: 'Integridad',
            desc: 'Actuamos con una ética inquebrantable. Tu confianza es nuestro activo más importante. Cada decisión que tomamos está guiada por los más altos estándares de honestidad y transparencia.'
          },
          precision: {
            title: 'Precisión',
            desc: 'Obsesionados con el detalle. En nuestro campo, el más mínimo error puede costar caro. Revisamos cada número, cada documento, cada transacción con la máxima atención.'
          },
          proactivity: {
            title: 'Proactividad',
            desc: 'No esperamos los problemas, los anticipamos. Estamos siempre un paso adelante de la autoridad. Identificamos riesgos antes de que se conviertan en amenazas.'
          },
          confidentiality: {
            title: 'Confidencialidad',
            desc: 'Tu información es sagrada. Aplicamos los más altos estándares de seguridad y discreción. Tu privacidad es nuestra prioridad absoluta.'
          }
        },
        team: {
          title: 'Nuestro Equipo',
          intro: 'Un grupo de profesionales dedicados a proteger tu patrimonio y hacer crecer tu negocio con seguridad fiscal.',
          david: {
            title: 'Socio Director',
            desc: 'Especialista en derecho fiscal y estrategias de optimización tributaria. Más de 15 años de experiencia en consultoría fiscal.'
          },
          maria: {
            title: 'Directora Contable',
            desc: 'Experta en contabilidad estratégica y cumplimiento normativo. Especializada en empresas de manufactura y logística.'
          },
          carlos: {
            title: 'Asesor Legal',
            desc: 'Especialista en derecho corporativo y representación ante autoridades fiscales. Experto en auditorías y defensa fiscal.'
          }
        }
      },
      servicesPage: {
        hero: {
          title: 'Soluciones a la medida de tu tranquilidad',
          desc: 'Servicios integrales de consultoría fiscal, contabilidad estratégica y auditoría para proteger tu patrimonio.'
        },
        asesoria: {
          title: 'Asesoría Fiscal y Legal Estratégica',
          subtitle: 'Más que una defensa, es un plan de ataque.',
          desc: 'Te ayudamos a navegar el complejo sistema fiscal mexicano para convertirlo en una ventaja competitiva.',
          features: [
            'Planificación y estrategia fiscal personalizada',
            'Representación y defensa ante el SAT, IMSS, e INFONAVIT',
            'Consultoría permanente sobre cambios en la legislación',
            'Optimización de la estructura corporativa',
            'Trámite y seguimiento de devoluciones de impuestos',
            'Asesoría legal en contratos y operaciones comerciales'
          ],
          idealFor: [
            'Buscas minimizar el riesgo fiscal de forma proactiva',
            'Enfrentas una auditoría o requieres representación legal',
            'Tu empresa está creciendo y su estructura fiscal se vuelve más compleja',
            'Quieres una segunda opinión experta sobre tu situación actual'
          ]
        },
        contabilidad: {
          title: 'Contabilidad Estratégica',
          subtitle: 'Más que números, es el mapa financiero de tu negocio.',
          desc: 'Precisión y cumplimiento total con normativas mexicanas.',
          features: [
            'Contabilidad integral para personas físicas y morales',
            'Análisis financiero estratégico mensual',
            'Cumplimiento total con normativas mexicanas',
            'Preparación de estados financieros',
            'Análisis de indicadores de rentabilidad',
            'Soporte para toma de decisiones ejecutivas'
          ],
          idealFor: [
            'Necesitas contabilidad precisa y oportuna',
            'Quieres entender el rendimiento real de tu negocio',
            'Buscas cumplir con todas las obligaciones fiscales',
            'Necesitas información financiera para decisiones estratégicas'
          ]
        },
        auditoria: {
          title: 'Auditoría y Dictámenes',
          subtitle: 'Validación y certeza para directivos, socios e inversionistas.',
          desc: 'La máxima confianza en tu información financiera.',
          features: [
            'Auditorías financieras y fiscales',
            'Dictámenes para socios e inversionistas',
            'Validación de información financiera',
            'Revisión de controles internos',
            'Certificación de estados financieros',
            'Asesoría en cumplimiento normativo'
          ],
          idealFor: [
            'Necesitas validar la información financiera de tu empresa',
            'Buscas inversión o financiamiento',
            'Tienes socios que requieren transparencia',
            'Quieres asegurar el cumplimiento de estándares internacionales'
          ]
        },
        cta: {
          title: 'Hablemos de tu caso específico.',
          desc: 'Cada empresa es un mundo. Contacta a nuestros especialistas para una evaluación confidencial de tu situación.',
          button: 'Contactar a un Asesor'
        },
        overview: {
          asesoria: 'Asesoría Fiscal y Legal',
          contabilidad: 'Contabilidad Estratégica',
          auditoria: 'Auditoría y Dictámenes'
        },
        includesTitle: 'Lo que incluye:',
        idealForTitle: 'Ideal para ti si:',
        mainServicesTitle: 'Nuestros Servicios Principales',
        learnMore: 'Conocer más'
      },
      blog: {
        hero: {
          title: 'Recursos y Conocimiento Fiscal',
          desc: 'Mantente actualizado con las últimas novedades fiscales, estrategias de optimización y consejos para hacer crecer tu negocio con seguridad.'
        },
        featured: 'Artículos Destacados',
        categories: {
          all: 'Todos',
          sat: 'Novedades SAT',
          strategy: 'Estrategia Fiscal',
          business: 'Consejos de Negocios',
          imss: 'IMSS y Laboral'
        },
        newsletter: {
          title: 'Mantente Informado',
          desc: 'Recibe las últimas novedades fiscales y consejos de expertos directamente en tu correo.',
          placeholder: 'Tu correo electrónico',
          button: 'Suscribirse',
          disclaimer: 'Sin spam. Solo contenido valioso. Puedes cancelar en cualquier momento.'
        }
      },
      contact: {
        hero: {
          title: 'Iniciemos la conversación.',
          desc: 'Tu tranquilidad comienza aquí. Contáctanos para agendar una consulta. Garantizamos absoluta confidencialidad desde el primer momento.'
        },
        info: {
          title: 'Información de Contacto',
          desc: 'Estamos aquí para ayudarte. Contáctanos de la manera que te resulte más conveniente.',
          office: 'Oficina Guadalajara',
          phone: 'Teléfono',
          email: 'Email',
          hours: 'Horarios de Atención',
          hoursValue: 'Lun - Vie: 9:00 AM - 6:00 PM',
          location: 'Ubicación',
          locationDesc: 'Oficina central en el corazón de Guadalajara, fácil acceso y estacionamiento disponible.',
          mapButton: 'Ver en Google Maps'
        },
        form: {
          title: 'Envíanos un mensaje',
          desc: 'Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.',
          name: 'Nombre completo *',
          email: 'Correo electrónico *',
          phone: 'Teléfono',
          company: 'Nombre de la empresa',
          service: 'Servicio de interés',
          serviceOptions: {
            placeholder: 'Seleccionar servicio',
            asesoria: 'Asesoría Fiscal',
            contabilidad: 'Contabilidad',
            auditoria: 'Auditoría'
          },
          message: 'Mensaje *',
          messagePlaceholder: 'Cuéntanos sobre tu situación y cómo podemos ayudarte...',
          submit: 'Enviar Mensaje Confidencial',
          sending: 'Enviando...',
          success: {
            title: '¡Mensaje enviado con éxito!',
            desc: 'Gracias por contactarnos. Nos pondremos en contacto contigo en menos de 24 horas.'
          }
        },
        faq: {
          title: 'Preguntas Frecuentes',
          q1: '¿Cuánto tiempo toma una consulta inicial?',
          a1: 'Una consulta inicial típicamente toma entre 30-45 minutos. Es completamente gratuita y confidencial.',
          q2: '¿Atienden empresas de cualquier tamaño?',
          a2: 'Sí, trabajamos con empresas desde startups hasta grandes corporaciones. Cada caso es único y merece atención personalizada.',
          q3: '¿Ofrecen servicios en línea?',
          a3: 'Absolutamente. Utilizamos tecnología segura para reuniones virtuales y compartir documentos de manera confidencial.',
          q4: '¿Cuál es el costo de sus servicios?',
          a4: 'Nuestros servicios se adaptan a las necesidades específicas de cada cliente. La primera consulta es gratuita para evaluar tu situación.'
        }
      },
      aiConsultant: {
        hero: {
          title: 'Rodac AI - Consultor Especializado',
          desc: 'Obtén respuestas expertas sobre contabilidad y fiscalidad mexicana las 24 horas del día. Nuestro asistente está especializado en normativas del SAT, IMSS e INFONAVIT.'
        },
        chat: {
          title: 'Chatea con nuestro Experto en Fiscalidad',
          placeholder: 'Escribe tu pregunta sobre contabilidad o fiscalidad mexicana...',
          send: 'Enviar',
          thinking: 'Pensando...',
          welcome: '¡Hola! Soy tu consultor especializado en contabilidad y fiscalidad mexicana. Puedo ayudarte con preguntas sobre:',
          capabilities: [
            'Normativas del SAT y obligaciones fiscales',
            'Contabilidad para personas físicas y morales',
            'IMSS, INFONAVIT y seguridad social',
            'Facturación electrónica y CFDI',
            'Deducciones y optimización fiscal',
            'Auditorías y cumplimiento normativo'
          ],
          askQuestion: '¿En qué puedo ayudarte hoy?',
          examples: {
            title: 'Preguntas frecuentes:',
            questions: [
              '¿Cuáles son las obligaciones fiscales para una persona moral?',
              '¿Cómo puedo optimizar mis deducciones fiscales?',
              '¿Qué documentos necesito para una auditoría del SAT?',
              '¿Cuándo debo presentar mi declaración anual?'
            ]
          },
          disclaimer: 'Este asistente proporciona información general. Para casos específicos, consulta con nuestros especialistas.'
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact',
        aiConsultant: 'Rodac AI',
        cta: 'Book a Consultation'
      },
      hero: {
        subtitle: 'YOUR STRATEGIC PARTNER IN TAX CONSULTING',
        title: 'Rodac Consultores\nCertainty and Protection for Your Assets.',
        desc: 'At Rodac Consultores, we turn tax complexity into your greatest strength. Sleep well, we handle the tax office for you.',
        cta1: 'Book a Confidential Assessment',
        cta2: 'Explore Services'
      },
      trustedBy: {
        title: 'Protecting leaders in sectors:',
        sectors: {
          manufacturing: 'Manufacturing',
          logistics: 'Logistics',
          construction: 'Construction',
          technology: 'Technology',
          commerce: 'Commerce'
        }
      },
      benefits: {
        protection: {
          title: 'Tax and Legal Protection',
          desc: 'We design proactive strategies to protect your company from audits and optimize your tax burden within the legal framework.'
        },
        intelligence: {
          title: 'Business Intelligence',
          desc: 'We translate your financial statements into strategic decisions. We give you the clarity you need to grow with confidence.'
        },
        team: {
          title: 'Expert Team by Your Side',
          desc: 'Access the collective knowledge of a team of accountants and lawyers dedicated to understanding and defending your interests.'
        }
      },
      services: {
        title: 'Solutions tailored to your peace of mind',
        asesoria: {
          title: 'Tax and Legal Advisory',
          desc: 'We anticipate risks and create opportunities. Your defense and strategy before the tax office.',
          features: [
            'Personalized tax planning and strategy',
            'Representation before SAT, IMSS, and INFONAVIT',
            'Permanent consulting on legislative changes'
          ]
        },
        contabilidad: {
          title: 'Strategic Accounting',
          desc: 'More than numbers, it\'s the financial map of your business. Precision and total compliance.',
          features: [
            'Comprehensive accounting for individuals and corporations',
            'Strategic financial analysis',
            'Total compliance with Mexican regulations'
          ]
        },
        auditoria: {
          title: 'Audit and Reports',
          desc: 'Validation and certainty for executives, partners and investors. Maximum confidence in your information.',
          features: [
            'Financial and tax audits',
            'Reports for partners and investors',
            'Financial information validation'
          ]
        }
      },
      cta: {
        title: 'Does your current tax strategy give you total peace of mind?',
        desc: 'Let us perform an initial assessment at no cost. We will identify risk areas and improvement opportunities in a 100% confidential session.',
        button: 'Request My Free Assessment'
      },
      footer: {
        tagline: 'Trusted tax and accounting consulting.',
        services: 'Services',
        servicesList: {
          asesoria: 'Tax Advisory',
          contabilidad: 'Accounting',
          auditoria: 'Audit'
        },
        contact: 'Contact',
        copyright: '© 2025 Rodac Consultores. All rights reserved.'
      },
      about: {
        hero: {
          title: 'We are the architects of your tax security.',
          desc: 'At Rodac Consultores, certainty is the most valuable asset.'
        },
        history: {
          title: 'Our History',
          p1: 'Rodac Consultores was born in Guadalajara with a clear mission: to be the strategic partner that provides certainty to each of our clients. In a world where tax regulations constantly change, we stay one step ahead.',
          p2: 'We don\'t just manage your accounting; we build a legal and tax fortress around your assets so you can operate with absolute confidence and freedom.',
          quote: '"Our goal is that our clients don\'t have to think about the tax office. That\'s our job. Their job is to grow their business."',
          signature: '- Lic. David Rodríguez, Managing Partner'
        },
        values: {
          title: 'Our Pillars',
          integrity: {
            title: 'Integrity',
            desc: 'We act with unwavering ethics. Your trust is our most important asset. Every decision we make is guided by the highest standards of honesty and transparency.'
          },
          precision: {
            title: 'Precision',
            desc: 'Obsessed with detail. In our field, the slightest error can be costly. We review every number, every document, every transaction with maximum attention.'
          },
          proactivity: {
            title: 'Proactivity',
            desc: 'We don\'t wait for problems, we anticipate them. We are always one step ahead of the authorities. We identify risks before they become threats.'
          },
          confidentiality: {
            title: 'Confidentiality',
            desc: 'Your information is sacred. We apply the highest standards of security and discretion. Your privacy is our absolute priority.'
          }
        },
        team: {
          title: 'Our Team',
          intro: 'A group of professionals dedicated to protecting your assets and growing your business with tax security.',
          david: {
            title: 'Managing Partner',
            desc: 'Specialist in tax law and tax optimization strategies. More than 15 years of experience in tax consulting.'
          },
          maria: {
            title: 'Accounting Director',
            desc: 'Expert in strategic accounting and regulatory compliance. Specialized in manufacturing and logistics companies.'
          },
          carlos: {
            title: 'Legal Advisor',
            desc: 'Specialist in corporate law and representation before tax authorities. Expert in audits and tax defense.'
          }
        }
      },
      servicesPage: {
        hero: {
          title: 'Solutions tailored to your peace of mind',
          desc: 'Comprehensive tax consulting, strategic accounting and audit services to protect your assets.'
        },
        asesoria: {
          title: 'Strategic Tax and Legal Advisory',
          subtitle: 'More than a defense, it\'s an attack plan.',
          desc: 'We help you navigate the complex Mexican tax system to turn it into a competitive advantage.',
          features: [
            'Personalized tax planning and strategy',
            'Representation and defense before SAT, IMSS, and INFONAVIT',
            'Permanent consulting on legislative changes',
            'Corporate structure optimization',
            'Processing and follow-up of tax refunds',
            'Legal advice on contracts and commercial operations'
          ],
          idealFor: [
            'You want to minimize tax risk proactively',
            'You face an audit or need legal representation',
            'Your company is growing and its tax structure becomes more complex',
            'You want a second expert opinion on your current situation'
          ]
        },
        contabilidad: {
          title: 'Strategic Accounting',
          subtitle: 'More than numbers, it\'s the financial map of your business.',
          desc: 'Precision and total compliance with Mexican regulations.',
          features: [
            'Comprehensive accounting for individuals and corporations',
            'Monthly strategic financial analysis',
            'Total compliance with Mexican regulations',
            'Preparation of financial statements',
            'Profitability indicator analysis',
            'Support for executive decision making'
          ],
          idealFor: [
            'You need accurate and timely accounting',
            'You want to understand the real performance of your business',
            'You seek to comply with all tax obligations',
            'You need financial information for strategic decisions'
          ]
        },
        auditoria: {
          title: 'Audit and Reports',
          subtitle: 'Validation and certainty for executives, partners and investors.',
          desc: 'Maximum confidence in your financial information.',
          features: [
            'Financial and tax audits',
            'Reports for partners and investors',
            'Financial information validation',
            'Internal control review',
            'Financial statement certification',
            'Compliance advisory'
          ],
          idealFor: [
            'You need to validate your company\'s financial information',
            'You seek investment or financing',
            'You have partners who require transparency',
            'You want to ensure compliance with international standards'
          ]
        },
        cta: {
          title: 'Let\'s talk about your specific case.',
          desc: 'Every company is a world. Contact our specialists for a confidential evaluation of your situation.',
          button: 'Contact an Advisor'
        },
        overview: {
          asesoria: 'Tax and Legal Advisory',
          contabilidad: 'Strategic Accounting',
          auditoria: 'Audit and Reports'
        },
        includesTitle: 'What\'s included:',
        idealForTitle: 'Ideal for you if:',
        mainServicesTitle: 'Our Main Services',
        learnMore: 'Learn more'
      },
      blog: {
        hero: {
          title: 'Tax Resources and Knowledge',
          desc: 'Stay updated with the latest tax news, optimization strategies and tips to grow your business with confidence.'
        },
        featured: 'Featured Articles',
        categories: {
          all: 'All',
          sat: 'SAT News',
          strategy: 'Tax Strategy',
          business: 'Business Tips',
          imss: 'IMSS and Labor'
        },
        newsletter: {
          title: 'Stay Informed',
          desc: 'Receive the latest tax news and expert advice directly in your email.',
          placeholder: 'Your email address',
          button: 'Subscribe',
          disclaimer: 'No spam. Only valuable content. You can cancel at any time.'
        }
      },
      contact: {
        hero: {
          title: 'Let\'s start the conversation.',
          desc: 'Your peace of mind starts here. Contact us to schedule a consultation. We guarantee absolute confidentiality from the first moment.'
        },
        info: {
          title: 'Contact Information',
          desc: 'We are here to help you. Contact us in the way that is most convenient for you.',
          office: 'Guadalajara Office',
          phone: 'Phone',
          email: 'Email',
          hours: 'Business Hours',
          hoursValue: 'Mon - Fri: 9:00 AM - 6:00 PM',
          location: 'Location',
          locationDesc: 'Central office in the heart of Guadalajara, easy access and parking available.',
          mapButton: 'View on Google Maps'
        },
        form: {
          title: 'Send us a message',
          desc: 'Complete the form and we will contact you within 24 hours.',
          name: 'Full name *',
          email: 'Email address *',
          phone: 'Phone',
          company: 'Company name',
          service: 'Service of interest',
          serviceOptions: {
            placeholder: 'Select service',
            asesoria: 'Tax Advisory',
            contabilidad: 'Accounting',
            auditoria: 'Audit'
          },
          message: 'Message *',
          messagePlaceholder: 'Tell us about your situation and how we can help you...',
          submit: 'Send Confidential Message',
          sending: 'Sending...',
          success: {
            title: 'Message sent successfully!',
            desc: 'Thank you for contacting us. We will contact you within 24 hours.'
          }
        },
        faq: {
          title: 'Frequently Asked Questions',
          q1: 'How long does an initial consultation take?',
          a1: 'An initial consultation typically takes 30-45 minutes. It is completely free and confidential.',
          q2: 'Do you serve companies of any size?',
          a2: 'Yes, we work with companies from startups to large corporations. Each case is unique and deserves personalized attention.',
          q3: 'Do you offer online services?',
          a3: 'Absolutely. We use secure technology for virtual meetings and sharing documents confidentially.',
          q4: 'What is the cost of your services?',
          a4: 'Our services are tailored to the specific needs of each client. The first consultation is free to evaluate your situation.'
        }
      },
      aiConsultant: {
        hero: {
          title: 'Rodac AI - Specialized Consultant',
          desc: 'Get expert answers about Mexican accounting and taxation 24/7. Our assistant specializes in SAT, IMSS and INFONAVIT regulations.'
        },
        chat: {
          title: 'Chat with our Tax Expert',
          placeholder: 'Type your question about Mexican accounting or taxation...',
          send: 'Send',
          thinking: 'Thinking...',
          welcome: 'Hello! I\'m your specialized consultant in Mexican accounting and taxation. I can help you with questions about:',
          capabilities: [
            'SAT regulations and tax obligations',
            'Accounting for individuals and corporations',
            'IMSS, INFONAVIT and social security',
            'Electronic invoicing and CFDI',
            'Deductions and tax optimization',
            'Audits and regulatory compliance'
          ],
          askQuestion: 'How can I help you today?',
          examples: {
            title: 'Frequently asked questions:',
            questions: [
              'What are the tax obligations for a corporation?',
              'How can I optimize my tax deductions?',
              'What documents do I need for a SAT audit?',
              'When should I file my annual tax return?'
            ]
          },
          disclaimer: 'This assistant provides general information. For specific cases, consult with our specialists.'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 
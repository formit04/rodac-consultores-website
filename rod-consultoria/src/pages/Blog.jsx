import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', name: t('blog.categories.all') },
    { id: 'sat', name: t('blog.categories.sat') },
    { id: 'strategy', name: t('blog.categories.strategy') },
    { id: 'business', name: t('blog.categories.business') },
    { id: 'imss', name: t('blog.categories.imss') }
  ];

  const articles = [
    {
      id: 1,
      title: 'Nuevas obligaciones fiscales para 2025',
      excerpt: 'Conoce los cambios más importantes en la legislación fiscal que entrarán en vigor el próximo año.',
      category: 'sat',
      date: '2025-01-15',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Estrategias de optimización fiscal para PYMES',
      excerpt: 'Descubre cómo las pequeñas y medianas empresas pueden optimizar su carga fiscal de manera legal.',
      category: 'strategy',
      date: '2025-01-10',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Guía completa de cumplimiento IMSS',
      excerpt: 'Todo lo que necesitas saber sobre las obligaciones patronales ante el IMSS.',
      category: 'imss',
      date: '2025-01-05',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Cómo preparar tu empresa para una auditoría',
      excerpt: 'Consejos prácticos para estar preparado ante una posible auditoría fiscal.',
      category: 'business',
      date: '2024-12-28',
      readTime: '7 min'
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="app">
      <Header />
      
      {/* HERO SECTION */}
      <section className="page-hero blog-hero">
        <div className="container">
          <div className="brand-rect"></div>
          <div className="hero-content">
            <h1>{t('blog.hero.title')}</h1>
            <p>{t('blog.hero.desc')}</p>
          </div>
        </div>
      </section>
      <div className="brand-circle">
        <Logo />
      </div>

      {/* FEATURED ARTICLES */}
      <section className="featured-articles">
        <div className="container">
          <h2>Artículos Destacados</h2>
          <div className="featured-grid">
            {filteredArticles.map(article => (
              <div key={article.id} className="featured-card">
                <div className="article-image">
                  <span className="image-emoji">{article.image}</span>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="category">{categories.find(cat => cat.id === article.category)?.name}</span>
                    <span className="date">{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="read-time">{article.readTime}</span>
                    <button className="read-more">Leer más →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES FILTER */}
      <section className="categories-filter">
        <div className="container">
          <div className="categories-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="articles-grid">
        <div className="container">
          <div className="articles-container">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-header">
                  <div className="article-image-small">
                    <span className="image-emoji">{article.image}</span>
                  </div>
                  <div className="article-meta">
                    <span className="category">{categories.find(cat => cat.id === article.category)?.name}</span>
                    <span className="date">{new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <div className="article-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <div className="article-footer">
                  <span className="read-time">{article.readTime}</span>
                  <button className="read-more">Leer más →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h2>{t('blog.newsletter.title')}</h2>
            <p>{t('blog.newsletter.desc')}</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('blog.newsletter.placeholder')}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">{t('blog.newsletter.button')}</button>
            </form>
            <p className="newsletter-disclaimer">{t('blog.newsletter.disclaimer')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 
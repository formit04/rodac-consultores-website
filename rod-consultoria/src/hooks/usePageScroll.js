import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Skip scroll behavior for home page and contact form hash
    if (location.pathname === '/' || location.hash === '#contact-form') {
      return;
    }

    // For subpages, first scroll to top, then to main content
    if (['/nosotros', '/servicios', '/blog', '/contacto'].includes(location.pathname)) {
      // First scroll to top immediately
      window.scrollTo(0, 0);
      
      // Then scroll to main content after a delay
      const timer = setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          const elementRect = mainContent.getBoundingClientRect();
          const offset = window.pageYOffset + elementRect.top - 80; // 80px offset from top
          
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }, 200); // 200ms delay to ensure page is rendered
      
      return () => clearTimeout(timer);
    }
  }, [location]);
};

export default usePageScroll; 
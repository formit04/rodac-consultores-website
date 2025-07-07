import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Skip auto-scroll for home page
    if (location.pathname === '/') {
      return;
    }

    // Skip auto-scroll if navigating to contact form
    if (location.hash === '#contact-form') {
      return;
    }

    // Skip auto-scroll for chat page to avoid disrupting chat interface
    if (location.pathname === '/rodac-ai') {
      return;
    }

    // Only scroll to top when navigating to a new page
    window.scrollTo(0, 0);

  }, [location]);
};

export default usePageScroll; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import AIConsultant from './pages/AIConsultant';
import FloatingContact from './components/FloatingContact';
import './App.css';
import './i18n';

function App() {
  const { ready } = useTranslation();
  
  if (!ready) {
    return (
      <div style={{ 
        padding: '50px', 
        background: '#f0f0f0', 
        minHeight: '100vh', 
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h1 style={{ color: '#333', fontSize: '48px', marginBottom: '20px' }}>RODAC CONSULTORES</h1>
          <p style={{ color: '#666', fontSize: '24px' }}>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/rodac-ai" element={<AIConsultant />} />
        <Route path="/chat24" element={<Navigate to="/rodac-ai" replace />} />
        <Route path="/czat24" element={<Navigate to="/rodac-ai" replace />} />
        <Route path="/ai-consultant" element={<Navigate to="/rodac-ai" replace />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <FloatingContact />
    </Router>
  );
}

export default App;

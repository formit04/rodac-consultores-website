import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import usePageScroll from '../hooks/usePageScroll';

const AIConsultant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);
  const { t } = useTranslation();
  usePageScroll();

  const scrollToBottom = () => {
    // Scroll only within the chat messages container
    if (messagesEndRef.current) {
      const chatMessages = messagesEndRef.current.closest('.chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Only scroll to bottom when there are messages (not on initial load)
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  // Removed automatic scrolling on page load to prevent unwanted scroll behavior

  const GEMINI_API_KEY = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY || import.meta.env.REACT_APP_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';

  const systemPrompt = `Usted es un experto en contabilidad e impuestos en México con más de 20 años de experiencia, incluyendo una larga experiencia con Rodac Consultores. En una firma de consultoría fiscal con sede en Guadalajara, México. Tu jefe es David Rodríguez'

ESPECIALIDADES:
- Normativas del SAT (Servicio de Administración Tributaria)
- Contabilidad para personas físicas y morales
- IMSS, INFONAVIT y seguridad social
- Facturación electrónica y CFDI
- Deducciones y optimización fiscal
- Auditorías y cumplimiento normativo
- Derecho fiscal mexicano

INSTRUCCIONES:
1. SOLO responde preguntas relacionadas con contabilidad, fiscalidad y normativas mexicanas
2. Si te preguntan sobre otros temas, redirige amablemente hacia temas fiscales
3. Proporciona información actualizada y precisa
4. Usa un tono profesional pero accesible
5. Siempre menciona que para casos específicos es recomendable una consulta personalizada
6. Incluye referencias a normativas específicas cuando sea relevante
7. Responde en español, a menos que te pregunten específicamente en inglés, i la pregunta está en inglés, responda en inglés.
8. Mi nombre es Mr. RodacAI, soy un asistente de inteligencia artificial especializado en fiscalidad mexicana, y estoy aquí para ayudarte con tus consultas contables y fiscales.

Si alguien pregunta sobre temas no relacionados con fiscalidad mexicana, responde: "Mi especialidad es la contabilidad y fiscalidad mexicana. ¿Tienes alguna pregunta sobre normativas del SAT, contabilidad, IMSS, facturación electrónica o algún otro tema fiscal en México?"`;

  const callGeminiAPI = async (userMessage) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nPregunta del usuario: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return 'Lo siento, hubo un problema al procesar tu consulta. Por favor, intenta nuevamente o contacta directamente con nuestros especialistas.';
    }
  };

  const handleSendMessage = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setShowWelcome(false);
    setIsLoading(true);

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);

    // Get AI response
    const aiResponse = await callGeminiAPI(userMessage);
    
    const newAIMessage = {
      id: Date.now() + 1,
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newAIMessage]);
    setIsLoading(false);
  };

  const handleExampleClick = (question) => {
    setInputMessage(question);
    setShowWelcome(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="app">
      <Header />
      
      {/* HERO SECTION */}
      <section className="page-hero ai-consultant-hero">
        <div className="container">
          <div className="brand-rect"></div>
          <div className="hero-content">
            <h1>{t('aiConsultant.hero.title')}</h1>
            <p>{t('aiConsultant.hero.desc')}</p>
          </div>
        </div>
      </section>
      <div className="brand-circle">
        <Logo />
      </div>

      {/* CHAT INTERFACE */}
      <section className="ai-chat-section" id="main-content">
        <div className="container">
          <div className="chat-container">
            <div className="chat-header">
              <h2>{t('aiConsultant.chat.title')}</h2>
            </div>

            <div className="chat-messages">
              {showWelcome && (
                <div className="welcome-message">
                  <div className="ai-avatar">🤖</div>
                  <div className="message-content">
                    <p>{t('aiConsultant.chat.welcome')}</p>
                    <ul className="capabilities-list">
                      {t('aiConsultant.chat.capabilities', { returnObjects: true }).map((capability, index) => (
                        <li key={index}>✓ {capability}</li>
                      ))}
                    </ul>
                    <p><strong>{t('aiConsultant.chat.askQuestion')}</strong></p>
                    
                    <div className="example-questions">
                      <h4>{t('aiConsultant.chat.examples.title')}</h4>
                      {t('aiConsultant.chat.examples.questions', { returnObjects: true }).map((question, index) => (
                        <button
                          key={index}
                          className="example-question"
                          onClick={() => handleExampleClick(question)}
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-avatar">
                    {message.sender === 'ai' ? '🤖' : '👤'}
                  </div>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message ai">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{t('aiConsultant.chat.thinking')}</p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
              <div className="input-container">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('aiConsultant.chat.placeholder')}
                  rows="1"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="send-button"
                >
                  {t('aiConsultant.chat.send')}
                </button>
              </div>
              <p className="chat-disclaimer">
                {t('aiConsultant.chat.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsultant; 
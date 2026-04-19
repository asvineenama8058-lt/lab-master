import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Send, 
  ArrowLeft, 
  Bot, 
  User, 
  Trash2, 
  MessageSquare, 
  Sparkles,
  Search,
  BookOpen,
  HelpCircle,
  Loader2,
  Mic,
  MicOff,
  FileText,
  Plus
} from 'lucide-react';
import { downloadChatAsPDF } from '../utils/pdfGenerator';

function Chatbot() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const STORAGE_KEY = `lab_master_chat_v2_${user?.name || 'guest'}`;

  // Load chat history on mount
  useEffect(() => {
    const savedChat = localStorage.getItem(STORAGE_KEY);
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat));
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    } else {
      // Initial greeting
      setMessages([
        {
          role: 'bot',
          content: `Hello ${user?.name || 'there'}! I'm your Lab Master AI Assistant. I can help you with lab procedures, principles, and viva questions.`,
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [user, STORAGE_KEY]);

  // Save chat history whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, STORAGE_KEY]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Voice Input.");
      return;
    }
    
    if (isListening || isLoading) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (input.length + transcript.length <= 500) {
        setInput(prev => (prev + " " + transcript).trim());
      } else {
        alert("Message too long (max 500 characters)");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const handleQuickAction = (text) => {
    if (isLoading) return;
    setInput(text);
    // Automatically trigger send after a tiny delay for UX
    setTimeout(() => {
       const submitBtn = document.getElementById('chat-submit-btn');
       submitBtn?.click();
    }, 100);
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    if (input.length > 500) {
        alert("Message too long (max 500 characters)");
        return;
    }

    const userQuery = input.trim();
    const userMessage = { 
      role: 'user', 
      content: userQuery, 
      timestamp: new Date().toISOString() 
    };

    setInput('');
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuery })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Server busy, try again');
      }
      
      setMessages(prev => [...prev, {
        role: 'bot',
        content: data.content,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, {
        role: 'bot',
        content: error.message === 'Failed to fetch' ? "Server busy, try again" : error.message,
        isError: true,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    if (isLoading) return;
    setMessages([
      {
        role: 'bot',
        content: `New chat started. How can I help you?`,
        timestamp: new Date().toISOString()
      }
    ]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleDeleteChat = () => {
    if (isLoading) return;
    if (window.confirm("Are you sure you want to delete all messages?")) {
      setMessages([]);
      localStorage.removeItem(STORAGE_KEY);
      // Add initial greeting back
      setTimeout(() => {
        setMessages([{
          role: 'bot',
          content: `Chat history deleted. Ready for new questions!`,
          timestamp: new Date().toISOString()
        }]);
      }, 100);
    }
  };

  const quickActions = [
    { label: "Explain ESR", text: "Explain ESR principle and procedure" },
    { label: "Hb estimation viva", text: "Give me viva questions for Hb estimation" },
    { label: "Gram staining steps", text: "What are the steps of Gram staining?" },
    { label: "Common lab mistakes", text: "What are common lab mistakes in hematology?" }
  ];

  return (
    <div className="chatbot-page pt-safe" style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)' }}>
      {/* Chat Header */}
      <header style={{ 
        padding: '1rem', 
        background: 'var(--surface)', 
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="icon-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '10px' }}>
              <Bot size={20} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.1rem', margin: 0 }}>Lab Master AI</h1>
              <div style={{ fontSize: '0.7rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--success)', borderRadius: '50%' }}></span>
                Online
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="icon-btn" onClick={handleNewChat} title="New Chat" disabled={isLoading}>
            <Plus size={20} color="var(--text-muted)" />
          </button>
          <button className="icon-btn" onClick={handleDeleteChat} title="Delete Chat" disabled={isLoading}>
            <Trash2 size={20} color="var(--text-muted)" />
          </button>
        </div>
      </header>

      {/* Messages Scroll Area */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {messages.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '20vh', color: 'var(--text-muted)' }}>
                <Bot size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p>Start a conversation with Lab Master AI</p>
            </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            width: '100%'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              maxWidth: '85%',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                background: msg.role === 'user' ? 'var(--primary-light)' : 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border)',
                flexShrink: 0
              }}>
                {msg.role === 'user' ? <User size={16} color="var(--primary)" /> : <Bot size={16} color="var(--primary)" />}
              </div>
              <div style={{ 
                background: msg.role === 'user' ? 'var(--primary)' : 'var(--surface)', 
                color: msg.isError ? '#ef4444' : (msg.role === 'user' ? 'white' : 'var(--text-main)'),
                padding: '0.8rem 1.1rem',
                borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                position: 'relative'
              }}>
                {msg.content}
                
                {msg.role === 'bot' && !msg.isError && msg.content && msg.content.trim() !== "" && (
                  <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => downloadChatAsPDF(msg.content, "Lab_Master_AI_Response")}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '0.3rem', 
                        background: 'none', border: 'none', 
                        color: 'var(--primary)', opacity: 0.8,
                        fontSize: '0.75rem', cursor: 'pointer', fontWeight: 'bold'
                      }}
                    >
                      <FileText size={14} /> Download PDF
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
              <Bot size={16} color="var(--primary)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.8rem 1.1rem', background: 'var(--surface)', borderRadius: '18px 18px 18px 2px', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>AI is typing...</span>
              <div className="typing-dots" style={{ display: 'flex', gap: '2px' }}>
                <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Buttons */}
      <div style={{ 
        padding: '0.5rem 1rem', 
        display: 'flex', 
        gap: '0.5rem', 
        overflowX: 'auto', 
        scrollbarWidth: 'none',
        background: 'var(--bg-main)'
      }}>
        {quickActions.map((action, idx) => (
          <button 
            key={idx} 
            onClick={() => handleQuickAction(action.text)}
            disabled={isLoading}
            style={{ 
              whiteSpace: 'nowrap', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '20px', 
              background: 'var(--surface)', 
              border: '1px solid var(--border)', 
              fontSize: '0.8rem', 
              color: 'var(--text-main)',
              cursor: isLoading ? 'default' : 'pointer',
              opacity: isLoading ? 0.6 : 1
            }}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ 
        padding: '1rem 1.5rem', 
        background: 'var(--surface)', 
        borderTop: '1px solid var(--border)',
        paddingBottom: 'calc(1rem + var(--safe-area-bottom))'
      }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.75rem', position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Ask medical lab questions..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            maxLength={500}
            style={{ 
              flex: 1, 
              padding: '0.85rem 1.25rem', 
              borderRadius: '14px', 
              border: '1px solid var(--border)',
              background: 'var(--bg-main)',
              fontSize: '1rem',
              outline: 'none',
              color: 'var(--text-main)',
              paddingRight: '3rem'
            }}
          />
          <div style={{ position: 'absolute', right: '110px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', color: input.length > 450 ? '#ef4444' : 'var(--text-muted)' }}>
            {input.length > 0 && `${input.length}/500`}
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isLoading}
              style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: isListening ? '#ef4444' : 'var(--surface)',
                color: isListening ? 'white' : 'var(--primary)',
                border: `1px solid ${isListening ? '#ef4444' : 'var(--primary)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
              title="Voice Input"
            >
              {isListening ? <MicOff size={20} className="pulse" /> : <Mic size={20} />}
            </button>
            <button 
              id="chat-submit-btn"
              type="submit" 
              disabled={!input.trim() || isLoading}
              style={{ 
                width: '100px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'var(--primary)', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: 'none',
                cursor: (input.trim() && !isLoading) ? 'pointer' : 'default',
                opacity: (input.trim() && !isLoading) ? 1 : 0.6,
                fontWeight: '600',
                gap: '0.5rem'
              }}
            >
              {isLoading ? <Loader2 className="spin" size={20} /> : <><Send size={18} /> Send</>}
            </button>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .pulse { animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        .typing-dots .dot {
          animation: dot-blink 1.4s infinite;
          opacity: 0;
        }
        .typing-dots .dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dot-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}} />
    </div>
  );
}

export default Chatbot;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { practicalsData, subjectsList } from '../data/mockData';
// Offline AI Bypass
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
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { chatbotNotes } from '../data/chatbotNotes';
import { downloadChatAsPDF } from '../utils/pdfGenerator';

function Chatbot() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isNotesMode, setIsNotesMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const STORAGE_KEY = `lab_master_chat_${user?.name || 'guest'}`;

  // Load chat history on mount
  useEffect(() => {
    const savedChat = localStorage.getItem(STORAGE_KEY);
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      // Initial greeting
      setMessages([
        {
          role: 'bot',
          content: `Hello ${user?.name || 'there'}! I'm your Lab Master AI Assistant. I can help you with lab procedures, principles, and viva questions. Try asking something like "Explain Sahli's method" or "WBC count viva points".`,
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [user, STORAGE_KEY]);

  // Save chat history whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      // Limit to last 30 messages for performance
      const historyToSave = messages.slice(-30);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(historyToSave));
    }
  }, [messages, STORAGE_KEY]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const offlineNotesSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Parse chatbotNotes locally allowing simulated offline AI
    const blocks = chatbotNotes.split('# ').filter(Boolean);
    
    let bestMatch = null;
    let highestScore = 0;

    for (const block of blocks) {
      const lines = block.split('\n');
      const title = lines[0].trim();
      const content = lines.slice(1).join('\n').trim();
      
      const titleLower = title.toLowerCase();
      let score = 0;
      
      // Direct substring match is highly prioritized
      if (lowerQuery.includes(titleLower)) score += 10;
      
      // Keyword matching
      titleLower.split(/[\s()]+/).forEach(word => {
        if (word.length > 3 && lowerQuery.includes(word)) score += 2;
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = { title, content };
      }
    }

    if (bestMatch && highestScore >= 2) {
      return `### ${bestMatch.title}\n\n${bestMatch.content}`;
    }

    return null;
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Voice Input.");
      return;
    }
    
    if (isListening) return; // Prevent multiple instances

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => (prev + " " + transcript).trim());
    };

    recognition.onerror = (event) => {
      console.error("Speech error", event.error);
      alert("Microphone error: " + event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const handleTopicClick = (topic) => {
    const prompt = `Explain ${topic} in simple, student-friendly medical lab format with headings.`;
    handleSend(null, prompt);
  };

  const handleSend = async (e, directQuery = null) => {
    if (e) e.preventDefault();
    const queryToUse = directQuery !== null ? directQuery : input;
    if (!queryToUse.trim() || isTyping) return;

    const userQuery = queryToUse.trim();
    const userMessage = { 
      role: 'user', 
      content: userQuery, 
      timestamp: new Date().toISOString() 
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    if (directQuery === null) setInput('');
    setIsTyping(true);

    try {
      const apiMessages = newMessages.map(m => ({ 
        role: m.role === 'bot' ? 'assistant' : 'user', 
        content: m.content 
      }));
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          mode: isNotesMode ? 'notes' : 'ai',
          notesContext: isNotesMode ? chatbotNotes : ''
        })
      });

      if (!response.ok) {
        throw new Error('API failed or unavailable');
      }
      
      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'bot',
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.warn("API fetch failed, falling back to local notes:", error);
      let responseContent = offlineNotesSearch(userQuery);
      if (!responseContent) {
        responseContent = isNotesMode 
          ? "Answer not found in notes. Please ask a lab-related question."
          : "I'm currently operating in offline mode and couldn't connect to the AI server. My local database couldn't find an exact match for your question. Try asking about a specific test like 'ESR' or 'Gram Stain'.";
      }

      setMessages(prev => [...prev, {
        role: 'bot',
        content: responseContent,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear your chat history?")) {
      localStorage.removeItem(STORAGE_KEY);
      setMessages([
        {
          role: 'bot',
          content: `Chat cleared. How can I help you today?`,
          timestamp: new Date().toISOString()
        }
      ]);
    }
  };

  const suggestions = [
    "Explain Sahli's Hb method",
    "WBC count viva points",
    "ESR clinical significance",
    "Total RBC count principle"
  ];

  const quickTopics = [
    "ESR",
    "Gram Stain",
    "Diabetes",
    "Hematology basics"
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
            <div style={{ background: isNotesMode ? '#8b5cf6' : 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '10px', transition: 'background 0.3s' }}>
              <Bot size={20} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.1rem', margin: 0 }}>Lab Master AI</h1>
              <div style={{ fontSize: '0.7rem', color: isNotesMode ? '#8b5cf6' : 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <span style={{ width: '6px', height: '6px', background: isNotesMode ? '#8b5cf6' : 'var(--success)', borderRadius: '50%' }}></span>
                {isNotesMode ? "Notes Mode Active" : "General Mode"}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => setIsNotesMode(!isNotesMode)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.3rem', 
              background: 'none', border: 'none', 
              color: isNotesMode ? '#8b5cf6' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600'
            }}
            title="Toggle Ask From Notes Mode"
          >
            {isNotesMode ? <ToggleRight size={26} color="#8b5cf6" /> : <ToggleLeft size={26} />}
            <span className="hide-on-mobile">Notes</span>
          </button>
          <button className="icon-btn" onClick={clearChat} title="Clear Chat">
            <Trash2 size={20} color="var(--text-muted)" />
          </button>
        </div>
      </header>

      {/* Quick Topics Bar */}
      <div style={{ background: 'var(--surface)', padding: '0.5rem 1rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '0.5rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginRight: '0.5rem' }}>
          <BookOpen size={14} style={{ marginRight: '4px' }} /> Topics:
        </span>
        {quickTopics.map((topic, i) => (
          <button 
            key={i} 
            onClick={() => handleTopicClick(topic)}
            disabled={isTyping}
            style={{ 
              padding: '0.3rem 0.8rem', borderRadius: '12px', 
              background: 'var(--bg-main)', border: '1px solid var(--border)',
              fontSize: '0.8rem', color: 'var(--text-main)', whiteSpace: 'nowrap',
              cursor: isTyping ? 'default' : 'pointer',
              opacity: isTyping ? 0.5 : 1
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
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
                color: msg.isError ? 'var(--danger)' : (msg.role === 'user' ? 'white' : 'var(--text-main)'),
                padding: '0.8rem 1.1rem',
                borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {/* Process markdown-like headers for local search responses */}
                {msg.content.split('\n').map((line, i) => {
                  if (line.startsWith('### ')) return <h3 key={i} style={{ margin: '0.5rem 0', color: 'inherit' }}>{line.replace('### ', '')}</h3>;
                  if (line.startsWith('**') && line.endsWith('**')) return <strong key={i} style={{ display: 'block', margin: '0.5rem 0' }}>{line.replace(/\*\*/g, '')}</strong>;
                  if (line.startsWith('- **')) {
                     // Basic bolding handler for list items
                     const parts = line.split('**');
                     return <div key={i} style={{ marginBottom: '0.3rem' }}>• <strong>{parts[1]}</strong>{parts[2]}</div>;
                  }
                  return <div key={i}>{line}</div>;
                })}
                
                {msg.role === 'bot' && !msg.isError && (
                  <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => downloadChatAsPDF(msg.content, "AI_Explanation")}
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

        {isTyping && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
              <Bot size={16} color="var(--primary)" />
            </div>
            <div className="typing-indicator" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.8rem 1.1rem', background: 'var(--surface)', borderRadius: '18px 18px 18px 2px', border: '1px solid var(--border)' }}>
              <div className="dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
              <div className="dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
              <div className="dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Chips (Only visible if history is small) */}
      {messages.length < 5 && (
        <div style={{ 
          padding: '0 1.5rem 1rem', 
          display: 'flex', 
          gap: '0.5rem', 
          overflowX: 'auto', 
          scrollbarWidth: 'none'
        }}>
          {suggestions.map((s, idx) => (
            <button key={idx} onClick={() => { setInput(s); }} style={{ 
              whiteSpace: 'nowrap', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              background: 'var(--surface)', 
              border: '1px solid var(--border)', 
              fontSize: '0.85rem', 
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div style={{ 
        padding: '1rem 1.5rem', 
        background: 'var(--surface)', 
        borderTop: '1px solid var(--border)',
        paddingBottom: 'calc(1rem + var(--safe-area-bottom))'
      }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.75rem' }}>
          <input 
            type="text" 
            placeholder="Type your question..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            style={{ 
              flex: 1, 
              padding: '0.85rem 1.25rem', 
              borderRadius: '14px', 
              border: '1px solid var(--border)',
              background: 'var(--bg-main)',
              fontSize: '1rem',
              outline: 'none',
              color: 'var(--text-main)'
            }}
          />
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isTyping}
              style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: isListening ? '#ef4444' : 'var(--surface)',
                color: isListening ? 'white' : 'var(--primary)',
                border: `1px solid ${isListening ? '#ef4444' : 'var(--primary)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: isListening ? '0 0 15px rgba(239, 68, 68, 0.4)' : 'none'
              }}
              title="Voice Input"
            >
              {isListening ? <MicOff size={20} className="animate-pulse" /> : <Mic size={20} />}
            </button>
            <button 
              type="submit" 
              disabled={!input.trim() || isTyping}
              style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
              background: 'var(--primary)', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: 'none',
              cursor: input.trim() ? 'pointer' : 'default',
              opacity: input.trim() ? 1 : 0.6,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {isTyping ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .typing-indicator .dot {
          animation: typing 1.4s infinite ease-in-out;
        }
        .typing-indicator .dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}

export default Chatbot;

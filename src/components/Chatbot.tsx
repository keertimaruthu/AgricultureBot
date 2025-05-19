import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, User, Bot, RefreshCw } from 'lucide-react';
import { translations } from '../utils/translations';

interface ChatbotProps {
  currentLanguage: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC<ChatbotProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t.chatbotWelcome,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Update welcome message when language changes
  useEffect(() => {
    setMessages(prev => [
      {
        id: 1,
        text: t.chatbotWelcome,
        sender: 'bot',
        timestamp: new Date()
      },
      ...prev.slice(1)
    ]);
  }, [currentLanguage, t.chatbotWelcome]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      // Mock response generation - in a real app, this would call your Python backend
      const mockResponses = [
        t.chatbotResponse1,
        t.chatbotResponse2,
        t.chatbotResponse3,
      ];
      
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex-grow flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
        <div className="bg-green-700 text-white py-3 px-5">
          <h2 className="text-xl font-semibold">{t.agriChatbot}</h2>
          <p className="text-sm text-green-100">{t.askAnything}</p>
        </div>
        
        <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
          {messages.map(message => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                }`}
              >
                <div className="flex items-center mb-1 text-xs text-opacity-80">
                  {message.sender === 'user' ? (
                    <User className="h-3 w-3 mr-1" />
                  ) : (
                    <Bot className="h-3 w-3 mr-1" />
                  )}
                  <span>
                    {message.sender === 'user' ? t.you : 'AgriBot'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 border border-gray-200 rounded-lg rounded-tl-none shadow-sm max-w-[75%] px-4 py-2">
                <div className="flex items-center mb-1 text-xs text-opacity-80">
                  <Bot className="h-3 w-3 mr-1" />
                  <span>AgriBot • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  <span>{t.thinking}</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.typeYourQuery}
              className="flex-grow py-2 px-4 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={input.trim() === '' || isLoading}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-r-md transition duration-200 disabled:bg-gray-400"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center">
              <button className="p-1 hover:bg-gray-100 rounded transition flex items-center">
                <Mic className="h-4 w-4 mr-1" />
                {t.voiceInput}
              </button>
            </div>
            <p>{t.poweredBy} AgriBot AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
import React, { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  onNavigate,
  activeSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[currentLanguage as keyof typeof translations];
  
  const languages = [
    { code: 'english', name: 'English' },
    { code: 'hindi', name: 'हिंदी' }
  ];
  
  const navItems = [
    { id: 'home', label: t.home },
    { id: 'chatbot', label: t.chatbot },
    { id: 'disease', label: t.diseaseIdentification },
    { id: 'schemes', label: t.schemeRecommendation },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Sprout className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">AgriBot</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-medium hover:text-green-200 transition-colors ${
                activeSection === item.id ? 'underline decoration-2 underline-offset-4' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-green-800 px-3 py-1 rounded-md">
              <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${
                    currentLanguage === lang.code ? 'bg-green-50 font-medium' : ''
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-800">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 font-medium text-left border-b border-green-700 ${
                  activeSection === item.id ? 'text-green-200' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="py-3">
              <p className="mb-2 text-green-200">{t.selectLanguage}:</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`px-3 py-2 rounded-md text-center ${
                      currentLanguage === lang.code
                        ? 'bg-green-600 text-white'
                        : 'bg-green-700 text-green-100'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
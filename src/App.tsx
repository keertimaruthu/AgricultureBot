import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Chatbot from './components/Chatbot';
import DiseaseIdentifier from './components/DiseaseIdentifier';
import SchemeRecommender from './components/SchemeRecommender';
import Footer from './components/Footer';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [activeSection, setActiveSection] = useState('home');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const navigateTo = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
        onNavigate={navigateTo}
        activeSection={activeSection}
      />
      
      {activeSection === 'home' && (
        <>
          <Hero currentLanguage={currentLanguage} onNavigate={navigateTo} />
          <Features currentLanguage={currentLanguage} onNavigate={navigateTo} />
        </>
      )}
      
      {activeSection === 'chatbot' && (
        <Chatbot currentLanguage={currentLanguage} />
      )}
      
      {activeSection === 'disease' && (
        <DiseaseIdentifier currentLanguage={currentLanguage} />
      )}
      
      {activeSection === 'schemes' && (
        <SchemeRecommender currentLanguage={currentLanguage} />
      )}
      
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}

export default App;
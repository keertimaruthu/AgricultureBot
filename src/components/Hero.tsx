import React from 'react';
import { Sprout, MessageSquare, Leaf, FileText } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeroProps {
  currentLanguage: string;
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  
  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigate('chatbot')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 flex items-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              {t.startChatting}
            </button>
            <button 
              onClick={() => onNavigate('disease')}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 flex items-center"
            >
              <Leaf className="h-5 w-5 mr-2" />
              {t.identifyDisease}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Smart farming" 
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
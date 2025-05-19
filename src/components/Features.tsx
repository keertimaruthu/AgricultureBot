import React from 'react';
import { MessageSquare, Leaf, FileText } from 'lucide-react';
import { translations } from '../utils/translations';

interface FeaturesProps {
  currentLanguage: string;
  onNavigate: (section: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  
  const features = [
    {
      id: 'chatbot',
      icon: <MessageSquare className="h-12 w-12 text-green-600 mb-4" />,
      title: t.chatbotTitle,
      description: t.chatbotDescription,
      action: t.chatbotAction,
      background: 'bg-green-50 hover:bg-green-100'
    },
    {
      id: 'disease',
      icon: <Leaf className="h-12 w-12 text-amber-600 mb-4" />,
      title: t.diseaseTitle,
      description: t.diseaseDescription,
      action: t.diseaseAction,
      background: 'bg-amber-50 hover:bg-amber-100'
    },
    {
      id: 'schemes',
      icon: <FileText className="h-12 w-12 text-blue-600 mb-4" />,
      title: t.schemeTitle,
      description: t.schemeDescription,
      action: t.schemeAction,
      background: 'bg-blue-50 hover:bg-blue-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          {t.featuresTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div 
              key={feature.id}
              className={`${feature.background} rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-6 flex flex-col h-full`}
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{feature.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{feature.description}</p>
              <button
                onClick={() => onNavigate(feature.id)}
                className="mt-auto bg-white text-gray-800 border border-gray-300 hover:border-gray-400 font-medium py-2 px-4 rounded-md shadow-sm hover:shadow transition duration-300 flex items-center justify-center"
              >
                {feature.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Sprout, Mail, Phone, Globe, Heart } from 'lucide-react';
import { translations } from '../utils/translations';

interface FooterProps {
  currentLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-green-700">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <Sprout className="h-6 w-6 mr-2" />
              <span className="text-2xl font-bold">AgriBot</span>
            </div>
            <p className="text-green-200 max-w-md">{t.footerTagline}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-3">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.home}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.chatbot}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.diseaseIdentification}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.schemeRecommendation}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">{t.resources}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.blog}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.farmingTips}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.weatherAlerts}</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">{t.marketPrices}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">{t.contact}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-300" />
                  <a href="mailto:info@agribot.com" className="text-green-200 hover:text-white transition">info@agribot.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-300" />
                  <a href="tel:+1234567890" className="text-green-200 hover:text-white transition">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-green-300" />
                  <a href="https://agribot.example.com" className="text-green-200 hover:text-white transition">agribot.example.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-green-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgriBot. {t.allRightsReserved}
          </p>
          <div className="flex items-center text-green-300 text-sm">
            <span>{t.madeWith}</span>
            <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
            <span>{t.forFarmers}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
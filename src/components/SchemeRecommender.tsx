import React, { useState } from 'react';
import { FileText, Search, Filter, ArrowRight } from 'lucide-react';
import { translations } from '../utils/translations';

interface SchemeRecommenderProps {
  currentLanguage: string;
}

interface Scheme {
  id: number;
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  deadline: string;
  ministry: string;
}

const SchemeRecommender: React.FC<SchemeRecommenderProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Mock data for agricultural schemes
  const schemes: Scheme[] = [
    {
      id: 1,
      title: t.pmKisan,
      description: t.pmKisanDesc,
      eligibility: t.pmKisanEligibility,
      benefits: t.pmKisanBenefits,
      deadline: t.ongoing,
      ministry: t.agriculture
    },
    {
      id: 2,
      title: t.kcc,
      description: t.kccDesc,
      eligibility: t.kccEligibility,
      benefits: t.kccBenefits,
      deadline: t.ongoing,
      ministry: t.finance
    },
    {
      id: 3,
      title: t.pmfby,
      description: t.pmfbyDesc,
      eligibility: t.pmfbyEligibility,
      benefits: t.pmfbyBenefits,
      deadline: "2023-12-31",
      ministry: t.agriculture
    },
    {
      id: 4,
      title: t.pmksy,
      description: t.pmksyDesc,
      eligibility: t.pmksyEligibility,
      benefits: t.pmksyBenefits,
      deadline: t.ongoing,
      ministry: t.waterResources
    }
  ];
  
  const filters = [
    { id: 'all', label: t.allSchemes },
    { id: 'agriculture', label: t.agriculture },
    { id: 'finance', label: t.finance },
    { id: 'waterResources', label: t.waterResources }
  ];
  
  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || scheme.ministry === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });
  
  const [expandedScheme, setExpandedScheme] = useState<number | null>(null);
  
  const toggleSchemeDetails = (id: number) => {
    setExpandedScheme(expandedScheme === id ? null : id);
  };
  
  return (
    <div className="flex-grow flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
        <div className="bg-blue-600 text-white py-3 px-5">
          <h2 className="text-xl font-semibold">{t.schemeRecommender}</h2>
          <p className="text-sm text-blue-100">{t.findRightScheme}</p>
        </div>
        
        <div className="p-4 md:p-6">
          {/* Search and filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="md:flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchSchemes}
                className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <label className="mr-2 text-gray-700">{t.filterBy}:</label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {filters.map(filter => (
                  <option key={filter.id} value={filter.id}>{filter.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Schemes list */}
          {filteredSchemes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="h-10 w-10 mx-auto mb-2 text-gray-400" />
              <p>{t.noSchemesFound}</p>
              <p className="text-sm mt-1">{t.tryDifferentSearch}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSchemes.map(scheme => (
                <div 
                  key={scheme.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md"
                >
                  <div 
                    className={`p-4 flex justify-between items-center cursor-pointer ${
                      expandedScheme === scheme.id ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => toggleSchemeDetails(scheme.id)}
                  >
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{scheme.title}</h3>
                      <p className="text-gray-600 text-sm">{scheme.ministry}</p>
                    </div>
                    <ArrowRight className={`h-5 w-5 text-blue-500 transition-transform ${
                      expandedScheme === scheme.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  
                  {expandedScheme === scheme.id && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">{t.description}:</h4>
                          <p className="text-gray-600">{scheme.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">{t.eligibility}:</h4>
                          <p className="text-gray-600">{scheme.eligibility}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">{t.benefits}:</h4>
                          <p className="text-gray-600">{scheme.benefits}</p>
                        </div>
                        
                        <div className="pt-3 flex justify-between items-center">
                          <div>
                            <span className="text-sm font-medium text-gray-700">{t.applicationDeadline}: </span>
                            <span className="text-sm text-gray-600">{scheme.deadline}</span>
                          </div>
                          
                          <a 
                            href="#" 
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-4 rounded transition duration-200"
                          >
                            {t.learnMore}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeRecommender;
import React, { useState, useRef } from 'react';
import { Upload, X, Camera, Trash2, ArrowRight, RefreshCw } from 'lucide-react';
import { translations } from '../utils/translations';

interface DiseaseIdentifierProps {
  currentLanguage: string;
}

interface DiseaseResult {
  diseaseName: string;
  confidence: number;
  description: string;
  treatment: string;
  prevention: string;
}

const DiseaseIdentifier: React.FC<DiseaseIdentifierProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage as keyof typeof translations];
  const [image, setImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert(t.onlyImages);
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setImage(e.target.result);
        setResult(null);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const clearImage = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const analyzeImage = () => {
    setIsAnalyzing(true);
    
    // Simulate API call to Python backend for image analysis
    setTimeout(() => {
      // Mock disease identification result
      const mockResults: DiseaseResult[] = [
        {
          diseaseName: t.lateBlight,
          confidence: 92.5,
          description: t.lateBlightDesc,
          treatment: t.lateBlightTreatment,
          prevention: t.lateBlightPrevention
        },
        {
          diseaseName: t.powderyMildew,
          confidence: 88.3,
          description: t.powderyMildewDesc,
          treatment: t.powderyMildewTreatment,
          prevention: t.powderyMildewPrevention
        },
        {
          diseaseName: t.rustDisease,
          confidence: 76.8,
          description: t.rustDiseaseDesc,
          treatment: t.rustDiseaseTreatment,
          prevention: t.rustDiseasePrevention
        }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return (
    <div className="flex-grow flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
        <div className="bg-amber-600 text-white py-3 px-5">
          <h2 className="text-xl font-semibold">{t.cropDiseaseIdentifier}</h2>
          <p className="text-sm text-amber-100">{t.uploadImageDesc}</p>
        </div>
        
        <div className="flex-grow p-4 md:p-6">
          {!image ? (
            <div 
              className={`border-2 border-dashed rounded-lg h-64 flex items-center justify-center cursor-pointer transition-colors ${
                dragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-center p-4">
                <Upload className="h-10 w-10 mx-auto text-amber-500 mb-3" />
                <p className="text-gray-800 font-medium mb-1">{t.dropImageHere}</p>
                <p className="text-gray-500 text-sm">{t.orClickToUpload}</p>
                <p className="text-gray-400 text-xs mt-2">{t.supportedFormats}</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 relative">
                <div className="rounded-lg overflow-hidden shadow-md bg-gray-100">
                  <img 
                    src={image} 
                    alt="Uploaded crop" 
                    className="max-w-full h-auto object-contain mx-auto"
                  />
                </div>
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-white text-red-500 p-1 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {!result && !isAnalyzing && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={analyzeImage}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-md shadow-md hover:shadow-lg transition flex items-center"
                    >
                      {t.analyzeImage} <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                )}
                
                {isAnalyzing && (
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-md p-4 text-center">
                    <RefreshCw className="h-6 w-6 text-amber-600 mx-auto mb-2 animate-spin" />
                    <p className="text-amber-800">{t.analyzingImage}</p>
                  </div>
                )}
              </div>
              
              {result && (
                <div className="md:w-1/2">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 md:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-amber-900">{result.diseaseName}</h3>
                      <span className="bg-amber-600 text-white text-sm py-1 px-3 rounded-full">
                        {result.confidence.toFixed(1)}% {t.confidence}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{t.description}</h4>
                        <p className="text-gray-700">{result.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{t.treatment}</h4>
                        <p className="text-gray-700">{result.treatment}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{t.prevention}</h4>
                        <p className="text-gray-700">{result.prevention}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-amber-200">
                      <p className="text-gray-500 text-sm italic">{t.disclaimerNote}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseIdentifier;
// This file simulates Python backend functions
// In a real implementation, these would be API calls to your Python backend

export async function analyzeImage(imageData: string) {
  // In a real implementation, this would call a Python backend API
  // that would use ML models to analyze the crop image
  
  // Mock response - simulates the AI model's disease detection
  return new Promise((resolve) => {
    setTimeout(() => {
      // Randomly select one of the predefined diseases
      const diseases = [
        {
          name: "Late Blight",
          confidence: 92.5,
          description: "A fungal disease affecting potatoes and tomatoes with dark lesions.",
          treatment: "Apply copper-based fungicides and remove infected plants.",
          prevention: "Use resistant varieties and proper crop spacing."
        },
        {
          name: "Powdery Mildew",
          confidence: 88.3,
          description: "White powdery spots on leaves, stems and sometimes fruit.",
          treatment: "Apply sulfur-based fungicides or neem oil.",
          prevention: "Ensure proper air circulation and avoid overhead watering."
        },
        {
          name: "Rust Disease",
          confidence: 76.8,
          description: "Orange, yellow or brown pustules on leaves and stems.",
          treatment: "Apply appropriate fungicides and remove infected parts.",
          prevention: "Plant resistant varieties and practice crop rotation."
        }
      ];
      
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      resolve(randomDisease);
    }, 2000); // Simulate API delay
  });
}

export async function queryChatbot(question: string, language: string) {
  // In a real implementation, this would send the question to a Python-based NLP model
  // that handles multilingual agricultural queries
  
  // Mock responses in English - would be translated based on language in real implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "To improve crop yield, ensure proper soil testing before planting, maintain consistent irrigation, and use appropriate fertilizers based on crop requirements. Would you like specific recommendations for your crop?",
        "For natural pest control, you can try companion planting with marigolds or neem, use neem oil spray, or introduce beneficial insects like ladybugs. What specific pest are you dealing with?",
        "The best time for sowing depends on your region's climate and the specific crop. Generally, the beginning of the monsoon season is ideal for many crops. What crop are you planning to sow?",
        "To address nutrient deficiency in your soil, consider adding organic compost, vermicompost, or appropriate fertilizers based on soil test results. Different crops have different nutrient requirements.",
        "Water management is crucial for farming. Consider drip irrigation for efficient water use, mulching to retain soil moisture, and collecting rainwater when possible. This helps especially during dry seasons."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      resolve(randomResponse);
    }, 1000); // Simulate API delay
  });
}

export async function getSchemeRecommendations(filters: any) {
  // In a real implementation, this would query a database of agricultural schemes
  // with filtering based on location, farm size, crop type, etc.
  
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      const schemes = [
        {
          id: 1,
          title: "PM-KISAN",
          description: "Pradhan Mantri Kisan Samman Nidhi provides income support to farmers.",
          eligibility: "All landholding farmers with cultivable land, subject to certain exclusions.",
          benefits: "₹6,000 per year in three equal installments.",
          deadline: "Ongoing",
          ministry: "Agriculture"
        },
        {
          id: 2,
          title: "Kisan Credit Card",
          description: "Provides farmers with affordable credit for cultivation expenses.",
          eligibility: "All farmers, tenant farmers, sharecroppers, and self-help groups.",
          benefits: "Access to credit up to ₹3 lakh at subsidized interest rates.",
          deadline: "Ongoing",
          ministry: "Finance"
        },
        {
          id: 3,
          title: "PM Fasal Bima Yojana",
          description: "Crop insurance scheme for financial support due to crop loss.",
          eligibility: "All farmers growing notified crops in notified areas.",
          benefits: "Comprehensive risk coverage from pre-sowing to post-harvest.",
          deadline: "2023-12-31",
          ministry: "Agriculture"
        },
        {
          id: 4,
          title: "PM Krishi Sinchayee Yojana",
          description: "For expanding cultivated area with assured irrigation.",
          eligibility: "Farmers in water-stressed areas, especially small and marginal farmers.",
          benefits: "Subsidies for micro-irrigation systems and water harvesting.",
          deadline: "Ongoing",
          ministry: "Water Resources"
        }
      ];
      
      // Apply filters if provided
      let filteredSchemes = schemes;
      if (filters) {
        if (filters.ministry && filters.ministry !== 'all') {
          filteredSchemes = filteredSchemes.filter(scheme => scheme.ministry === filters.ministry);
        }
        if (filters.search) {
          const searchTerm = filters.search.toLowerCase();
          filteredSchemes = filteredSchemes.filter(scheme => 
            scheme.title.toLowerCase().includes(searchTerm) || 
            scheme.description.toLowerCase().includes(searchTerm)
          );
        }
      }
      
      resolve(filteredSchemes);
    }, 800); // Simulate API delay
  });
}
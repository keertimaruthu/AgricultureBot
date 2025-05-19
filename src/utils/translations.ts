// First define English translations separately
const englishTranslations = {
  // Navigation
  home: "Home",
  chatbot: "AgriChat",
  diseaseIdentification: "Disease ID",
  schemeRecommendation: "Schemes",
  selectLanguage: "Select Language",
  
  // Hero section
  heroTitle: "AI-Powered Agricultural Assistant",
  heroSubtitle: "Empowering farmers with cutting-edge technology for better crop management, disease identification, and scheme awareness.",
  startChatting: "Start Chatting",
  identifyDisease: "Identify Disease",
  
  // Features section
  featuresTitle: "How AgriBot Can Help You",
  chatbotTitle: "Agricultural Chatbot",
  chatbotDescription: "Get instant answers to your farming questions in your preferred language. Our AI chatbot provides valuable insights on crop management, pest control, and more.",
  chatbotAction: "Chat Now",
  diseaseTitle: "Crop Disease Identification",
  diseaseDescription: "Upload a photo of your affected crop and get instant AI analysis of potential diseases, along with recommended treatments and prevention methods.",
  diseaseAction: "Identify Disease",
  schemeTitle: "Scheme Recommendations",
  schemeDescription: "Discover government schemes and subsidies that you may be eligible for. Stay updated with deadlines and application processes.",
  schemeAction: "Find Schemes",
  
  // Chatbot
  agriChatbot: "Agri Chatbot",
  askAnything: "Ask anything about farming, crops, or agricultural practices",
  chatbotWelcome: "Hello! I'm your AgriBot assistant. How can I help with your farming questions today?",
  typeYourQuery: "Type your query here...",
  voiceInput: "Voice Input",
  poweredBy: "Powered by",
  you: "You",
  thinking: "Thinking...",
  chatbotResponse1: "To improve crop yield, ensure proper soil testing before planting, maintain consistent irrigation, and use appropriate fertilizers based on crop requirements. Would you like specific recommendations for your crop?",
  chatbotResponse2: "For natural pest control, you can try companion planting with marigolds or neem, use neem oil spray, or introduce beneficial insects like ladybugs. What specific pest are you dealing with?",
  chatbotResponse3: "The best time for sowing depends on your region's climate and the specific crop. Generally, the beginning of the monsoon season is ideal for many crops. What crop are you planning to sow?",
  
  // Disease Identifier
  cropDiseaseIdentifier: "Crop Disease Identifier",
  uploadImageDesc: "Upload an image of your crop to identify diseases and get treatment recommendations",
  dropImageHere: "Drop your crop image here",
  orClickToUpload: "or click to upload",
  supportedFormats: "Supported formats: JPG, PNG, JPEG",
  onlyImages: "Please upload only image files.",
  analyzeImage: "Analyze Image",
  analyzingImage: "Analyzing your crop image...",
  description: "Description",
  treatment: "Treatment",
  prevention: "Prevention",
  confidence: "Confidence",
  disclaimerNote: "Note: This is an AI-based diagnosis and should be used as a guideline. For severe cases, please consult with an agricultural expert.",
  
  // Disease Descriptions
  lateBlight: "Late Blight",
  lateBlightDesc: "A fungal disease that affects potatoes and tomatoes, causing dark lesions on leaves and stems, which can spread rapidly in humid conditions.",
  lateBlightTreatment: "Apply fungicides containing copper or chlorothalonil. Remove and destroy infected plants to prevent spread. Ensure good air circulation around plants.",
  lateBlightPrevention: "Plant resistant varieties, practice crop rotation, ensure proper spacing between plants, and avoid overhead irrigation. Apply preventive fungicides during wet periods.",
  
  powderyMildew: "Powdery Mildew",
  powderyMildewDesc: "A fungal disease characterized by white powdery spots on leaf surfaces, stems, and sometimes fruit. It thrives in dry conditions with high humidity.",
  powderyMildewTreatment: "Apply sulfur-based fungicides or neem oil. A mixture of baking soda, mild soap, and water can be effective for mild cases. Remove severely infected plants.",
  powderyMildewPrevention: "Ensure proper spacing for air circulation, water at the base of plants, plant resistant varieties, and apply preventive treatments during susceptible seasons.",
  
  rustDisease: "Rust Disease",
  rustDiseaseDesc: "A fungal infection that appears as orange, yellow, or reddish-brown pustules on leaves and stems. It can weaken plants significantly by reducing photosynthesis.",
  rustDiseaseTreatment: "Apply fungicides containing tebuconazole or mancozeb. Remove and destroy infected plant parts. For severe cases, remove entire plants to prevent spread.",
  rustDiseasePrevention: "Plant resistant varieties, practice crop rotation, maintain proper plant spacing, and avoid excessive nitrogen fertilization which can increase susceptibility.",
  
  // Scheme Recommender
  schemeRecommender: "Agricultural Scheme Recommender",
  findRightScheme: "Find government schemes and subsidies you may qualify for",
  searchSchemes: "Search for schemes by name or description",
  filterBy: "Filter",
  allSchemes: "All Schemes",
  agriculture: "Agriculture",
  finance: "Finance",
  waterResources: "Water Resources",
  noSchemesFound: "No schemes found matching your criteria",
  tryDifferentSearch: "Try a different search term or clear filters",
  eligibility: "Eligibility",
  benefits: "Benefits",
  applicationDeadline: "Application Deadline",
  learnMore: "Learn More",
  ongoing: "Ongoing",
  
  // Scheme Descriptions
  pmKisan: "PM-KISAN",
  pmKisanDesc: "Pradhan Mantri Kisan Samman Nidhi is a central sector scheme to provide income support to all landholding farmers' families.",
  pmKisanEligibility: "All landholding farmers with cultivable land, subject to certain exclusions.",
  pmKisanBenefits: "₹6,000 per year in three equal installments, transferred directly to bank accounts.",
  
  kcc: "Kisan Credit Card",
  kccDesc: "Provides farmers with affordable credit for cultivation expenses and other needs.",
  kccEligibility: "All farmers, tenant farmers, sharecroppers, and self-help groups of farmers.",
  kccBenefits: "Access to credit up to ₹3 lakh at subsidized interest rates, with repayment flexibility aligned with harvest cycles.",
  
  pmfby: "PM Fasal Bima Yojana",
  pmfbyDesc: "A crop insurance scheme that provides financial support to farmers suffering crop loss or damage due to natural calamities.",
  pmfbyEligibility: "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
  pmfbyBenefits: "Comprehensive risk coverage from pre-sowing to post-harvest losses due to natural calamities, pests, and diseases.",
  
  pmksy: "Pradhan Mantri Krishi Sinchayee Yojana",
  pmksyDesc: "Aimed at expanding cultivated area with assured irrigation, improving water use efficiency, and introducing sustainable water conservation practices.",
  pmksyEligibility: "Farmers in water-stressed areas, especially small and marginal farmers.",
  pmksyBenefits: "Subsidies for micro-irrigation systems like drip and sprinkler irrigation, support for watershed development, and infrastructure for water harvesting.",
  
  // Footer
  footerTagline: "AgriBot combines cutting-edge AI technology with agricultural expertise to empower farmers across the world.",
  quickLinks: "Quick Links",
  resources: "Resources",
  blog: "Blog",
  farmingTips: "Farming Tips",
  weatherAlerts: "Weather Alerts",
  marketPrices: "Market Prices",
  contact: "Contact",
  allRightsReserved: "All Rights Reserved",
  madeWith: "Made with",
  forFarmers: "for farmers everywhere"
};

// Now export the translations object with English and Hindi languages only
export const translations = {
  english: englishTranslations,
  hindi: {
    // Navigation
    home: "होम",
    chatbot: "एग्री-चैट",
    diseaseIdentification: "रोग पहचान",
    schemeRecommendation: "योजनाएँ",
    selectLanguage: "भाषा चुनें",
    
    // Hero section
    heroTitle: "कृषि सहायक AI तकनीक",
    heroSubtitle: "किसानों को उन्नत तकनीक से सशक्त बनाना जिससे बेहतर फसल प्रबंधन, रोग पहचान और योजना जागरूकता हो सके।",
    startChatting: "चैट शुरू करें",
    identifyDisease: "रोग पहचानें",
    
    // Features section
    featuresTitle: "एग्रीबॉट आपकी मदद कैसे कर सकता है",
    chatbotTitle: "कृषि चैटबॉट",
    chatbotDescription: "अपनी पसंदीदा भाषा में अपने खेती के सवालों के तुरंत जवाब पाएं। हमारा AI चैटबॉट फसल प्रबंधन, कीट नियंत्रण और अधिक पर मूल्यवान जानकारी प्रदान करता है।",
    chatbotAction: "अभी चैट करें",
    diseaseTitle: "फसल रोग पहचान",
    diseaseDescription: "अपनी प्रभावित फसल की एक तस्वीर अपलोड करें और संभावित रोगों के त्वरित AI विश्लेषण के साथ अनुशंसित उपचार और रोकथाम के तरीके प्राप्त करें।",
    diseaseAction: "रोग पहचानें",
    schemeTitle: "योजना अनुशंसाएँ",
    schemeDescription: "सरकारी योजनाओं और सब्सिडी की खोज करें जिनके लिए आप पात्र हो सकते हैं। समय सीमा और आवेदन प्रक्रियाओं से अपडेट रहें।",
    schemeAction: "योजनाएँ खोजें",
    
    // Chatbot
    agriChatbot: "कृषि चैटबॉट",
    askAnything: "खेती, फसलों, या कृषि प्रथाओं के बारे में कुछ भी पूछें",
    chatbotWelcome: "नमस्ते! मैं आपका एग्रीबॉट सहायक हूँ। आज मैं आपके खेती के सवालों में कैसे मदद कर सकता हूँ?",
    typeYourQuery: "अपना प्रश्न यहां टाइप करें...",
    voiceInput: "आवाज इनपुट",
    poweredBy: "द्वारा संचालित",
    you: "आप",
    thinking: "सोच रहा हूँ...",
    chatbotResponse1: "फसल उपज में सुधार के लिए, बुवाई से पहले उचित मिट्टी परीक्षण सुनिश्चित करें, लगातार सिंचाई बनाए रखें, और फसल आवश्यकताओं के आधार पर उपयुक्त उर्वरकों का उपयोग करें। क्या आप अपनी फसल के लिए विशिष्ट सिफारिशें चाहते हैं?",
    chatbotResponse2: "प्राकृतिक कीट नियंत्रण के लिए, आप गेंदा या नीम के साथ साथी रोपण का प्रयास कर सकते हैं, नीम तेल स्प्रे का उपयोग कर सकते हैं, या लेडीबग जैसे लाभकारी कीड़ों को शामिल कर सकते हैं। आप किस विशिष्ट कीट से निपट रहे हैं?",
    chatbotResponse3: "बुवाई का सबसे अच्छा समय आपके क्षेत्र की जलवायु और विशिष्ट फसल पर निर्भर करता है। आम तौर पर, मानसून के मौसम की शुरुआत कई फसलों के लिए आदर्श है। आप कौन सी फसल बोने की योजना बना रहे हैं?",
    
    // Disease Identifier
    cropDiseaseIdentifier: "फसल रोग पहचानकर्ता",
    uploadImageDesc: "रोगों की पहचान करने और उपचार अनुशंसाएँ प्राप्त करने के लिए अपनी फसल की छवि अपलोड करें",
    dropImageHere: "अपनी फसल की छवि यहां डालें",
    orClickToUpload: "या अपलोड करने के लिए क्लिक करें",
    supportedFormats: "समर्थित प्रारूप: JPG, PNG, JPEG",
    onlyImages: "कृपया केवल छवि फ़ाइलें अपलोड करें।",
    analyzeImage: "छवि का विश्लेषण करें",
    analyzingImage: "आपकी फसल की छवि का विश्लेषण किया जा रहा है...",
    description: "विवरण",
    treatment: "उपचार",
    prevention: "रोकथाम",
    confidence: "विश्वास",
    disclaimerNote: "नोट: यह एक AI-आधारित निदान है और इसका उपयोग दिशानिर्देश के रूप में किया जाना चाहिए। गंभीर मामलों के लिए, कृपया कृषि विशेषज्ञ से परामर्श करें।",
    
    // Disease Descriptions
    lateBlight: "लेट ब्लाइट",
    lateBlightDesc: "एक कवक रोग जो आलू और टमाटर को प्रभावित करता है, जिससे पत्तियों और तनों पर गहरे घाव हो जाते हैं, जो नम परिस्थितियों में तेजी से फैल सकते हैं।",
    lateBlightTreatment: "तांबा या क्लोरोथालोनिल युक्त फफूंदनाशक लागू करें। प्रसार को रोकने के लिए संक्रमित पौधों को हटा दें और नष्ट कर दें। पौधों के आसपास अच्छे वायु संचरण को सुनिश्चित करें।",
    lateBlightPrevention: "प्रतिरोधी किस्मों का रोपण करें, फसल चक्र का अभ्यास करें, पौधों के बीच उचित दूरी सुनिश्चित करें, और ऊपरी सिंचाई से बचें। गीले मौसम में निवारक फफूंदनाशक लागू करें।",
    
    powderyMildew: "पाउडरी मिल्ड्यू",
    powderyMildewDesc: "एक कवक रोग जिसकी विशेषता पत्ती की सतह, तनों और कभी-कभी फल पर सफेद पाउडर के धब्बे होते हैं। यह उच्च आर्द्रता वाली सूखी परिस्थितियों में पनपता है।",
    powderyMildewTreatment: "सल्फर-आधारित फफूंदनाशक या नीम का तेल लगाएं। बेकिंग सोडा, हल्के साबुन और पानी का मिश्रण हल्के मामलों के लिए प्रभावी हो सकता है। गंभीर रूप से संक्रमित पौधों को हटा दें।",
    powderyMildewPrevention: "वायु संचरण के लिए उचित दूरी सुनिश्चित करें, पौधों के आधार पर पानी दें, प्रतिरोधी किस्मों का रोपण करें, और संवेदनशील मौसमों के दौरान निवारक उपचार लागू करें।",
    
    rustDisease: "रस्ट डिजीज",
    rustDiseaseDesc: "एक कवक संक्रमण जो पत्तियों और तनों पर नारंगी, पीले या लाल-भूरे रंग के फोड़े के रूप में दिखाई देता है। यह प्रकाश संश्लेषण को कम करके पौधों को काफी कमजोर कर सकता है।",
    rustDiseaseTreatment: "टेबुकोनाज़ोल या मैनकोज़ेब युक्त फफूंदनाशक लगाएं। संक्रमित पौधे के भागों को हटा दें और नष्ट कर दें। गंभीर मामलों के लिए, प्रसार को रोकने के लिए पूरे पौधों को हटा दें।",
    rustDiseasePrevention: "प्रतिरोधी किस्मों का रोपण करें, फसल चक्र का अभ्यास करें, उचित पौधे की दूरी बनाए रखें, और अत्यधिक नाइट्रोजन उर्वरण से बचें जो संवेदनशीलता बढ़ा सकता है।",
    
    // Scheme Recommender
    schemeRecommender: "कृषि योजना अनुशंसक",
    findRightScheme: "सरकारी योजनाएं और सब्सिडी खोजें जिनके लिए आप योग्य हो सकते हैं",
    searchSchemes: "नाम या विवरण द्वारा योजनाओं के लिए खोजें",
    filterBy: "फ़िल्टर",
    allSchemes: "सभी योजनाएँ",
    agriculture: "कृषि",
    finance: "वित्त",
    waterResources: "जल संसाधन",
    noSchemesFound: "आपके मानदंडों से मेल खाने वाली कोई योजना नहीं मिली",
    tryDifferentSearch: "एक अलग खोज शब्द आज़माएं या फ़िल्टर साफ़ करें",
    eligibility: "पात्रता",
    benefits: "लाभ",
    applicationDeadline: "आवेदन की समय सीमा",
    learnMore: "अधिक जानें",
    ongoing: "चल रही",
    
    // Scheme Descriptions
    pmKisan: "पीएम-किसान",
    pmKisanDesc: "प्रधानमंत्री किसान सम्मान निधि एक केंद्रीय क्षेत्र की योजना है जो सभी भूमिधारी किसान परिवारों को आय सहायता प्रदान करती है।",
    pmKisanEligibility: "सभी भूमिधारी किसान जिनके पास जोतने योग्य भूमि है, कुछ अपवर्जनों के अधीन।",
    pmKisanBenefits: "₹6,000 प्रति वर्ष तीन समान किस्तों में, सीधे बैंक खातों में स्थानांतरित।",
    
    kcc: "किसान क्रेडिट कार्ड",
    kccDesc: "खेती के खर्चों और अन्य जरूरतों के लिए किसानों को किफायती क्रेडिट प्रदान करता है।",
    kccEligibility: "सभी किसान, किरायेदार किसान, बटाईदार और किसानों के स्वयं सहायता समूह।",
    kccBenefits: "सब्सिडी वाली ब्याज दरों पर ₹3 लाख तक का क्रेडिट तक पहुंच, फसल चक्रों के साथ संरेखित चुकौती लचीलेपन के साथ।",
    
    pmfby: "पीएम फसल बीमा योजना",
    pmfbyDesc: "एक फसल बीमा योजना जो प्राकृतिक आपदाओं के कारण फसल के नुकसान या क्षति से पीड़ित किसानों को वित्तीय सहायता प्रदान करती है।",
    pmfbyEligibility: "सभी किसान जिनमें बटाईदार और किरायेदार किसान शामिल हैं जो अधिसूचित क्षेत्रों में अधिसूचित फसलें उगा रहे हैं।",
    pmfbyBenefits: "प्राकृतिक आपदाओं, कीटों और रोगों के कारण बुवाई से लेकर कटाई के बाद के नुकसान तक व्यापक जोखिम कवरेज।",
    
    pmksy: "प्रधानमंत्री कृषि सिंचाई योजना",
    pmksyDesc: "सुनिश्चित सिंचाई के साथ खेती क्षेत्र का विस्तार करने, पानी के उपयोग की दक्षता में सुधार करने और स्थायी जल संरक्षण प्रथाओं को पेश करने का लक्ष्य है।",
    pmksyEligibility: "जल-तनावग्रस्त क्षेत्रों में किसान, विशेष रूप से छोटे और सीमांत किसान।",
    pmksyBenefits: "ड्रिप और स्प्रिंकलर सिंचाई जैसे माइक्रो-सिंचाई प्रणालियों के लिए सब्सिडी, वाटरशेड विकास के लिए समर्थन, और जल संचयन के लिए बुनियादी ढांचा।",
    
    // Footer
    footerTagline: "एग्रीबॉट अत्याधुनिक AI तकनीक को कृषि विशेषज्ञता के साथ जोड़कर दुनिया भर के किसानों को सशक्त बनाता है।",
    quickLinks: "त्वरित लिंक",
    resources: "संसाधन",
    blog: "ब्लॉग",
    farmingTips: "खेती के टिप्स",
    weatherAlerts: "मौसम अलर्ट",
    marketPrices: "बाजार मूल्य",
    contact: "संपर्क",
    allRightsReserved: "सर्वाधिकार सुरक्षित",
    madeWith: "बनाया गया",
    forFarmers: "हर जगह किसानों के लिए"
  }
};
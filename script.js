/* =========================================================
   NIRBHAYSETU
   Multilingual Guided Cyber Safety System
   ========================================================= */

// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://dexoilvsxpyifssgixdw.supabase.co";

const SUPABASE_KEY = "sb_publishable_zwoCP2k3Hehy1MbxuaH8GA_lKnz9STw";

const SUPABASE_HEADERS = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};
// ===============================
// SHARED STATISTICS
// ===============================

async function recordEvent(eventType, sectionName = null) {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/site_stats`,
      {
        method: "POST",
        headers: {
          ...SUPABASE_HEADERS,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          event_type: eventType,
          section_name: sectionName
        })
      }
    );

    if (!response.ok) {
      console.error(
        "Statistics error:",
        await response.text()
      );
      return false;
    }

    return true;

  } catch (error) {
    console.error(
      "Could not connect to statistics server:",
      error
    );
    return false;
  }
}


async function loadSharedStatistics() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/get_nirbhaysetu_stats`,
      {
        method: "POST",
        headers: SUPABASE_HEADERS,
        body: "{}"
      }
    );

    if (!response.ok) {
      console.error(
        "Could not load statistics:",
        await response.text()
      );
      return null;
    }

    return await response.json();

  } catch (error) {
    console.error(
      "Statistics connection error:",
      error
    );
    return null;
  }
}

// ===============================
// YOUR EXISTING SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // your existing code continues here...


    /* =====================================================
       OFFICIAL LINKS
       ===================================================== */

    const LINKS = {
        cyberCrime: "https://www.cybercrime.gov.in/",
        android: "https://www.google.com/android/find/",
        iphone: "https://www.icloud.com/find",
        ceir: "https://ceir.sancharsaathi.gov.in/",
        sanchar: "https://sancharsaathi.gov.in/",
        helpline: "tel:1930",
        emergency: "tel:112"
    };


    /* =====================================================
       LANGUAGE
       ===================================================== */

    const languageSelect =
        document.getElementById("languageSelect");

    const savedLanguage =
        localStorage.getItem("nirbhay_language") || "en";

    let currentLanguage = savedLanguage;


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        en: {

            lastUpdateLabel: "Last Update:",
            visitorCountLabel: "Visitor Count:",

            brandSubtitle: "CYBER SAFETY GUIDE",

            navHome: "Home",
            navHelp: "Get Help",
            navReport: "Report",
            navStatistics: "Statistics",
            navAbout: "About",

            heroEyebrow:
                "CYBER SAFETY • SIMPLE • PRACTICAL",

            heroTitle:
                "Tell us what happened. NirbhaySetu tells you what to do next.",

            heroDescription:
                "A simple guide to help people understand common cybercrime situations, protect themselves and report incidents through official channels.",

            findSituation:
                "Find My Situation",

            helpNow:
                "I NEED HELP NOW",

            helplineText:
                "National Cyber Financial Fraud Helpline",

            visualLabel:
                "REPORT • PROTECT • RECOVER",

            situationsLabel:
                "FIND MY SITUATION",

            situationsTitle:
                "What happened?",

            situationsDescription:
                "Select the situation closest to your problem to see practical next steps.",

            viewGuide:
                "View Guide →",

            moneyTitle:
                "Money Lost",

            moneyShort:
                "Money transferred because of a cyber fraud.",

            otpTitle:
                "Fake Call / OTP",

            otpShort:
                "Fake calls, OTP requests or verification scams.",

            suspiciousTitle:
                "Suspicious Link",

            suspiciousShort:
                "Phishing links, fake websites or harmful files.",

            socialTitle:
                "Social Account Hacked",

            socialShort:
                "Your social media account may have been compromised.",

            harassmentTitle:
                "Online Harassment",

            harassmentShort:
                "Cyber harassment, stalking or threatening messages.",

            identityTitle:
                "Fake Profile",

            identityShort:
                "Someone is impersonating you online.",

            shoppingTitle:
                "Shopping Fraud",

            shoppingShort:
                "Online shopping, seller or refund scams.",

            jobTitle:
                "Fake Job Scam",

            jobShort:
                "Fake recruitment or work-from-home scams.",

            phoneTitle:
                "Lost / Stolen Mobile",

            phoneShort:
                "Steps to protect your phone, SIM and accounts.",

            statisticsLabel:
                "WEBSITE STATISTICS",

            statisticsTitle:
                "NirbhaySetu Activity",

            statisticsDescription:
                "Website usage and situation-guide views.",

            totalVisitors:
                "TOTAL VISITORS",

            recordedVisitors:
                "Recorded website visitors",

            totalViews:
                "TOTAL SECTION VIEWS",

            guideOpened:
                "Situation guides opened",

            mostViewed:
                "MOST VIEWED SECTION",

            viewSectionViews:
                "View Section Views",

            hideSectionViews:
                "Hide Section Views",

            sectionViews:
                "Section Views",

            views:
                "Views",

            reportingLabel:
                "OFFICIAL REPORTING",

            reportingTitle:
                "Report through official channels",

            reportingDescription:
                "Use official government channels for reporting and emergency assistance.",

            cyberCrimePortal:
                "Cyber Crime Portal",

            cyberCrimePortalDesc:
                "Report cybercrime online through the National Cyber Crime Reporting Portal.",

            openPortal:
                "Open Portal →",

            helplineDescription:
                "National helpline for cyber financial fraud.",

            callNow:
                "Call Now →",

            sancharDescription:
                "Services related to mobile connections and lost/stolen mobile devices.",

            openWebsite:
                "Open Website →",

            emergencyDescription:
                "Emergency assistance when immediate danger is involved.",

            callEmergency:
                "Call Emergency →",

            aboutLabel:
                "ABOUT US",

            aboutTitle:
                "Why NirbhaySetu?",

            aboutText:
                "NirbhaySetu is a student-developed cybersecurity awareness and cybercrime reporting guide created by our group as part of the college field project. The project aims to make cybercrime reporting easier by providing simple, practical guidance in English, Marathi and Hindi for common cybercrime situations. This project was made possible through the opportunity provided by H.V. Desai College to conduct field research, interact with the Cyber Cell and develop a practical solution for community awareness.",

            disclaimerTitle:
                "Important:",

            disclaimerText:
                "NirbhaySetu provides general awareness and guidance. For an actual incident, use official reporting channels and follow instructions from the concerned authorities.",

            helpModalTitle:
                "Need Immediate Help?",

            helpModalText:
                "If you have lost money due to cyber financial fraud, call 1930 immediately and report the incident through the official Cyber Crime Reporting Portal.",

            call1930:
                "Call 1930",

            reportOnline:
                "Report Online",

            footerText:
                "Cyber Safety & Reporting Guide"
        },


        /* =================================================
           MARATHI
           ================================================= */

        mr: {

            lastUpdateLabel:
                "शेवटचे अपडेट:",

            visitorCountLabel:
                "भेट देणाऱ्यांची संख्या:",

            brandSubtitle:
                "सायबर सुरक्षा मार्गदर्शक",

            navHome:
                "मुख्यपृष्ठ",

            navHelp:
                "मदत मिळवा",

            navReport:
                "तक्रार करा",

            navStatistics:
                "आकडेवारी",

            navAbout:
                "आमच्याबद्दल",

            heroEyebrow:
                "सायबर सुरक्षा • सोपे • उपयुक्त",

            heroTitle:
                "काय घडले ते सांगा. पुढे काय करायचे ते निर्भयसेतू सांगेल.",

            heroDescription:
                "सामान्य सायबर गुन्ह्यांच्या परिस्थिती समजून घेण्यासाठी, स्वतःचे संरक्षण करण्यासाठी आणि अधिकृत माध्यमातून तक्रार करण्यासाठी सोपे मार्गदर्शन.",

            findSituation:
                "माझी परिस्थिती शोधा",

            helpNow:
                "मला आत्ताच मदत हवी आहे",

            helplineText:
                "राष्ट्रीय सायबर आर्थिक फसवणूक हेल्पलाइन",

            visualLabel:
                "तक्रार करा • संरक्षण करा • पुनर्प्राप्त करा",

            situationsLabel:
                "माझी परिस्थिती शोधा",

            situationsTitle:
                "काय घडले?",

            situationsDescription:
                "तुमच्या समस्येशी संबंधित परिस्थिती निवडा आणि पुढील योग्य पावले जाणून घ्या.",

            viewGuide:
                "मार्गदर्शक पहा →",

            moneyTitle:
                "पैसे गमावले",

            moneyShort:
                "सायबर फसवणुकीमुळे पैसे हस्तांतरित झाले आहेत.",

            otpTitle:
                "बनावट कॉल / OTP",

            otpShort:
                "बनावट कॉल, OTP मागणी किंवा पडताळणीची फसवणूक.",

            suspiciousTitle:
                "संशयास्पद लिंक",

            suspiciousShort:
                "फिशिंग लिंक, बनावट वेबसाइट किंवा संशयास्पद फाइल.",

            socialTitle:
                "सोशल मीडिया खाते हॅक",

            socialShort:
                "तुमचे सोशल मीडिया खाते दुसऱ्याने ताब्यात घेतले असण्याची शक्यता.",

            harassmentTitle:
                "ऑनलाइन छळ",

            harassmentShort:
                "सायबर छळ, ऑनलाइन पाठलाग किंवा धमकीचे संदेश.",

            identityTitle:
                "बनावट प्रोफाइल",

            identityShort:
                "कोणीतरी तुमची ओळख वापरून ऑनलाइन बनावट प्रोफाइल तयार केले आहे.",

            shoppingTitle:
                "ऑनलाइन खरेदी फसवणूक",

            shoppingShort:
                "ऑनलाइन खरेदी, विक्रेता किंवा रिफंडशी संबंधित फसवणूक.",

            jobTitle:
                "बनावट नोकरी फसवणूक",

            jobShort:
                "बनावट नोकरी, भरती किंवा घरून काम करण्याच्या नावाखाली फसवणूक.",

            phoneTitle:
                "हरवलेला / चोरीला गेलेला मोबाईल",

            phoneShort:
                "मोबाईल, SIM आणि खात्यांचे संरक्षण करण्यासाठी आवश्यक पावले.",

            statisticsLabel:
                "वेबसाइटची आकडेवारी",

            statisticsTitle:
                "निर्भयसेतूचा वापर",

            statisticsDescription:
                "वेबसाइटचा वापर आणि परिस्थिती मार्गदर्शक किती वेळा उघडले गेले याची माहिती.",

            totalVisitors:
                "एकूण भेटी",

            recordedVisitors:
                "नोंद झालेल्या वेबसाइट भेटी",

            totalViews:
                "एकूण विभाग पाहणी",

            guideOpened:
                "परिस्थिती मार्गदर्शक उघडले",

            mostViewed:
                "सर्वाधिक पाहिलेला विभाग",

            viewSectionViews:
                "विभागांची पाहणी पहा",

            hideSectionViews:
                "विभागांची पाहणी लपवा",

            sectionViews:
                "विभागांची पाहणी",

            views:
                "पाहणी",

            reportingLabel:
                "अधिकृत तक्रार नोंदणी",

            reportingTitle:
                "अधिकृत माध्यमातून तक्रार करा",

            reportingDescription:
                "तक्रार आणि आपत्कालीन मदतीसाठी अधिकृत सरकारी माध्यमांचा वापर करा.",

            cyberCrimePortal:
                "सायबर क्राईम पोर्टल",

            cyberCrimePortalDesc:
                "राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलद्वारे ऑनलाइन सायबर गुन्ह्याची तक्रार करा.",

            openPortal:
                "पोर्टल उघडा →",

            helplineDescription:
                "सायबर आर्थिक फसवणुकीसाठी राष्ट्रीय हेल्पलाइन.",

            callNow:
                "आत्ताच कॉल करा →",

            sancharDescription:
                "मोबाईल कनेक्शन आणि हरवलेल्या किंवा चोरीला गेलेल्या मोबाईलसाठी सेवा.",

            openWebsite:
                "वेबसाइट उघडा →",

            emergencyDescription:
                "तात्काळ धोका असल्यास आपत्कालीन मदतीसाठी.",

            callEmergency:
                "आपत्कालीन क्रमांकावर कॉल करा →",

            aboutLabel:
                "आमच्याबद्दल",

            aboutTitle:
                "निर्भयसेतू का?",

            aboutText:
                "निर्भयसेतू हा आमच्या गटाने महाविद्यालयीन फील्ड प्रोजेक्टचा भाग म्हणून विकसित केलेला सायबर सुरक्षा जागरूकता आणि सायबर गुन्हे तक्रार मार्गदर्शक आहे. सामान्य सायबर गुन्ह्यांच्या परिस्थितीत इंग्रजी, मराठी आणि हिंदी भाषेत सोपे व व्यावहारिक मार्गदर्शन देऊन सायबर गुन्ह्याची तक्रार करणे अधिक सोपे करणे हा या प्रकल्पाचा उद्देश आहे. एच. व्ही. देसाई महाविद्यालयाने फील्ड रिसर्च करण्याची, सायबर सेलशी संवाद साधण्याची आणि समाजातील जागरूकतेसाठी व्यावहारिक उपाय विकसित करण्याची संधी दिल्यामुळे हा प्रकल्प शक्य झाला.",

            disclaimerTitle:
                "महत्त्वाचे:",

            disclaimerText:
                "निर्भयसेतू सामान्य जनजागृती आणि मार्गदर्शन देतो. प्रत्यक्ष घटना घडल्यास अधिकृत तक्रार माध्यमांचा वापर करा आणि संबंधित अधिकाऱ्यांच्या सूचनांचे पालन करा.",

            helpModalTitle:
                "तात्काळ मदत हवी आहे?",

            helpModalText:
                "सायबर आर्थिक फसवणुकीमुळे तुमचे पैसे गमावले असल्यास त्वरित 1930 वर कॉल करा आणि अधिकृत सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा.",

            call1930:
                "1930 वर कॉल करा",

            reportOnline:
                "ऑनलाइन तक्रार करा",

            footerText:
                "सायबर सुरक्षा आणि तक्रार मार्गदर्शक"
        },


        /* =================================================
           HINDI
           ================================================= */

        hi: {

            lastUpdateLabel:
                "अंतिम अपडेट:",

            visitorCountLabel:
                "आगंतुक संख्या:",

            brandSubtitle:
                "साइबर सुरक्षा मार्गदर्शिका",

            navHome:
                "होम",

            navHelp:
                "मदद प्राप्त करें",

            navReport:
                "रिपोर्ट करें",

            navStatistics:
                "आंकड़े",

            navAbout:
                "हमारे बारे में",

            heroEyebrow:
                "साइबर सुरक्षा • सरल • उपयोगी",

            heroTitle:
                "क्या हुआ हमें बताएं। आगे क्या करना है, निर्भयसेतु बताएगा।",

            heroDescription:
                "सामान्य साइबर अपराध की स्थिति को समझने, खुद को सुरक्षित रखने और आधिकारिक माध्यमों से शिकायत करने के लिए सरल मार्गदर्शन।",

            findSituation:
                "मेरी स्थिति खोजें",

            helpNow:
                "मुझे अभी मदद चाहिए",

            helplineText:
                "राष्ट्रीय साइबर वित्तीय धोखाधड़ी हेल्पलाइन",

            visualLabel:
                "रिपोर्ट करें • सुरक्षित रहें • समाधान पाएं",

            situationsLabel:
                "मेरी स्थिति खोजें",

            situationsTitle:
                "क्या हुआ?",

            situationsDescription:
                "अपनी समस्या से संबंधित स्थिति चुनें और आगे क्या करना है जानें।",

            viewGuide:
                "मार्गदर्शिका देखें →",

            moneyTitle:
                "पैसे खो गए",

            moneyShort:
                "साइबर धोखाधड़ी के कारण पैसे ट्रांसफर हो गए हैं।",

            otpTitle:
                "फर्जी कॉल / OTP",

            otpShort:
                "फर्जी कॉल, OTP मांगने या वेरिफिकेशन की धोखाधड़ी।",

            suspiciousTitle:
                "संदिग्ध लिंक",

            suspiciousShort:
                "फिशिंग लिंक, नकली वेबसाइट या संदिग्ध फाइल।",

            socialTitle:
                "सोशल मीडिया अकाउंट हैक",

            socialShort:
                "आपका सोशल मीडिया अकाउंट किसी और के नियंत्रण में हो सकता है।",

            harassmentTitle:
                "ऑनलाइन उत्पीड़न",

            harassmentShort:
                "साइबर उत्पीड़न, ऑनलाइन पीछा करना या धमकी वाले संदेश।",

            identityTitle:
                "फर्जी प्रोफाइल",

            identityShort:
                "कोई व्यक्ति आपकी पहचान का उपयोग करके फर्जी प्रोफाइल बना रहा है।",

            shoppingTitle:
                "ऑनलाइन शॉपिंग धोखाधड़ी",

            shoppingShort:
                "ऑनलाइन खरीदारी, विक्रेता या रिफंड से संबंधित धोखाधड़ी।",

            jobTitle:
                "फर्जी नौकरी धोखाधड़ी",

            jobShort:
                "फर्जी नौकरी, भर्ती या घर से काम के नाम पर धोखाधड़ी।",

            phoneTitle:
                "खोया / चोरी हुआ मोबाइल",

            phoneShort:
                "मोबाइल, SIM और खातों को सुरक्षित रखने के लिए आवश्यक कदम।",

            statisticsLabel:
                "वेबसाइट के आंकड़े",

            statisticsTitle:
                "निर्भयसेतु गतिविधि",

            statisticsDescription:
                "वेबसाइट उपयोग और स्थिति मार्गदर्शिकाओं को देखने की जानकारी।",

            totalVisitors:
                "कुल आगंतुक",

            recordedVisitors:
                "रिकॉर्ड की गई वेबसाइट विजिट",

            totalViews:
                "कुल सेक्शन व्यू",

            guideOpened:
                "स्थिति मार्गदर्शिकाएं खोली गईं",

            mostViewed:
                "सबसे अधिक देखा गया सेक्शन",

            viewSectionViews:
                "सेक्शन व्यू देखें",

            hideSectionViews:
                "सेक्शन व्यू छिपाएं",

            sectionViews:
                "सेक्शन व्यू",

            views:
                "व्यू",

            reportingLabel:
                "आधिकारिक रिपोर्टिंग",

            reportingTitle:
                "आधिकारिक माध्यम से रिपोर्ट करें",

            reportingDescription:
                "रिपोर्टिंग और आपातकालीन सहायता के लिए आधिकारिक सरकारी माध्यमों का उपयोग करें।",

            cyberCrimePortal:
                "साइबर क्राइम पोर्टल",

            cyberCrimePortalDesc:
                "राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल के माध्यम से ऑनलाइन साइबर अपराध की शिकायत करें।",

            openPortal:
                "पोर्टल खोलें →",

            helplineDescription:
                "साइबर वित्तीय धोखाधड़ी के लिए राष्ट्रीय हेल्पलाइन।",

            callNow:
                "अभी कॉल करें →",

            sancharDescription:
                "मोबाइल कनेक्शन और खोए या चोरी हुए मोबाइल से संबंधित सेवाएं।",

            openWebsite:
                "वेबसाइट खोलें →",

            emergencyDescription:
                "तत्काल खतरे की स्थिति में आपातकालीन सहायता।",

            callEmergency:
                "आपातकालीन नंबर पर कॉल करें →",

            aboutLabel:
                "हमारे बारे में",

            aboutTitle:
                "निर्भयसेतु क्यों?",

            aboutText:
                "निर्भयसेतु हमारे समूह द्वारा कॉलेज फील्ड प्रोजेक्ट के हिस्से के रूप में विकसित साइबर सुरक्षा जागरूकता और साइबर अपराध रिपोर्टिंग गाइड है। इस परियोजना का उद्देश्य सामान्य साइबर अपराध की स्थितियों के लिए अंग्रेजी, मराठी और हिंदी में सरल और व्यावहारिक जानकारी देकर साइबर अपराध की रिपोर्टिंग को आसान बनाना है। एच. वी. देसाई कॉलेज द्वारा फील्ड रिसर्च करने, साइबर सेल के साथ बातचीत करने और समुदाय में जागरूकता के लिए एक व्यावहारिक समाधान विकसित करने का अवसर प्रदान किया गया, जिससे यह परियोजना संभव हो सकी।",

            disclaimerTitle:
                "महत्वपूर्ण:",

            disclaimerText:
                "निर्भयसेतु सामान्य जागरूकता और मार्गदर्शन प्रदान करता है। वास्तविक घटना होने पर आधिकारिक रिपोर्टिंग माध्यमों का उपयोग करें और संबंधित अधिकारियों के निर्देशों का पालन करें।",

            helpModalTitle:
                "तुरंत मदद चाहिए?",

            helpModalText:
                "यदि साइबर वित्तीय धोखाधड़ी के कारण आपके पैसे खो गए हैं, तो तुरंत 1930 पर कॉल करें और आधिकारिक साइबर क्राइम रिपोर्टिंग पोर्टल के माध्यम से शिकायत करें।",

            call1930:
                "1930 पर कॉल करें",

            reportOnline:
                "ऑनलाइन रिपोर्ट करें",

            footerText:
                "साइबर सुरक्षा और रिपोर्टिंग गाइड"
        }

    };


    /* =====================================================
       DETAILED GUIDE TRANSLATIONS
       ===================================================== */

    const guideTranslations = {

        /* =================================================
           MONEY LOST
           ================================================= */

        money: {

            en: {
                title: "Money Lost / Financial Fraud",
                intro: "If money has been lost because of a cyber financial fraud, act quickly and preserve all transaction evidence.",

                sections: [
                    {
                        title: "1. Stop further loss",
                        text: "Do not send any more money. Do not share OTP, UPI PIN, CVV, password, banking credentials or verification codes. If someone has remote access to your device, disconnect the remote session and secure your accounts."
                    },
                    {
                        title: "2. Contact your bank or payment provider",
                        text: "Report the unauthorized or fraudulent transaction immediately. Ask the bank or payment provider about blocking, dispute or recovery procedures. Keep the transaction reference number."
                    },
                    {
                        title: "3. Call 1930",
                        text: "Call the national cyber financial fraud helpline 1930 as soon as possible. Keep your transaction details ready while reporting."
                    },
                    {
                        title: "4. Report online",
                        text: "File a complaint through the National Cyber Crime Reporting Portal. Save the acknowledgement or complaint details after submission."
                    },
                    {
                        title: "5. Keep evidence",
                        list: [
                            "Transaction ID / UTR",
                            "Bank, wallet or payment provider details",
                            "Screenshots of transactions",
                            "UPI ID or phone number involved",
                            "Messages, emails and chats",
                            "Website, social media or profile URL"
                        ]
                    }
                ]
            },

            mr: {
                title: "पैसे गमावले / आर्थिक फसवणूक",
                intro: "सायबर आर्थिक फसवणुकीमुळे पैसे गमावले असल्यास शक्य तितक्या लवकर कृती करा आणि व्यवहाराशी संबंधित सर्व पुरावे जतन करा.",

                sections: [
                    {
                        title: "१. पुढील नुकसान थांबवा",
                        text: "आता आणखी पैसे पाठवू नका. OTP, UPI PIN, CVV, पासवर्ड, बँकिंग माहिती किंवा पडताळणी कोड कोणालाही देऊ नका. तुमच्या डिव्हाइसवर कोणाला रिमोट अॅक्सेस असल्यास तो अॅक्सेस बंद करा आणि तुमची खाती सुरक्षित करा."
                    },
                    {
                        title: "२. बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा",
                        text: "अनधिकृत किंवा फसव्या व्यवहाराची त्वरित माहिती द्या. व्यवहार ब्लॉक करणे, तक्रार करणे किंवा डिस्प्यूट प्रक्रियेबद्दल बँक किंवा पेमेंट सेवा प्रदात्याकडून माहिती घ्या. व्यवहाराचा संदर्भ क्रमांक जतन करा."
                    },
                    {
                        title: "३. 1930 वर कॉल करा",
                        text: "राष्ट्रीय सायबर आर्थिक फसवणूक हेल्पलाइन 1930 वर शक्य तितक्या लवकर कॉल करा. तक्रार करताना व्यवहाराची माहिती जवळ ठेवा."
                    },
                    {
                        title: "४. ऑनलाइन तक्रार करा",
                        text: "राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार नोंदवा. तक्रार केल्यानंतर मिळणारी पावती किंवा तक्रार क्रमांक जतन करा."
                    },
                    {
                        title: "५. पुरावे जतन करा",
                        list: [
                            "व्यवहार क्रमांक / UTR",
                            "बँक, वॉलेट किंवा पेमेंट सेवा प्रदात्याची माहिती",
                            "व्यवहाराचे स्क्रीनशॉट",
                            "संबंधित UPI ID किंवा फोन नंबर",
                            "मेसेज, ईमेल आणि चॅट",
                            "वेबसाइट, सोशल मीडिया किंवा प्रोफाइलची लिंक"
                        ]
                    }
                ]
            },

            hi: {
                title: "पैसे खो गए / वित्तीय धोखाधड़ी",
                intro: "यदि साइबर वित्तीय धोखाधड़ी के कारण पैसे खो गए हैं, तो तुरंत कार्रवाई करें और सभी लेनदेन से संबंधित सबूत सुरक्षित रखें।",

                sections: [
                    {
                        title: "1. आगे का नुकसान रोकें",
                        text: "और पैसे न भेजें। OTP, UPI PIN, CVV, पासवर्ड, बैंकिंग जानकारी या वेरिफिकेशन कोड किसी को न दें। यदि किसी व्यक्ति को आपके डिवाइस का रिमोट एक्सेस मिला है, तो उसे बंद करें और अपने खातों को सुरक्षित करें।"
                    },
                    {
                        title: "2. बैंक या पेमेंट सेवा से संपर्क करें",
                        text: "अनधिकृत या धोखाधड़ी वाले लेनदेन की तुरंत जानकारी दें। बैंक या पेमेंट सेवा से ब्लॉकिंग, विवाद या रिकवरी प्रक्रिया के बारे में पूछें। लेनदेन का संदर्भ नंबर सुरक्षित रखें।"
                    },
                    {
                        title: "3. 1930 पर कॉल करें",
                        text: "राष्ट्रीय साइबर वित्तीय धोखाधड़ी हेल्पलाइन 1930 पर जल्द से जल्द कॉल करें। शिकायत करते समय लेनदेन की जानकारी तैयार रखें।"
                    },
                    {
                        title: "4. ऑनलाइन रिपोर्ट करें",
                        text: "राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत दर्ज करें। शिकायत के बाद मिलने वाली पावती या शिकायत विवरण सुरक्षित रखें।"
                    },
                    {
                        title: "5. सबूत सुरक्षित रखें",
                        list: [
                            "लेनदेन ID / UTR",
                            "बैंक, वॉलेट या पेमेंट सेवा की जानकारी",
                            "लेनदेन के स्क्रीनशॉट",
                            "संबंधित UPI ID या फोन नंबर",
                            "मैसेज, ईमेल और चैट",
                            "वेबसाइट, सोशल मीडिया या प्रोफाइल URL"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           OTP
           ================================================= */

        otp: {

            en: {
                title: "Fake Call / OTP Scam",
                intro: "If someone calls or messages pretending to be a bank, company, government service or another trusted person, do not share security information.",

                sections: [
                    {
                        title: "1. End the conversation",
                        text: "Do not share OTP, verification codes, UPI PIN, CVV, password or banking credentials. Do not install unknown apps or allow remote access because of the caller."
                    },
                    {
                        title: "2. Check your accounts",
                        text: "Check your bank and UPI accounts. Also check whether passwords, email addresses, recovery information or social media settings were changed. Change credentials immediately if you shared them."
                    },
                    {
                        title: "3. If money was lost",
                        text: "Contact your bank or payment provider immediately. Call 1930 and report the incident through the National Cyber Crime Reporting Portal."
                    },
                    {
                        title: "4. Preserve evidence",
                        list: [
                            "Caller phone number",
                            "SMS or WhatsApp messages",
                            "Screenshots",
                            "Transaction details",
                            "Emails and suspicious links"
                        ]
                    }
                ]
            },

            mr: {
                title: "बनावट कॉल / OTP फसवणूक",
                intro: "बँक, कंपनी, सरकारी सेवा किंवा ओळखीची व्यक्ती असल्याचे भासवून कॉल किंवा मेसेज करणाऱ्या व्यक्तीवर विश्वास ठेवण्यापूर्वी काळजी घ्या.",

                sections: [
                    {
                        title: "१. संभाषण थांबवा",
                        text: "OTP, पडताळणी कोड, UPI PIN, CVV, पासवर्ड किंवा बँकिंग माहिती देऊ नका. कॉल करणाऱ्या व्यक्तीच्या सांगण्यावरून अनोळखी अॅप इन्स्टॉल करू नका किंवा रिमोट अॅक्सेस देऊ नका."
                    },
                    {
                        title: "२. तुमची खाती तपासा",
                        text: "बँक आणि UPI खाते तपासा. पासवर्ड, ईमेल, रिकव्हरी माहिती किंवा सोशल मीडिया सेटिंगमध्ये बदल झाला आहे का ते पहा. माहिती शेअर झाली असल्यास संबंधित पासवर्ड त्वरित बदला."
                    },
                    {
                        title: "३. पैसे गमावले असल्यास",
                        text: "ताबडतोब बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा. 1930 वर कॉल करा आणि राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा."
                    },
                    {
                        title: "४. पुरावे जतन करा",
                        list: [
                            "कॉल करणाऱ्याचा फोन नंबर",
                            "SMS किंवा WhatsApp मेसेज",
                            "स्क्रीनशॉट",
                            "व्यवहाराची माहिती",
                            "ईमेल आणि संशयास्पद लिंक"
                        ]
                    }
                ]
            },

            hi: {
                title: "फर्जी कॉल / OTP धोखाधड़ी",
                intro: "यदि कोई व्यक्ति बैंक, कंपनी, सरकारी सेवा या किसी भरोसेमंद व्यक्ति के नाम पर कॉल या मैसेज करता है, तो सुरक्षा से जुड़ी जानकारी साझा न करें।",

                sections: [
                    {
                        title: "1. बातचीत समाप्त करें",
                        text: "OTP, वेरिफिकेशन कोड, UPI PIN, CVV, पासवर्ड या बैंकिंग जानकारी साझा न करें। कॉल करने वाले के कहने पर कोई अनजान ऐप इंस्टॉल न करें और रिमोट एक्सेस न दें।"
                    },
                    {
                        title: "2. अपने खातों की जांच करें",
                        text: "बैंक और UPI खाते जांचें। पासवर्ड, ईमेल, रिकवरी जानकारी या सोशल मीडिया सेटिंग में बदलाव हुआ है या नहीं देखें। यदि जानकारी साझा हुई है तो संबंधित पासवर्ड तुरंत बदलें।"
                    },
                    {
                        title: "3. पैसे खो गए हों तो",
                        text: "तुरंत बैंक या पेमेंट सेवा से संपर्क करें। 1930 पर कॉल करें और राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत करें।"
                    },
                    {
                        title: "4. सबूत सुरक्षित रखें",
                        list: [
                            "कॉलर का फोन नंबर",
                            "SMS या WhatsApp संदेश",
                            "स्क्रीनशॉट",
                            "लेनदेन की जानकारी",
                            "ईमेल और संदिग्ध लिंक"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           SUSPICIOUS LINK
           ================================================= */

        suspicious: {

            en: {
                title: "Suspicious Link / Phishing",
                intro: "Do not trust unexpected links, fake login pages or messages asking you to urgently verify an account.",

                sections: [
                    {
                        title: "1. If you have NOT clicked",
                        text: "Do not open or download anything from the message. Delete or report the message if appropriate."
                    },
                    {
                        title: "2. If you clicked the link",
                        text: "Close the page. Do not enter passwords, OTPs, card details or other information. Do not download unknown applications or files."
                    },
                    {
                        title: "3. If you entered a password",
                        text: "Change the password immediately. Use a strong unique password, enable two-factor authentication and sign out suspicious sessions or devices."
                    },
                    {
                        title: "4. If banking information was exposed",
                        text: "Contact your bank or payment provider, monitor transactions and call 1930 if money was lost."
                    },
                    {
                        title: "5. Preserve evidence",
                        list: [
                            "Suspicious URL",
                            "Screenshot of the message",
                            "Sender details",
                            "Email address or phone number",
                            "Downloaded file name, if any"
                        ]
                    }
                ]
            },

            mr: {
                title: "संशयास्पद लिंक / फिशिंग",
                intro: "अचानक आलेल्या लिंक, बनावट लॉगिन पेज किंवा खाते तातडीने पडताळण्यास सांगणाऱ्या मेसेजवर विश्वास ठेवू नका.",

                sections: [
                    {
                        title: "१. लिंक उघडली नसेल तर",
                        text: "मेसेजमधील लिंक उघडू नका किंवा काहीही डाउनलोड करू नका. आवश्यक असल्यास मेसेज डिलीट किंवा रिपोर्ट करा."
                    },
                    {
                        title: "२. लिंक उघडली असल्यास",
                        text: "पेज बंद करा. पासवर्ड, OTP, कार्डची माहिती किंवा इतर वैयक्तिक माहिती भरू नका. अनोळखी अॅप किंवा फाइल डाउनलोड करू नका."
                    },
                    {
                        title: "३. पासवर्ड टाकला असल्यास",
                        text: "पासवर्ड त्वरित बदला. मजबूत आणि वेगळा पासवर्ड वापरा, दोन-स्तरीय सुरक्षा सुरू करा आणि संशयास्पद डिव्हाइस किंवा सेशनमधून साइन आउट करा."
                    },
                    {
                        title: "४. बँकिंग माहिती उघड झाली असल्यास",
                        text: "बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा, व्यवहार तपासा आणि पैसे गमावले असल्यास 1930 वर कॉल करा."
                    },
                    {
                        title: "५. पुरावे जतन करा",
                        list: [
                            "संशयास्पद URL",
                            "मेसेजचा स्क्रीनशॉट",
                            "पाठवणाऱ्याची माहिती",
                            "ईमेल किंवा फोन नंबर",
                            "डाउनलोड झालेल्या फाइलचे नाव"
                        ]
                    }
                ]
            },

            hi: {
                title: "संदिग्ध लिंक / फिशिंग",
                intro: "अचानक आने वाली लिंक, नकली लॉगिन पेज या तुरंत अकाउंट वेरिफाई करने वाले संदेशों पर भरोसा न करें।",

                sections: [
                    {
                        title: "1. यदि लिंक पर क्लिक नहीं किया",
                        text: "लिंक न खोलें और कुछ भी डाउनलोड न करें। आवश्यकता होने पर संदेश को डिलीट या रिपोर्ट करें।"
                    },
                    {
                        title: "2. यदि लिंक पर क्लिक किया",
                        text: "पेज बंद करें। पासवर्ड, OTP, कार्ड की जानकारी या अन्य जानकारी न भरें। अनजान ऐप या फाइल डाउनलोड न करें।"
                    },
                    {
                        title: "3. यदि पासवर्ड दर्ज किया",
                        text: "पासवर्ड तुरंत बदलें। मजबूत और अलग पासवर्ड रखें, टू-फैक्टर ऑथेंटिकेशन चालू करें और संदिग्ध डिवाइस या सेशन से साइन आउट करें।"
                    },
                    {
                        title: "4. बैंकिंग जानकारी सामने आ गई हो",
                        text: "बैंक या पेमेंट सेवा से संपर्क करें, लेनदेन पर नजर रखें और पैसे खो गए हों तो 1930 पर कॉल करें।"
                    },
                    {
                        title: "5. सबूत सुरक्षित रखें",
                        list: [
                            "संदिग्ध URL",
                            "संदेश का स्क्रीनशॉट",
                            "भेजने वाले की जानकारी",
                            "ईमेल या फोन नंबर",
                            "डाउनलोड की गई फाइल का नाम"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           SOCIAL ACCOUNT HACKED
           ================================================= */

        social: {

            en: {
                title: "Social Media Account Hacked",
                intro: "If your social media account has been compromised, focus first on recovery and preventing further misuse.",

                sections: [
                    {
                        title: "1. Use official account recovery",
                        text: "Use the official recovery option provided by the social media platform. Do not pay unofficial people who promise account recovery."
                    },
                    {
                        title: "2. Change your password",
                        text: "Set a strong unique password and do not reuse the same password on other accounts."
                    },
                    {
                        title: "3. Secure the account",
                        text: "Enable two-factor authentication, review active sessions, remove unknown devices, check recovery email and phone number and remove suspicious third-party applications."
                    },
                    {
                        title: "4. Protect your contacts",
                        text: "Warn friends and family that the account may be compromised. Tell them not to send money or trust suspicious messages from the account."
                    },
                    {
                        title: "5. Preserve evidence",
                        list: [
                            "Profile URL",
                            "Screenshots",
                            "Suspicious messages",
                            "Login alerts",
                            "Recovery emails"
                        ]
                    }
                ]
            },

            mr: {
                title: "सोशल मीडिया खाते हॅक झाले",
                intro: "तुमचे सोशल मीडिया खाते हॅक झाल्यास प्रथम खाते परत मिळवण्यावर आणि त्याचा गैरवापर थांबवण्यावर लक्ष द्या.",

                sections: [
                    {
                        title: "१. अधिकृत खाते रिकव्हरी वापरा",
                        text: "सोशल मीडिया प्लॅटफॉर्मने दिलेला अधिकृत रिकव्हरी पर्याय वापरा. खाते परत मिळवून देण्याचे आश्वासन देणाऱ्या अनधिकृत व्यक्तींना पैसे देऊ नका."
                    },
                    {
                        title: "२. पासवर्ड बदला",
                        text: "मजबूत आणि वेगळा पासवर्ड तयार करा. तोच पासवर्ड इतर खात्यांसाठी वापरू नका."
                    },
                    {
                        title: "३. खाते सुरक्षित करा",
                        text: "दोन-स्तरीय सुरक्षा सुरू करा, सक्रिय सेशन तपासा, अनोळखी डिव्हाइस काढा, रिकव्हरी ईमेल आणि फोन नंबर तपासा आणि संशयास्पद थर्ड-पार्टी अॅप्स काढा."
                    },
                    {
                        title: "४. संपर्कातील लोकांचे संरक्षण करा",
                        text: "मित्र आणि कुटुंबीयांना खाते हॅक झाल्याची माहिती द्या. त्या खात्यातून आलेल्या संशयास्पद मेसेजवर विश्वास ठेवू नका किंवा पैसे पाठवू नका असे सांगा."
                    },
                    {
                        title: "५. पुरावे जतन करा",
                        list: [
                            "प्रोफाइलची लिंक",
                            "स्क्रीनशॉट",
                            "संशयास्पद मेसेज",
                            "लॉगिन अलर्ट",
                            "रिकव्हरी ईमेल"
                        ]
                    }
                ]
            },

            hi: {
                title: "सोशल मीडिया अकाउंट हैक",
                intro: "यदि आपका सोशल मीडिया अकाउंट हैक हो गया है, तो पहले अकाउंट रिकवर करने और आगे के गलत इस्तेमाल को रोकने पर ध्यान दें।",

                sections: [
                    {
                        title: "1. आधिकारिक अकाउंट रिकवरी का उपयोग करें",
                        text: "सोशल मीडिया प्लेटफॉर्म द्वारा दिए गए आधिकारिक रिकवरी विकल्प का उपयोग करें। अकाउंट रिकवरी का वादा करने वाले अनजान लोगों को पैसे न दें।"
                    },
                    {
                        title: "2. पासवर्ड बदलें",
                        text: "मजबूत और अलग पासवर्ड रखें। उसी पासवर्ड को दूसरे खातों में इस्तेमाल न करें।"
                    },
                    {
                        title: "3. अकाउंट सुरक्षित करें",
                        text: "टू-फैक्टर ऑथेंटिकेशन चालू करें, एक्टिव सेशन जांचें, अनजान डिवाइस हटाएं, रिकवरी ईमेल और फोन नंबर जांचें और संदिग्ध थर्ड-पार्टी ऐप हटाएं।"
                    },
                    {
                        title: "4. अपने संपर्कों को सुरक्षित करें",
                        text: "दोस्तों और परिवार को बताएं कि अकाउंट हैक हो सकता है। उन्हें उस अकाउंट से आने वाले संदिग्ध संदेशों पर भरोसा न करने और पैसे न भेजने के लिए कहें।"
                    },
                    {
                        title: "5. सबूत सुरक्षित रखें",
                        list: [
                            "प्रोफाइल URL",
                            "स्क्रीनशॉट",
                            "संदिग्ध संदेश",
                            "लॉगिन अलर्ट",
                            "रिकवरी ईमेल"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           HARASSMENT
           ================================================= */

        harassment: {

            en: {
                title: "Cyber Harassment / Stalking",
                intro: "If you are being harassed or threatened online, preserve evidence and use the available reporting and safety options.",

                sections: [
                    {
                        title: "1. Preserve evidence",
                        text: "Take screenshots and save usernames, profile links, messages, emails and dates. Do not delete important evidence before saving it."
                    },
                    {
                        title: "2. Protect yourself",
                        text: "Block or restrict the person where appropriate. Review privacy settings and limit unwanted contact, tagging or mentions."
                    },
                    {
                        title: "3. Report the account",
                        text: "Use the platform's official reporting option and save the report confirmation if available."
                    },
                    {
                        title: "4. Serious or immediate threat",
                        text: "If there is an immediate danger or physical threat, contact emergency services. For cyber-related incidents, use the appropriate police or cybercrime reporting channel."
                    },
                    {
                        title: "5. Keep evidence together",
                        list: [
                            "Screenshots",
                            "Usernames",
                            "Profile URLs",
                            "Messages and emails",
                            "Dates and times",
                            "Report confirmations"
                        ]
                    }
                ]
            },

            mr: {
                title: "सायबर छळ / ऑनलाइन पाठलाग",
                intro: "ऑनलाइन छळ किंवा धमकीचा सामना करत असल्यास पुरावे जतन करा आणि उपलब्ध सुरक्षा व तक्रार पर्यायांचा वापर करा.",

                sections: [
                    {
                        title: "१. पुरावे जतन करा",
                        text: "स्क्रीनशॉट घ्या आणि युजरनेम, प्रोफाइल लिंक, मेसेज, ईमेल आणि तारीख जतन करा. महत्त्वाचे पुरावे जतन करण्यापूर्वी ते डिलीट करू नका."
                    },
                    {
                        title: "२. स्वतःचे संरक्षण करा",
                        text: "योग्य असल्यास संबंधित व्यक्तीला ब्लॉक किंवा रिस्ट्रिक्ट करा. प्रायव्हसी सेटिंग तपासा आणि अनोळखी संपर्क, टॅग किंवा मेंशन मर्यादित करा."
                    },
                    {
                        title: "३. खाते रिपोर्ट करा",
                        text: "प्लॅटफॉर्मचा अधिकृत रिपोर्ट पर्याय वापरा आणि उपलब्ध असल्यास रिपोर्टची पुष्टी जतन करा."
                    },
                    {
                        title: "४. गंभीर किंवा तात्काळ धोका",
                        text: "तात्काळ धोका किंवा शारीरिक धमकी असल्यास आपत्कालीन सेवांशी संपर्क करा. सायबर घटनेसाठी योग्य पोलीस किंवा सायबर क्राईम तक्रार माध्यमाचा वापर करा."
                    },
                    {
                        title: "५. सर्व पुरावे एकत्र ठेवा",
                        list: [
                            "स्क्रीनशॉट",
                            "युजरनेम",
                            "प्रोफाइल लिंक",
                            "मेसेज आणि ईमेल",
                            "तारीख आणि वेळ",
                            "रिपोर्टची पुष्टी"
                        ]
                    }
                ]
            },

            hi: {
                title: "साइबर उत्पीड़न / ऑनलाइन पीछा",
                intro: "यदि आपको ऑनलाइन परेशान या धमकी दी जा रही है, तो सबूत सुरक्षित रखें और उपलब्ध सुरक्षा एवं रिपोर्टिंग विकल्पों का उपयोग करें।",

                sections: [
                    {
                        title: "1. सबूत सुरक्षित रखें",
                        text: "स्क्रीनशॉट लें और यूजरनेम, प्रोफाइल लिंक, संदेश, ईमेल और तारीख सुरक्षित रखें। जरूरी सबूत सुरक्षित करने से पहले उन्हें डिलीट न करें।"
                    },
                    {
                        title: "2. खुद को सुरक्षित रखें",
                        text: "जरूरत के अनुसार व्यक्ति को ब्लॉक या रिस्ट्रिक्ट करें। प्राइवेसी सेटिंग जांचें और अनचाहे संपर्क, टैग या मेंशन को सीमित करें।"
                    },
                    {
                        title: "3. अकाउंट रिपोर्ट करें",
                        text: "प्लेटफॉर्म के आधिकारिक रिपोर्ट विकल्प का उपयोग करें और उपलब्ध होने पर रिपोर्ट की पुष्टि सुरक्षित रखें।"
                    },
                    {
                        title: "4. गंभीर या तत्काल खतरा",
                        text: "यदि तत्काल खतरा या शारीरिक धमकी हो तो आपातकालीन सेवाओं से संपर्क करें। साइबर घटना के लिए उचित पुलिस या साइबर क्राइम रिपोर्टिंग माध्यम का उपयोग करें।"
                    },
                    {
                        title: "5. सभी सबूत एक साथ रखें",
                        list: [
                            "स्क्रीनशॉट",
                            "यूजरनेम",
                            "प्रोफाइल URL",
                            "संदेश और ईमेल",
                            "तारीख और समय",
                            "रिपोर्ट की पुष्टि"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           FAKE PROFILE
           ================================================= */

        identity: {

            en: {
                title: "Fake Profile / Impersonation",
                intro: "If someone is pretending to be you online, document the fake profile and report it through the platform and appropriate official channels.",

                sections: [
                    {
                        title: "1. Capture the profile",
                        text: "Take screenshots of the fake profile and save the profile URL, username and visible details."
                    },
                    {
                        title: "2. Report the profile",
                        text: "Use the platform's official impersonation or fake-account reporting option. Inform your contacts if the fake profile may contact them."
                    },
                    {
                        title: "3. Protect your real account",
                        text: "If your own account may also be compromised, change the password, enable two-factor authentication, review active sessions and check recovery information."
                    },
                    {
                        title: "4. Preserve evidence",
                        list: [
                            "Fake profile URL",
                            "Username",
                            "Screenshots",
                            "Messages sent by the fake account",
                            "Details of affected contacts"
                        ]
                    },
                    {
                        title: "5. Report cybercrime when appropriate",
                        text: "Where appropriate, report the incident through the National Cyber Crime Reporting Portal and keep the complaint details."
                    }
                ]
            },

            mr: {
                title: "बनावट प्रोफाइल / दुसऱ्याची ओळख वापरणे",
                intro: "कोणी तुमच्या नावाने ऑनलाइन बनावट प्रोफाइल तयार केले असल्यास त्या प्रोफाइलचे पुरावे जतन करा आणि प्लॅटफॉर्म तसेच योग्य अधिकृत माध्यमातून तक्रार करा.",

                sections: [
                    {
                        title: "१. प्रोफाइलचे पुरावे घ्या",
                        text: "बनावट प्रोफाइलचे स्क्रीनशॉट घ्या आणि प्रोफाइल लिंक, युजरनेम व दिसणारी माहिती जतन करा."
                    },
                    {
                        title: "२. प्रोफाइल रिपोर्ट करा",
                        text: "प्लॅटफॉर्मचा अधिकृत impersonation किंवा fake account रिपोर्ट पर्याय वापरा. बनावट प्रोफाइल तुमच्या संपर्कातील लोकांना मेसेज करू शकत असल्यास त्यांना माहिती द्या."
                    },
                    {
                        title: "३. तुमचे खरे खाते सुरक्षित करा",
                        text: "तुमचे स्वतःचे खातेही धोक्यात असल्यास पासवर्ड बदला, दोन-स्तरीय सुरक्षा सुरू करा, सक्रिय सेशन तपासा आणि रिकव्हरी माहिती तपासा."
                    },
                    {
                        title: "४. पुरावे जतन करा",
                        list: [
                            "बनावट प्रोफाइल लिंक",
                            "युजरनेम",
                            "स्क्रीनशॉट",
                            "बनावट खात्यातून आलेले मेसेज",
                            "प्रभावित संपर्कांची माहिती"
                        ]
                    },
                    {
                        title: "५. आवश्यक असल्यास सायबर गुन्ह्याची तक्रार करा",
                        text: "योग्य परिस्थितीत राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा आणि तक्रारीची माहिती जतन करा."
                    }
                ]
            },

            hi: {
                title: "फर्जी प्रोफाइल / पहचान की नकल",
                intro: "यदि कोई व्यक्ति ऑनलाइन आपकी पहचान का उपयोग करके फर्जी प्रोफाइल बना रहा है, तो प्रोफाइल के सबूत सुरक्षित करें और प्लेटफॉर्म तथा उचित आधिकारिक माध्यम से रिपोर्ट करें।",

                sections: [
                    {
                        title: "1. प्रोफाइल का रिकॉर्ड रखें",
                        text: "फर्जी प्रोफाइल के स्क्रीनशॉट लें और प्रोफाइल URL, यूजरनेम तथा दिखाई देने वाली जानकारी सुरक्षित रखें।"
                    },
                    {
                        title: "2. प्रोफाइल रिपोर्ट करें",
                        text: "प्लेटफॉर्म के आधिकारिक impersonation या fake account रिपोर्ट विकल्प का उपयोग करें। यदि फर्जी प्रोफाइल आपके संपर्कों को संदेश भेज सकती है तो उन्हें जानकारी दें।"
                    },
                    {
                        title: "3. अपना असली अकाउंट सुरक्षित करें",
                        text: "यदि आपका अपना अकाउंट भी खतरे में हो सकता है, तो पासवर्ड बदलें, टू-फैक्टर ऑथेंटिकेशन चालू करें, एक्टिव सेशन जांचें और रिकवरी जानकारी देखें।"
                    },
                    {
                        title: "4. सबूत सुरक्षित रखें",
                        list: [
                            "फर्जी प्रोफाइल URL",
                            "यूजरनेम",
                            "स्क्रीनशॉट",
                            "फर्जी अकाउंट से भेजे गए संदेश",
                            "प्रभावित संपर्कों की जानकारी"
                        ]
                    },
                    {
                        title: "5. आवश्यकता होने पर साइबर अपराध रिपोर्ट करें",
                        text: "उचित स्थिति में राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत करें और शिकायत का विवरण सुरक्षित रखें।"
                    }
                ]
            }

        },


        /* =================================================
           SHOPPING FRAUD
           ================================================= */

        shopping: {

            en: {
                title: "Online Shopping Fraud",
                intro: "If an online seller, shopping website or refund process appears fraudulent, stop further payments and preserve order and transaction evidence.",

                sections: [
                    {
                        title: "1. Stop further payment",
                        text: "Do not pay additional delivery, refund, verification or processing fees. Do not share OTP, PIN or banking information."
                    },
                    {
                        title: "2. Contact the platform",
                        text: "Use official customer support or dispute options. Report the seller or listing and save the complaint reference number."
                    },
                    {
                        title: "3. Contact your bank or payment provider",
                        text: "Report the fraudulent or unauthorized transaction and ask about the applicable dispute procedure."
                    },
                    {
                        title: "4. If money was lost",
                        text: "Call 1930 as soon as possible and report the incident through the National Cyber Crime Reporting Portal."
                    },
                    {
                        title: "5. Preserve evidence",
                        list: [
                            "Order ID",
                            "Transaction ID / UTR",
                            "Seller name or profile",
                            "Website or listing URL",
                            "Chats and emails",
                            "Screenshots",
                            "Delivery or refund messages"
                        ]
                    }
                ]
            },

            mr: {
                title: "ऑनलाइन खरेदी फसवणूक",
                intro: "ऑनलाइन विक्रेता, शॉपिंग वेबसाइट किंवा रिफंड प्रक्रिया फसवी वाटत असल्यास पुढील पेमेंट थांबवा आणि ऑर्डर व व्यवहाराचे पुरावे जतन करा.",

                sections: [
                    {
                        title: "१. पुढील पेमेंट थांबवा",
                        text: "अतिरिक्त डिलिव्हरी, रिफंड, पडताळणी किंवा प्रोसेसिंग फी देऊ नका. OTP, PIN किंवा बँकिंग माहिती शेअर करू नका."
                    },
                    {
                        title: "२. प्लॅटफॉर्मशी संपर्क करा",
                        text: "अधिकृत ग्राहक सेवा किंवा डिस्प्यूट पर्याय वापरा. विक्रेता किंवा लिस्टिंग रिपोर्ट करा आणि तक्रार क्रमांक जतन करा."
                    },
                    {
                        title: "३. बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा",
                        text: "फसव्या किंवा अनधिकृत व्यवहाराची माहिती द्या आणि लागू असलेल्या डिस्प्यूट प्रक्रियेबद्दल विचारा."
                    },
                    {
                        title: "४. पैसे गमावले असल्यास",
                        text: "शक्य तितक्या लवकर 1930 वर कॉल करा आणि राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा."
                    },
                    {
                        title: "५. पुरावे जतन करा",
                        list: [
                            "ऑर्डर ID",
                            "व्यवहार ID / UTR",
                            "विक्रेत्याचे नाव किंवा प्रोफाइल",
                            "वेबसाइट किंवा लिस्टिंगची लिंक",
                            "चॅट आणि ईमेल",
                            "स्क्रीनशॉट",
                            "डिलिव्हरी किंवा रिफंड मेसेज"
                        ]
                    }
                ]
            },

            hi: {
                title: "ऑनलाइन शॉपिंग धोखाधड़ी",
                intro: "यदि ऑनलाइन विक्रेता, शॉपिंग वेबसाइट या रिफंड प्रक्रिया धोखाधड़ी जैसी लगे, तो आगे का भुगतान रोकें और ऑर्डर व लेनदेन के सबूत सुरक्षित रखें।",

                sections: [
                    {
                        title: "1. आगे का भुगतान रोकें",
                        text: "अतिरिक्त डिलीवरी, रिफंड, वेरिफिकेशन या प्रोसेसिंग फीस न दें। OTP, PIN या बैंकिंग जानकारी साझा न करें।"
                    },
                    {
                        title: "2. प्लेटफॉर्म से संपर्क करें",
                        text: "आधिकारिक कस्टमर सपोर्ट या डिस्प्यूट विकल्प का उपयोग करें। विक्रेता या लिस्टिंग को रिपोर्ट करें और शिकायत संदर्भ नंबर सुरक्षित रखें।"
                    },
                    {
                        title: "3. बैंक या पेमेंट सेवा से संपर्क करें",
                        text: "धोखाधड़ी या अनधिकृत लेनदेन की जानकारी दें और लागू डिस्प्यूट प्रक्रिया के बारे में पूछें।"
                    },
                    {
                        title: "4. पैसे खो गए हों तो",
                        text: "जितनी जल्दी हो सके 1930 पर कॉल करें और राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत करें।"
                    },
                    {
                        title: "5. सबूत सुरक्षित रखें",
                        list: [
                            "ऑर्डर ID",
                            "लेनदेन ID / UTR",
                            "विक्रेता का नाम या प्रोफाइल",
                            "वेबसाइट या लिस्टिंग URL",
                            "चैट और ईमेल",
                            "स्क्रीनशॉट",
                            "डिलीवरी या रिफंड संदेश"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           JOB SCAM
           ================================================= */

        job: {

            en: {
                title: "Fake Job / Work Scam",
                intro: "Be careful with job offers that ask for money, sensitive information or urgent payments before employment.",

                sections: [
                    {
                        title: "1. Stop payment",
                        text: "Do not send more money. Do not share OTP, UPI PIN, password or unnecessary sensitive information."
                    },
                    {
                        title: "2. Verify the offer",
                        text: "Check the employer's official website and contact information. Do not rely only on a recruiter, WhatsApp message or forwarded advertisement."
                    },
                    {
                        title: "3. Contact your bank or payment provider",
                        text: "If you transferred money, immediately contact the bank or payment provider and report the fraudulent transaction."
                    },
                    {
                        title: "4. Call 1930 if money was lost",
                        text: "Call 1930 as soon as possible and then report the incident through the National Cyber Crime Reporting Portal."
                    },
                    {
                        title: "5. Preserve evidence",
                        list: [
                            "Job advertisement",
                            "Recruiter profile",
                            "Phone number",
                            "Email address",
                            "Payment details",
                            "Chats",
                            "Website URL",
                            "Screenshots"
                        ]
                    }
                ]
            },

            mr: {
                title: "बनावट नोकरी / कामाची फसवणूक",
                intro: "नोकरी मिळण्यापूर्वी पैसे, संवेदनशील माहिती किंवा तातडीने पेमेंट मागणाऱ्या नोकरीच्या ऑफरपासून सावध रहा.",

                sections: [
                    {
                        title: "१. पेमेंट थांबवा",
                        text: "आणखी पैसे पाठवू नका. OTP, UPI PIN, पासवर्ड किंवा अनावश्यक संवेदनशील माहिती देऊ नका."
                    },
                    {
                        title: "२. नोकरीची ऑफर तपासा",
                        text: "कंपनीची अधिकृत वेबसाइट आणि संपर्क माहिती तपासा. फक्त रिक्रूटर, WhatsApp मेसेज किंवा फॉरवर्ड केलेल्या जाहिरातीवर विश्वास ठेवू नका."
                    },
                    {
                        title: "३. बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा",
                        text: "पैसे ट्रान्सफर केले असल्यास ताबडतोब बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करून फसव्या व्यवहाराची माहिती द्या."
                    },
                    {
                        title: "४. पैसे गमावले असल्यास 1930 वर कॉल करा",
                        text: "शक्य तितक्या लवकर 1930 वर कॉल करा आणि त्यानंतर राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा."
                    },
                    {
                        title: "५. पुरावे जतन करा",
                        list: [
                            "नोकरीची जाहिरात",
                            "रिक्रूटर प्रोफाइल",
                            "फोन नंबर",
                            "ईमेल",
                            "पेमेंटची माहिती",
                            "चॅट",
                            "वेबसाइट लिंक",
                            "स्क्रीनशॉट"
                        ]
                    }
                ]
            },

            hi: {
                title: "फर्जी नौकरी / काम की धोखाधड़ी",
                intro: "नौकरी मिलने से पहले पैसे, संवेदनशील जानकारी या तुरंत भुगतान मांगने वाले जॉब ऑफर से सावधान रहें।",

                sections: [
                    {
                        title: "1. भुगतान रोकें",
                        text: "और पैसे न भेजें। OTP, UPI PIN, पासवर्ड या अनावश्यक संवेदनशील जानकारी साझा न करें।"
                    },
                    {
                        title: "2. ऑफर की जांच करें",
                        text: "कंपनी की आधिकारिक वेबसाइट और संपर्क जानकारी जांचें। केवल रिक्रूटर, WhatsApp संदेश या फॉरवर्ड किए गए विज्ञापन पर भरोसा न करें।"
                    },
                    {
                        title: "3. बैंक या पेमेंट सेवा से संपर्क करें",
                        text: "यदि आपने पैसे ट्रांसफर किए हैं, तो तुरंत बैंक या पेमेंट सेवा से संपर्क करके धोखाधड़ी वाले लेनदेन की जानकारी दें।"
                    },
                    {
                        title: "4. पैसे खो गए हों तो 1930 पर कॉल करें",
                        text: "जितनी जल्दी हो सके 1930 पर कॉल करें और उसके बाद राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत करें।"
                    },
                    {
                        title: "5. सबूत सुरक्षित रखें",
                        list: [
                            "नौकरी का विज्ञापन",
                            "रिक्रूटर प्रोफाइल",
                            "फोन नंबर",
                            "ईमेल",
                            "पेमेंट विवरण",
                            "चैट",
                            "वेबसाइट URL",
                            "स्क्रीनशॉट"
                        ]
                    }
                ]
            }

        },


        /* =================================================
           LOST / STOLEN MOBILE
           ================================================= */

        phone: {

            en: {
                title: "Lost / Stolen Mobile",
                intro: "If your phone is lost or stolen, secure the device, SIM and important accounts as quickly as possible.",

                sections: [
                    {
                        title: "1. Try to find the phone",
                        text: "Android users can use Google Find Hub / Find My Device. iPhone users can use Apple Find My. You may be able to locate the device, play a sound or mark it as lost. Do not confront an unfamiliar person at a location shown on the map."
                    },
                    {
                        title: "2. Lock the phone",
                        text: "Use the official device-finding service to lock or mark the phone as lost and display a contact message where available."
                    },
                    {
                        title: "3. Secure your SIM",
                        text: "Contact your mobile operator and request blocking or replacement of the SIM as appropriate."
                    },
                    {
                        title: "4. Secure your accounts",
                        text: "Change important passwords and sign out the lost device where possible. Pay special attention to banking, email and social media accounts. Monitor bank and UPI activity."
                    },
                    {
                        title: "5. Report the loss",
                        text: "Make a police complaint or report the loss as appropriate and keep the relevant details."
                    },
                    {
                        title: "6. Block the IMEI through CEIR",
                        text: "Use the official CEIR / Sanchar Saathi service to request IMEI blocking. Keep the IMEI, police report and required identity documents ready. Save the Request ID after submission."
                    },
                    {
                        title: "7. If money was stolen",
                        text: "Contact your bank or payment provider, call 1930 and report the incident through the National Cyber Crime Reporting Portal."
                    }
                ]
            },

            mr: {
                title: "हरवलेला / चोरीला गेलेला मोबाईल",
                intro: "मोबाईल हरवला किंवा चोरीला गेल्यास शक्य तितक्या लवकर मोबाईल, SIM आणि महत्त्वाची खाती सुरक्षित करा.",

                sections: [
                    {
                        title: "१. मोबाईल शोधण्याचा प्रयत्न करा",
                        text: "Android वापरकर्ते Google Find Hub / Find My Device वापरू शकतात. iPhone वापरकर्ते Apple Find My वापरू शकतात. उपलब्ध सुविधेनुसार मोबाईलचे स्थान पाहणे, आवाज वाजवणे किंवा तो Lost म्हणून मार्क करणे शक्य आहे. नकाशावर दिसणाऱ्या अनोळखी ठिकाणी स्वतः जाऊन संबंधित व्यक्तीशी सामना करू नका."
                    },
                    {
                        title: "२. मोबाईल लॉक करा",
                        text: "अधिकृत डिव्हाइस शोध सेवेद्वारे मोबाईल लॉक करा किंवा Lost म्हणून मार्क करा. उपलब्ध असल्यास संपर्कासाठी मेसेज दाखवा."
                    },
                    {
                        title: "३. SIM सुरक्षित करा",
                        text: "तुमच्या मोबाईल ऑपरेटरशी संपर्क करून आवश्यकतेनुसार SIM ब्लॉक किंवा रिप्लेस करण्याची विनंती करा."
                    },
                    {
                        title: "४. तुमची खाती सुरक्षित करा",
                        text: "महत्त्वाचे पासवर्ड बदला आणि शक्य असल्यास हरवलेल्या डिव्हाइसमधून साइन आउट करा. विशेषतः बँकिंग, ईमेल आणि सोशल मीडिया खाती तपासा. बँक आणि UPI व्यवहारांवर लक्ष ठेवा."
                    },
                    {
                        title: "५. मोबाईल हरवल्याची तक्रार करा",
                        text: "योग्य पद्धतीने पोलीस तक्रार किंवा हरवल्याची नोंद करा आणि संबंधित माहिती जतन करा."
                    },
                    {
                        title: "६. CEIR द्वारे IMEI ब्लॉक करा",
                        text: "अधिकृत CEIR / Sanchar Saathi सेवेद्वारे IMEI ब्लॉक करण्याची विनंती करा. IMEI, पोलीस तक्रार आणि आवश्यक ओळखपत्र तयार ठेवा. अर्ज केल्यानंतर Request ID जतन करा."
                    },
                    {
                        title: "७. पैसे चोरीला गेले असल्यास",
                        text: "बँक किंवा पेमेंट सेवा प्रदात्याशी संपर्क करा, 1930 वर कॉल करा आणि राष्ट्रीय सायबर क्राईम रिपोर्टिंग पोर्टलवर तक्रार करा."
                    }
                ]
            },

            hi: {
                title: "खोया / चोरी हुआ मोबाइल",
                intro: "यदि मोबाइल खो गया या चोरी हो गया है, तो जितनी जल्दी हो सके मोबाइल, SIM और महत्वपूर्ण खातों को सुरक्षित करें।",

                sections: [
                    {
                        title: "1. मोबाइल खोजने की कोशिश करें",
                        text: "Android उपयोगकर्ता Google Find Hub / Find My Device का उपयोग कर सकते हैं। iPhone उपयोगकर्ता Apple Find My का उपयोग कर सकते हैं। उपलब्ध सुविधा के अनुसार मोबाइल की लोकेशन देखना, आवाज बजाना या उसे Lost के रूप में मार्क करना संभव हो सकता है। नक्शे पर दिखाई गई किसी अनजान जगह पर खुद जाकर व्यक्ति का सामना न करें।"
                    },
                    {
                        title: "2. मोबाइल लॉक करें",
                        text: "आधिकारिक डिवाइस-फाइंडिंग सेवा से मोबाइल लॉक करें या Lost के रूप में मार्क करें। उपलब्ध होने पर संपर्क संदेश भी दिखा सकते हैं।"
                    },
                    {
                        title: "3. SIM सुरक्षित करें",
                        text: "अपने मोबाइल ऑपरेटर से संपर्क करें और आवश्यकता के अनुसार SIM ब्लॉक या रिप्लेस करने का अनुरोध करें।"
                    },
                    {
                        title: "4. अपने खातों को सुरक्षित करें",
                        text: "महत्वपूर्ण पासवर्ड बदलें और संभव हो तो खोए हुए डिवाइस से साइन आउट करें। बैंकिंग, ईमेल और सोशल मीडिया खातों पर विशेष ध्यान दें। बैंक और UPI गतिविधि पर नजर रखें।"
                    },
                    {
                        title: "5. मोबाइल खोने की रिपोर्ट करें",
                        text: "उचित तरीके से पुलिस शिकायत या मोबाइल खोने की रिपोर्ट करें और संबंधित विवरण सुरक्षित रखें।"
                    },
                    {
                        title: "6. CEIR के माध्यम से IMEI ब्लॉक करें",
                        text: "आधिकारिक CEIR / Sanchar Saathi सेवा के माध्यम से IMEI ब्लॉक करने का अनुरोध करें। IMEI, पुलिस रिपोर्ट और आवश्यक पहचान दस्तावेज तैयार रखें। आवेदन के बाद Request ID सुरक्षित रखें।"
                    },
                    {
                        title: "7. पैसे चोरी हुए हों तो",
                        text: "बैंक या पेमेंट सेवा से संपर्क करें, 1930 पर कॉल करें और राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल पर शिकायत करें।"
                    }
                ]
            }

        }

    };


    /* =====================================================
       LANGUAGE TRANSLATION FUNCTION
       ===================================================== */

    function translatePage() {

        const language =
            translations[currentLanguage] || translations.en;

        document.documentElement.lang =
            currentLanguage;

        document.body.classList.toggle(
            "devanagari",
            currentLanguage === "mr" ||
            currentLanguage === "hi"
        );


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (language[key]) {
                    element.textContent =
                        language[key];
                }

            });


        updateStatisticsUI();


        const table =
            document.getElementById("sectionViewsTable");

        const button =
            document.getElementById("sectionViewsBtn");

        if (table && button) {

            const isHidden =
                table.classList.contains("hidden");

            button.textContent =
                isHidden
                    ? language.viewSectionViews
                    : language.hideSectionViews;

        }

    }


    /* =====================================================
       ESCAPE HTML
       ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       GET ACTION BUTTONS
       ===================================================== */

    function getActions(type) {

        const language = currentLanguage;

        if (type === "money") {

            return `
                <a class="btn btn-danger"
                   href="${LINKS.helpline}">
                    ${
                        language === "mr"
                            ? "1930 वर कॉल करा"
                            : language === "hi"
                                ? "1930 पर कॉल करें"
                                : "Call 1930"
                    }
                </a>

                <a class="btn btn-primary"
                   href="${LINKS.cyberCrime}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${
                        language === "mr"
                            ? "ऑनलाइन तक्रार करा"
                            : language === "hi"
                                ? "ऑनलाइन रिपोर्ट करें"
                                : "Report Online"
                    }
                </a>
            `;

        }


        if (type === "phone") {

            return `
                <a class="btn btn-primary"
                   href="${LINKS.android}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${
                        language === "mr"
                            ? "Android शोधा"
                            : language === "hi"
                                ? "Android खोजें"
                                : "Find Android"
                    }
                </a>

                <a class="btn btn-primary"
                   href="${LINKS.iphone}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${
                        language === "mr"
                            ? "iPhone शोधा"
                            : language === "hi"
                                ? "iPhone खोजें"
                                : "Find iPhone"
                    }
                </a>

                <a class="btn btn-secondary"
                   href="${LINKS.ceir}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${
                        language === "mr"
                            ? "CEIR उघडा"
                            : language === "hi"
                                ? "CEIR खोलें"
                                : "Open CEIR"
                    }
                </a>
            `;

        }


        return `
            <a class="btn btn-primary"
               href="${LINKS.cyberCrime}"
               target="_blank"
               rel="noopener noreferrer">
                ${
                    language === "mr"
                        ? "सायबर क्राईम पोर्टल"
                        : language === "hi"
                            ? "साइबर क्राइम पोर्टल"
                            : "Cyber Crime Portal"
                }
            </a>
        `;

    }


    /* =====================================================
       SHOW GUIDE
       ===================================================== */

    function showGuide(type) {

        const guide =
            guideTranslations[type]?.[currentLanguage] ||
            guideTranslations[type]?.en;

        if (!guide) {
            return;
        }


        const modal =
            document.getElementById("guideModal");

        const content =
            document.getElementById("guideContent");


        let html = `

            <div class="guide-kicker">
                NIRBHAYSETU • CYBER SAFETY GUIDE
            </div>

            <h2 class="guide-title">
                ${escapeHTML(guide.title)}
            </h2>

            <div class="guide-intro">
                ${escapeHTML(guide.intro)}
            </div>
        `;


        guide.sections.forEach(section => {

            html += `
                <div class="guide-section">

                    <h3>
                        ${escapeHTML(section.title)}
                    </h3>
            `;


            if (section.text) {

                html += `
                    <p>
                        ${escapeHTML(section.text)}
                    </p>
                `;

            }


            if (section.list) {

                html += "<ul>";

                section.list.forEach(item => {

                    html += `
                        <li>
                            ${escapeHTML(item)}
                        </li>
                    `;

                });

                html += "</ul>";
            }


            html += `
                </div>
            `;

        });


        html += `
            <div class="guide-actions">
                ${getActions(type)}
            </div>
        `;


        content.innerHTML = html;


        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    /* =====================================================
       CLOSE GUIDE
       ===================================================== */

    function closeGuide() {

        const modal =
            document.getElementById("guideModal");

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


   /* =====================================================
   GUIDE CARD EVENTS
   ===================================================== */

document
    .querySelectorAll(".situation-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const guideType =
                card.dataset.guide;

            // Open guide immediately
            showGuide(guideType);

            // Record statistics separately
            countSectionView(guideType);

        });


        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                const guideType =
                    card.dataset.guide;

                // Open guide immediately
                showGuide(guideType);

                // Record statistics separately
                countSectionView(guideType);

            }

        });

    });

    /* =====================================================
       GUIDE MODAL EVENTS
       ===================================================== */

    document
        .getElementById("guideClose")
        .addEventListener(
            "click",
            closeGuide
        );


    document
        .querySelector("#guideModal .modal-overlay")
        .addEventListener(
            "click",
            closeGuide
        );


    /* =====================================================
       HELP MODAL
       ===================================================== */

    function openHelpModal() {

        const modal =
            document.getElementById("helpModal");

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function closeHelpModal() {

        const modal =
            document.getElementById("helpModal");

        modal.classList.remove("open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    document
        .getElementById("helpClose")
        .addEventListener(
            "click",
            closeHelpModal
        );


    document
        .querySelector("#helpModal .modal-overlay")
        .addEventListener(
            "click",
            closeHelpModal
        );


    /* =====================================================
       LANGUAGE SELECTOR
       ===================================================== */

    languageSelect.value =
        currentLanguage;


    languageSelect.addEventListener(
        "change",
        event => {

            currentLanguage =
                event.target.value;

            localStorage.setItem(
                "nirbhay_language",
                currentLanguage
            );

            translatePage();

        }
    );


    /* =====================================================
       TEXT SIZE
       ===================================================== */

    const textSizeBtn =
        document.getElementById("textSizeBtn");

    const savedTextSize =
        localStorage.getItem(
            "nirbhay_text_size"
        );


    if (savedTextSize === "large") {

        document.body.classList.add(
            "large-text"
        );

    }


    textSizeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "large-text"
            );

            const isLarge =
                document.body.classList.contains(
                    "large-text"
                );

            localStorage.setItem(
                "nirbhay_text_size",
                isLarge
                    ? "large"
                    : "normal"
            );

        }
    );


    /* =====================================================
       WEBSITE STATISTICS
       ===================================================== */

    const STAT_STORAGE_KEY =
        "nirbhaysetu_statistics";

    const VISITOR_SESSION_KEY =
        "nirbhaysetu_visitor_counted";


    const sectionNames = {

        money: {
            en: "Money Lost",
            mr: "पैसे गमावले",
            hi: "पैसे खो गए"
        },

        otp: {
            en: "Fake Call / OTP",
            mr: "बनावट कॉल / OTP",
            hi: "फर्जी कॉल / OTP"
        },

        suspicious: {
            en: "Suspicious Link",
            mr: "संशयास्पद लिंक",
            hi: "संदिग्ध लिंक"
        },

        social: {
            en: "Social Account Hacked",
            mr: "सोशल मीडिया खाते हॅक",
            hi: "सोशल मीडिया अकाउंट हैक"
        },

        harassment: {
            en: "Online Harassment",
            mr: "ऑनलाइन छळ",
            hi: "ऑनलाइन उत्पीड़न"
        },

        identity: {
            en: "Fake Profile",
            mr: "बनावट प्रोफाइल",
            hi: "फर्जी प्रोफाइल"
        },

        shopping: {
            en: "Shopping Fraud",
            mr: "ऑनलाइन खरेदी फसवणूक",
            hi: "ऑनलाइन शॉपिंग धोखाधड़ी"
        },

        job: {
            en: "Fake Job Scam",
            mr: "बनावट नोकरी फसवणूक",
            hi: "फर्जी नौकरी धोखाधड़ी"
        },

        phone: {
            en: "Lost / Stolen Mobile",
            mr: "हरवलेला / चोरीला गेलेला मोबाईल",
            hi: "खोया / चोरी हुआ मोबाइल"
        }

    };

/* =====================================================
   STATISTICS
   SHARED SUPABASE STATISTICS
   ===================================================== */

const defaultStatistics = {

    visitors: 0,

    sections: {

        money: 0,
        otp: 0,
        suspicious: 0,
        social: 0,
        harassment: 0,
        identity: 0,
        shopping: 0,
        job: 0,
        phone: 0

    }

};


/* =====================================================
   FORMAT STAT NUMBER
   ===================================================== */

function formatStatNumber(number) {

    return String(
        Number(number) || 0
    ).padStart(3, "0");

}


/* =====================================================
   UPDATE STATISTICS UI
   ===================================================== */

function updateStatisticsUI(stats = null) {

    /*
       If Supabase has not returned data yet,
       use zero values temporarily.
    */

    const safeStats = {

        visitors:
            Number(
                stats?.visitors
            ) || 0,

        sections: {

            ...defaultStatistics.sections,

            ...(stats?.sections || {})

        }

    };


    /* =================================================
       ELEMENTS
       ================================================= */

    const visitorCount =
        document.getElementById(
            "visitorCount"
        );

    const statsVisitors =
        document.getElementById(
            "statsVisitors"
        );

    const totalSectionViews =
        document.getElementById(
            "totalSectionViews"
        );

    const mostViewedSection =
        document.getElementById(
            "mostViewedSection"
        );

    const mostViewedCount =
        document.getElementById(
            "mostViewedCount"
        );


    /* =================================================
       VISITOR COUNT
       ================================================= */

    if (visitorCount) {

        visitorCount.textContent =
            formatStatNumber(
                safeStats.visitors
            );

    }


    if (statsVisitors) {

        statsVisitors.textContent =
            formatStatNumber(
                safeStats.visitors
            );

    }


    /* =================================================
       TOTAL SECTION VIEWS
       ================================================= */

    const totalViews =
        Object.values(
            safeStats.sections
        )
        .reduce(
            (sum, value) =>
                sum + (
                    Number(value) || 0
                ),
            0
        );


    if (totalSectionViews) {

        totalSectionViews.textContent =
            formatStatNumber(
                totalViews
            );

    }


    /* =================================================
       MOST VIEWED SECTION
       ================================================= */

    let mostViewedType = null;

    let highestViews = 0;


    Object.keys(
        safeStats.sections
    )
    .forEach(type => {

        const views =
            Number(
                safeStats.sections[type]
            ) || 0;


        if (views > highestViews) {

            highestViews =
                views;

            mostViewedType =
                type;

        }

    });


    if (mostViewedSection) {

        if (mostViewedType) {

            /*
               sectionNames[type] in your existing
               project contains the language names.
            */

            if (
                sectionNames[mostViewedType] &&
                typeof sectionNames[mostViewedType] === "object"
            ) {

                mostViewedSection.textContent =
                    sectionNames[
                        mostViewedType
                    ][currentLanguage]
                    ||
                    sectionNames[
                        mostViewedType
                    ].en
                    ||
                    mostViewedType;

            } else {

                mostViewedSection.textContent =
                    mostViewedType;

            }

        } else {

            mostViewedSection.textContent =
                currentLanguage === "mr"
                    ? "अद्याप माहिती नाही"
                    : currentLanguage === "hi"
                        ? "अभी कोई डेटा नहीं"
                        : "No data yet";

        }

    }


    /* =================================================
       MOST VIEWED COUNT
       ================================================= */

    if (mostViewedCount) {

        if (currentLanguage === "mr") {

            mostViewedCount.textContent =
                `${highestViews} पाहणी`;

        } else if (currentLanguage === "hi") {

            mostViewedCount.textContent =
                `${highestViews} व्यू`;

        } else {

            mostViewedCount.textContent =
                `${highestViews} ${
                    highestViews === 1
                        ? "view"
                        : "views"
                }`;

        }

    }


    /* =================================================
       INDIVIDUAL SECTION VIEWS
       ================================================= */

    Object.keys(
        defaultStatistics.sections
    )
    .forEach(type => {

        const element =
            document.getElementById(
                `view-${type}`
            );


        if (element) {

            element.textContent =
                formatStatNumber(
                    safeStats.sections[type]
                );

        }

    });

}

   /* =====================================================
   COUNT VISITOR — SUPABASE
   ===================================================== */

async function countVisitor() {

    try {

        if (
            sessionStorage.getItem(
                VISITOR_SESSION_KEY
            ) === "true"
        ) {

            return;

        }

        // Mark this browser session first
        // to prevent duplicate counting on refresh
        sessionStorage.setItem(
            VISITOR_SESSION_KEY,
            "true"
        );

        // Record visitor in Supabase
        await recordEvent("visitor");

    } catch (error) {

        console.warn(
            "Visitor count could not be recorded.",
            error
        );

    }

}


/* =====================================================
   COUNT SECTION VIEW
   ===================================================== */

async function countSectionView(type) {

    if (!sectionNames[type]) {
        return;
    }

    try {

        // Record section view in Supabase
        await recordEvent(
            "section_view",
            type
        );

        // Get latest shared statistics
        const stats =
            await loadSharedStatistics();

        // Update displayed statistics
        if (stats) {

            updateStatisticsUI(stats);

        }

    } catch (error) {

        console.warn(
            "Section view could not be recorded.",
            error
        );

    }

}


/* =====================================================
   SECTION VIEWS SHOW / HIDE
   ===================================================== */

const sectionViewsBtn =
    document.getElementById(
        "sectionViewsBtn"
    );

const sectionViewsTable =
    document.getElementById(
        "sectionViewsTable"
    );


if (
    sectionViewsBtn &&
    sectionViewsTable
) {

    sectionViewsBtn.addEventListener(
        "click",
        () => {

            const isHidden =
                sectionViewsTable.classList
                    .contains("hidden");


            if (isHidden) {

                sectionViewsTable.classList
                    .remove("hidden");

                sectionViewsBtn
                    .setAttribute(
                        "aria-expanded",
                        "true"
                    );

            } else {

                sectionViewsTable.classList
                    .add("hidden");

                sectionViewsBtn
                    .setAttribute(
                        "aria-expanded",
                        "false"
                    );

            }


            translatePage();

        }
    );

}


    /* =====================================================
       ESC KEY — CLOSE MODALS
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            closeGuide();
            closeHelpModal();

        }
    );


    /* =====================================================
   INITIALIZE
   ===================================================== */

translatePage();


// Load shared statistics from Supabase
loadSharedStatistics()
    .then(stats => {

        if (stats) {

            updateStatisticsUI(
                stats
            );

        } else {

            updateStatisticsUI(
                defaultStatistics
            );

        }

    });


// Count visitor
countVisitor();


// Reload statistics after visitor is recorded
setTimeout(() => {

    loadSharedStatistics()
        .then(stats => {

            if (stats) {

                updateStatisticsUI(
                    stats
                );

            }

        });

}, 500);
});
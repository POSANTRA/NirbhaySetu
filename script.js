/* =========================================================
   NIRBHAYSETU
   Multilingual Guided Cyber Safety System
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       OFFICIAL LINKS
       ===================================================== */

    const LINKS = {

        cyberCrime:
            "https://www.cybercrime.gov.in/",

        android:
            "https://www.google.com/android/find/",

        iphone:
            "https://www.icloud.com/find",

        ceir:
            "https://ceir.sancharsaathi.gov.in/",

        sanchar:
            "https://sancharsaathi.gov.in/",

        helpline:
            "tel:1930",

        emergency:
            "tel:112"

    };


    /* =====================================================
       LANGUAGE
       ===================================================== */

    const languageSelect =
        document.getElementById("languageSelect");

    const savedLanguage =
        localStorage.getItem("nirbhay_language") || "en";

    let currentLanguage = savedLanguage;

    languageSelect.value = currentLanguage;


    /* =====================================================
       PAGE TRANSLATIONS
       ===================================================== */

    const translations = {

        en: {

            brandTagline:
                "CYBER SAFETY GUIDE",

            navHome:
                "Home",

            navHelp:
                "Get Help",

            navReport:
                "Report",

            navAbout:
                "About",

            eyebrow:
                "SIMPLE • PRACTICAL • LOCAL",

            heroTitle:
                "Cybercrime happened. <span>What should you do now?</span>",

            heroDescription:
                "NirbhaySetu helps you understand the situation, take immediate action and find the right reporting channel.",

            findSituation:
                "Find My Situation",

            helpNow:
                "I NEED HELP NOW",

            financialAlertTitle:
                "Money lost through cyber fraud?",

            financialAlertText:
                "Call 1930 immediately.",

            guideLabel:
                "GUIDED ACTION",

            visualTitle:
                "One problem.<br>Clear next steps.",

            stepOne:
                "Understand",

            stepTwo:
                "Secure",

            stepThree:
                "Report",

            situationLabel:
                "START HERE",

            situationTitle:
                "What happened to you?",

            situationDescription:
                "Choose the situation closest to what happened.",

            cardMoneyTitle:
                "Money Lost",

            cardMoneyText:
                "UPI, bank or payment fraud",

            cardOtpTitle:
                "Fake Call / OTP",

            cardOtpText:
                "Someone asked for OTP or banking details",

            cardLinkTitle:
                "Suspicious Link",

            cardLinkText:
                "Phishing message or fake website",

            cardSocialTitle:
                "Social Account Hacked",

            cardSocialText:
                "Account taken over or compromised",

            cardHarassmentTitle:
                "Online Harassment",

            cardHarassmentText:
                "Threats, stalking or unwanted messages",

            cardIdentityTitle:
                "Fake Profile",

            cardIdentityText:
                "Someone is impersonating you",

            cardShoppingTitle:
                "Shopping Fraud",

            cardShoppingText:
                "Fake seller, product or payment",

            cardJobTitle:
                "Fake Job Scam",

            cardJobText:
                "Fraudulent job or work offer",

            cardPhoneTitle:
                "Lost / Stolen Mobile",

            cardPhoneText:
                "Find, lock and secure your phone",

            viewGuide:
                "View guide",

            reportLabel:
                "OFFICIAL CHANNELS",

            reportTitle:
                "Report through the right channel.",

            reportDescription:
                "Use official services for reporting and assistance.",

            ncrpText:
                "Report applicable cybercrime online.",

            helplineText:
                "Immediate reporting of cyber financial fraud.",

            sancharText:
                "Telecom and mobile-related services.",

            emergencyText:
                "For immediate emergency assistance.",

            aboutLabel:
                "ABOUT NIRBHAYSETU",

            aboutTitle:
                "From confusion to the next right action.",

            aboutText:
                "NirbhaySetu is designed to make cybercrime reporting easier for people who may not know technical terms or where to begin.",

            aboutPoint1:
                "Simple language",

            aboutPoint2:
                "English • Marathi • Hindi",

            aboutPoint3:
                "Action before explanation",

            disclaimer:
                "NirbhaySetu is an awareness and guidance project. It does not replace police, legal or professional advice.",

            modalTitle:
                "Need help right now?",

            modalText:
                "Choose the action that matches your situation.",

            modal1930:
                "Cyber Financial Fraud",

            modal1930Text:
                "Call immediately if money was lost.",

            modalNcrp:
                "Report Cybercrime",

            modalNcrpText:
                "National Cyber Crime Reporting Portal.",

            modal112:
                "Emergency",

            modal112Text:
                "For immediate emergency assistance.",

            footerTagline:
                "Bridge to a safer digital world."

        },


        mr: {

            brandTagline:
                "सायबर सुरक्षितता मार्गदर्शक",

            navHome:
                "मुख्यपृष्ठ",

            navHelp:
                "मदत मिळवा",

            navReport:
                "तक्रार करा",

            navAbout:
                "आमच्याबद्दल",

            eyebrow:
                "सोपे • व्यावहारिक • स्थानिक",

            heroTitle:
                "सायबर गुन्हा घडला. <span>आता काय करावे?</span>",

            heroDescription:
                "NirbhaySetu तुम्हाला काय घडले हे समजून घेण्यास, त्वरित योग्य कृती करण्यास आणि योग्य तक्रार करण्याचे ठिकाण शोधण्यास मदत करते.",

            findSituation:
                "माझी परिस्थिती शोधा",

            helpNow:
                "मला आत्ताच मदत हवी",

            financialAlertTitle:
                "सायबर फसवणुकीत पैसे गेले आहेत?",

            financialAlertText:
                "तात्काळ 1930 वर कॉल करा.",

            guideLabel:
                "मार्गदर्शित कृती",

            visualTitle:
                "एक समस्या.<br>पुढील स्पष्ट पावले.",

            stepOne:
                "समजून घ्या",

            stepTwo:
                "सुरक्षित करा",

            stepThree:
                "तक्रार करा",

            situationLabel:
                "येथून सुरुवात करा",

            situationTitle:
                "तुमच्यासोबत काय घडले?",

            situationDescription:
                "तुमच्या परिस्थितीशी जुळणारा पर्याय निवडा.",

            cardMoneyTitle:
                "पैसे गेले",

            cardMoneyText:
                "UPI, बँक किंवा पेमेंट फसवणूक",

            cardOtpTitle:
                "बनावट कॉल / OTP",

            cardOtpText:
                "OTP किंवा बँकिंग माहिती मागितली",

            cardLinkTitle:
                "संशयास्पद लिंक",

            cardLinkText:
                "फिशिंग संदेश किंवा बनावट वेबसाइट",

            cardSocialTitle:
                "सोशल मीडिया खाते हॅक",

            cardSocialText:
                "खाते दुसऱ्याने ताब्यात घेतले",

            cardHarassmentTitle:
                "ऑनलाइन छळ",

            cardHarassmentText:
                "धमकी, पाठलाग किंवा त्रासदायक संदेश",

            cardIdentityTitle:
                "बनावट प्रोफाइल",

            cardIdentityText:
                "कोणी तुमची ओळख वापरत आहे",

            cardShoppingTitle:
                "ऑनलाइन खरेदी फसवणूक",

            cardShoppingText:
                "बनावट विक्रेता, वस्तू किंवा पेमेंट",

            cardJobTitle:
                "बनावट नोकरी फसवणूक",

            cardJobText:
                "फसवी नोकरी किंवा कामाची ऑफर",

            cardPhoneTitle:
                "मोबाईल हरवला / चोरीला गेला",

            cardPhoneText:
                "मोबाईल शोधा, लॉक करा आणि सुरक्षित करा",

            viewGuide:
                "मार्गदर्शक पहा",

            reportLabel:
                "अधिकृत माध्यमे",

            reportTitle:
                "योग्य ठिकाणी तक्रार करा.",

            reportDescription:
                "तक्रार आणि मदतीसाठी अधिकृत सेवांचा वापर करा.",

            ncrpText:
                "लागू असलेल्या सायबर गुन्ह्याची ऑनलाइन तक्रार करा.",

            helplineText:
                "सायबर आर्थिक फसवणुकीसाठी त्वरित तक्रार.",

            sancharText:
                "दूरसंचार आणि मोबाईलशी संबंधित सेवा.",

            emergencyText:
                "तातडीच्या आपत्कालीन मदतीसाठी.",

            aboutLabel:
                "NIRBHAYSETU बद्दल",

            aboutTitle:
                "गोंधळापासून योग्य कृतीपर्यंत.",

            aboutText:
                "तांत्रिक माहिती किंवा तक्रार कुठून सुरू करावी याची माहिती नसलेल्या लोकांसाठी NirbhaySetu सायबर गुन्ह्याची तक्रार करणे सोपे बनवते.",

            aboutPoint1:
                "सोप्या भाषेचा वापर",

            aboutPoint2:
                "इंग्रजी • मराठी • हिंदी",

            aboutPoint3:
                "स्पष्टीकरणापूर्वी कृती",

            disclaimer:
                "NirbhaySetu हा जनजागृती आणि मार्गदर्शन प्रकल्प आहे. तो पोलीस, कायदेशीर किंवा व्यावसायिक सल्ल्याचा पर्याय नाही.",

            modalTitle:
                "आत्ताच मदत हवी आहे?",

            modalText:
                "तुमच्या परिस्थितीनुसार योग्य पर्याय निवडा.",

            modal1930:
                "सायबर आर्थिक फसवणूक",

            modal1930Text:
                "पैसे गेले असल्यास त्वरित कॉल करा.",

            modalNcrp:
                "सायबर गुन्ह्याची तक्रार",

            modalNcrpText:
                "राष्ट्रीय सायबर गुन्हे रिपोर्टिंग पोर्टल.",

            modal112:
                "आपत्कालीन मदत",

            modal112Text:
                "तातडीच्या आपत्कालीन मदतीसाठी.",

            footerTagline:
                "सुरक्षित डिजिटल जगाकडे जाणारा पूल."

        },


        hi: {

            brandTagline:
                "साइबर सुरक्षा गाइड",

            navHome:
                "होम",

            navHelp:
                "मदद लें",

            navReport:
                "रिपोर्ट करें",

            navAbout:
                "हमारे बारे में",

            eyebrow:
                "सरल • व्यावहारिक • स्थानीय",

            heroTitle:
                "साइबर अपराध हुआ है। <span>अब क्या करें?</span>",

            heroDescription:
                "NirbhaySetu आपको समझने, तुरंत सही कदम उठाने और सही रिपोर्टिंग चैनल खोजने में मदद करता है।",

            findSituation:
                "मेरी स्थिति खोजें",

            helpNow:
                "मुझे अभी मदद चाहिए",

            financialAlertTitle:
                "साइबर धोखाधड़ी में पैसे चले गए?",

            financialAlertText:
                "तुरंत 1930 पर कॉल करें।",

            guideLabel:
                "निर्देशित कार्रवाई",

            visualTitle:
                "एक समस्या।<br>अगले स्पष्ट कदम।",

            stepOne:
                "समझें",

            stepTwo:
                "सुरक्षित करें",

            stepThree:
                "रिपोर्ट करें",

            situationLabel:
                "यहाँ से शुरू करें",

            situationTitle:
                "आपके साथ क्या हुआ?",

            situationDescription:
                "अपनी स्थिति के सबसे करीब वाला विकल्प चुनें।",

            cardMoneyTitle:
                "पैसे चले गए",

            cardMoneyText:
                "UPI, बैंक या पेमेंट धोखाधड़ी",

            cardOtpTitle:
                "फर्जी कॉल / OTP",

            cardOtpText:
                "किसी ने OTP या बैंकिंग जानकारी मांगी",

            cardLinkTitle:
                "संदिग्ध लिंक",

            cardLinkText:
                "फिशिंग संदेश या नकली वेबसाइट",

            cardSocialTitle:
                "सोशल मीडिया अकाउंट हैक",

            cardSocialText:
                "अकाउंट किसी और ने अपने नियंत्रण में लिया",

            cardHarassmentTitle:
                "ऑनलाइन उत्पीड़न",

            cardHarassmentText:
                "धमकी, पीछा करना या परेशान करने वाले संदेश",

            cardIdentityTitle:
                "फर्जी प्रोफाइल",

            cardIdentityText:
                "कोई आपकी पहचान का उपयोग कर रहा है",

            cardShoppingTitle:
                "ऑनलाइन शॉपिंग धोखाधड़ी",

            cardShoppingText:
                "फर्जी विक्रेता, सामान या भुगतान",

            cardJobTitle:
                "फर्जी नौकरी घोटाला",

            cardJobText:
                "फर्जी नौकरी या काम का प्रस्ताव",

            cardPhoneTitle:
                "मोबाइल खो गया / चोरी हुआ",

            cardPhoneText:
                "मोबाइल खोजें, लॉक करें और सुरक्षित करें",

            viewGuide:
                "गाइड देखें",

            reportLabel:
                "आधिकारिक माध्यम",

            reportTitle:
                "सही जगह पर रिपोर्ट करें।",

            reportDescription:
                "रिपोर्टिंग और सहायता के लिए आधिकारिक सेवाओं का उपयोग करें।",

            ncrpText:
                "लागू साइबर अपराध की ऑनलाइन शिकायत करें।",

            helplineText:
                "साइबर वित्तीय धोखाधड़ी की तुरंत रिपोर्टिंग।",

            sancharText:
                "टेलीकॉम और मोबाइल से संबंधित सेवाएं।",

            emergencyText:
                "तुरंत आपातकालीन सहायता के लिए।",

            aboutLabel:
                "NIRBHAYSETU के बारे में",

            aboutTitle:
                "उलझन से सही कार्रवाई तक।",

            aboutText:
                "जिन लोगों को तकनीकी शब्द या शिकायत कहाँ से शुरू करनी है, इसकी जानकारी नहीं है, उनके लिए NirbhaySetu साइबर अपराध रिपोर्टिंग को आसान बनाने के लिए बनाया गया है।",

            aboutPoint1:
                "सरल भाषा",

            aboutPoint2:
                "अंग्रेज़ी • मराठी • हिंदी",

            aboutPoint3:
                "जानकारी से पहले कार्रवाई",

            disclaimer:
                "NirbhaySetu जागरूकता और मार्गदर्शन परियोजना है। यह पुलिस, कानूनी या पेशेवर सलाह का विकल्प नहीं है।",

            modalTitle:
                "अभी मदद चाहिए?",

            modalText:
                "अपनी स्थिति के अनुसार सही विकल्प चुनें।",

            modal1930:
                "साइबर वित्तीय धोखाधड़ी",

            modal1930Text:
                "पैसे चले गए हों तो तुरंत कॉल करें।",

            modalNcrp:
                "साइबर अपराध रिपोर्ट करें",

            modalNcrpText:
                "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल।",

            modal112:
                "आपातकाल",

            modal112Text:
                "तुरंत आपातकालीन सहायता के लिए।",

            footerTagline:
                "एक सुरक्षित डिजिटल दुनिया की ओर पुल।"

        }

    };


    /* =====================================================
       GUIDE TRANSLATIONS
       ===================================================== */

    const guideTranslations = {

        en: {

            money: {
                title: "Money Lost / Financial Fraud",
                subtitle: "Act quickly. Your first priority is to stop or limit further loss.",
                important: "If money has been lost through cyber financial fraud, call 1930 immediately.",
                sections: [
                    ["1. Stop further loss", [
                        "Do not send any more money.",
                        "Do not share OTP, UPI PIN, CVV, password or banking credentials.",
                        "If remote access was given, disconnect the session and secure your accounts."
                    ]],
                    ["2. Contact your bank / payment provider", [
                        "Report the unauthorized transaction immediately.",
                        "Ask about available blocking or dispute procedures.",
                        "Keep the transaction reference number."
                    ]],
                    ["3. Call 1930", [
                        "Call the national cyber financial fraud helpline.",
                        "Keep your transaction details ready.",
                        "Report the incident as soon as possible."
                    ]],
                    ["4. Report online", [
                        "Submit the complaint through the National Cyber Crime Reporting Portal.",
                        "Save your acknowledgement / complaint details."
                    ]],
                    ["5. Keep this evidence", [
                        "Transaction ID / UTR",
                        "Bank or wallet details",
                        "Screenshots",
                        "UPI ID / phone number",
                        "Messages, emails or chats",
                        "Website or profile URL"
                    ]]
                ]
            },

            otp: {
                title: "Fake Call / OTP Scam",
                subtitle: "Someone called, messaged or contacted you asking for OTP, PIN or personal information.",
                important: "Never share OTP, UPI PIN, CVV, password or banking credentials with a caller.",
                sections: [
                    ["1. End the conversation", [
                        "Do not share the OTP or verification code.",
                        "Do not share your UPI PIN, CVV or password.",
                        "Do not install an app or give remote access because someone asked you to."
                    ]],
                    ["2. Check your accounts", [
                        "Check bank and UPI transactions.",
                        "Check whether your account, email or social-media password was changed.",
                        "If you shared credentials, change them immediately."
                    ]],
                    ["3. If money was lost", [
                        "Contact your bank/payment provider immediately.",
                        "Call 1930.",
                        "Report the incident on the National Cyber Crime Reporting Portal."
                    ]],
                    ["4. Keep evidence", [
                        "Caller phone number",
                        "SMS / WhatsApp messages",
                        "Screenshots",
                        "Transaction details",
                        "Emails or links received"
                    ]]
                ]
            },

            suspicious: {
                title: "Suspicious Link / Phishing",
                subtitle: "You received or opened a suspicious website, message or login link.",
                important: "Do not enter passwords, OTPs, card details or other sensitive information into suspicious websites.",
                sections: [
                    ["1. If you have NOT clicked", [
                        "Do not open the link.",
                        "Do not download anything.",
                        "Delete or report the suspicious message."
                    ]],
                    ["2. If you clicked the link", [
                        "Close the suspicious page.",
                        "Do not enter additional information.",
                        "Do not download unknown applications or files."
                    ]],
                    ["3. If you entered your password", [
                        "Change the password immediately.",
                        "Use a strong, unique password.",
                        "Enable two-factor authentication.",
                        "Sign out suspicious sessions where available."
                    ]],
                    ["4. If banking information was exposed", [
                        "Contact your bank/payment provider immediately.",
                        "Monitor transactions.",
                        "If money was lost, call 1930."
                    ]],
                    ["5. Keep evidence", [
                        "Suspicious URL",
                        "Message screenshot",
                        "Sender details",
                        "Email address / phone number",
                        "Downloaded file name, if applicable"
                    ]]
                ]
            },

            social: {
                title: "Social Media Account Hacked",
                subtitle: "Someone has accessed, taken over or changed your social-media account.",
                important: "Secure the account first and warn your contacts if the attacker is sending messages from your account.",
                sections: [
                    ["1. Try account recovery", [
                        "Use the platform's official account-recovery option.",
                        "Do not use unofficial recovery services."
                    ]],
                    ["2. Change your password", [
                        "Create a new strong password.",
                        "Do not reuse the compromised password elsewhere."
                    ]],
                    ["3. Secure the account", [
                        "Enable two-factor authentication.",
                        "Check active login sessions.",
                        "Remove unknown devices.",
                        "Check recovery email and phone number.",
                        "Remove suspicious third-party apps."
                    ]],
                    ["4. Protect your contacts", [
                        "Tell friends and family that your account was compromised.",
                        "Ask them not to send money or trust suspicious messages from your account."
                    ]],
                    ["5. Keep evidence", [
                        "Profile URL",
                        "Screenshots",
                        "Suspicious messages",
                        "Login alerts",
                        "Recovery emails"
                    ]]
                ]
            },

            harassment: {
                title: "Cyber Harassment / Stalking",
                subtitle: "You are receiving unwanted, threatening or repeated online communication.",
                important: "Preserve evidence before deleting messages whenever it is safe to do so.",
                sections: [
                    ["1. Preserve evidence", [
                        "Take screenshots.",
                        "Save usernames and profile links.",
                        "Keep messages, emails and relevant dates."
                    ]],
                    ["2. Protect yourself", [
                        "Block or restrict the account when appropriate.",
                        "Review privacy settings.",
                        "Limit who can contact or tag you."
                    ]],
                    ["3. Report the account", [
                        "Use the platform's official reporting option.",
                        "Keep the report confirmation if available."
                    ]],
                    ["4. Serious or immediate threat", [
                        "If you face immediate danger or a physical threat, contact emergency services.",
                        "For cybercrime reporting, use the appropriate police/cybercrime channel."
                    ]],
                    ["5. Keep evidence", [
                        "Screenshots",
                        "Profile URLs",
                        "Usernames",
                        "Phone numbers",
                        "Messages / emails",
                        "Dates and times"
                    ]]
                ]
            },

            identity: {
                title: "Fake Profile / Impersonation",
                subtitle: "Someone is pretending to be you or another person online.",
                important: "Save the fake profile information before it disappears.",
                sections: [
                    ["1. Capture the profile", [
                        "Take screenshots.",
                        "Copy the profile URL.",
                        "Save the username and account details."
                    ]],
                    ["2. Report the profile", [
                        "Use the platform's impersonation or fake-account reporting option.",
                        "Tell people you know if the account is pretending to be you."
                    ]],
                    ["3. Protect your real account", [
                        "Change your password if you suspect compromise.",
                        "Enable two-factor authentication.",
                        "Review active sessions and recovery information."
                    ]],
                    ["4. Keep evidence", [
                        "Profile URL",
                        "Username",
                        "Screenshots",
                        "Messages",
                        "Emails or phone numbers"
                    ]],
                    ["5. Report cybercrime when appropriate", [
                        "Use the National Cyber Crime Reporting Portal for applicable complaints."
                    ]]
                ]
            },

            shopping: {
                title: "Online Shopping Fraud",
                subtitle: "A product, seller, website or payment transaction appears fraudulent.",
                important: "If money has been lost through cyber fraud, call 1930 as soon as possible.",
                sections: [
                    ["1. Stop further payment", [
                        "Do not send additional money for refunds, delivery fees or verification.",
                        "Do not share OTP, PIN or banking credentials."
                    ]],
                    ["2. Contact the platform", [
                        "Use the official customer-support or dispute option.",
                        "Report the seller/listing if it is fraudulent.",
                        "Keep the complaint/reference number."
                    ]],
                    ["3. Contact your bank/payment provider", [
                        "Report the transaction if payment was unauthorized or fraudulent.",
                        "Ask about available dispute procedures."
                    ]],
                    ["4. If money was lost", [
                        "Call 1930 immediately.",
                        "Submit a cybercrime complaint through the National Cyber Crime Reporting Portal."
                    ]],
                    ["5. Keep shopping evidence", [
                        "Order ID",
                        "Transaction ID / UTR",
                        "Seller name",
                        "Seller profile",
                        "Website/app URL",
                        "Product listing",
                        "Chats and emails",
                        "Screenshots",
                        "Delivery/refund messages"
                    ]]
                ]
            },

            job: {
                title: "Fake Job / Work Scam",
                subtitle: "A job offer asks for money, sensitive information or unusual payments.",
                important: "Do not pay money just because someone promises a job, interview or guaranteed employment.",
                sections: [
                    ["1. Stop the payment", [
                        "Do not make another payment.",
                        "Do not share OTP, PIN, password or unnecessary information."
                    ]],
                    ["2. Verify the offer", [
                        "Check the employer through its official website.",
                        "Do not rely only on a recruiter profile, WhatsApp message or forwarded advertisement."
                    ]],
                    ["3. Contact your bank/payment provider", [
                        "If you transferred money, report the transaction immediately."
                    ]],
                    ["4. Call 1930 if money was lost", [
                        "Report financial cyber fraud as soon as possible.",
                        "Then submit the complaint through the National Cyber Crime Reporting Portal."
                    ]],
                    ["5. Keep evidence", [
                        "Job advertisement",
                        "Recruiter profile",
                        "Phone number",
                        "Email address",
                        "Payment details",
                        "Chats",
                        "Website URL",
                        "Screenshots"
                    ]]
                ]
            },

            phone: {
                title: "Lost / Stolen Mobile",
                subtitle: "Find, lock and secure your phone, accounts and mobile number.",
                important: "Act quickly. A lost phone may contain personal, banking and account information.",
                sections: [
                    ["1. 🔎 Try to find your phone", [
                        "Android → use Google Find Hub / Find My Device.",
                        "iPhone → use Apple Find My.",
                        "Try Locate, Play Sound or Mark as Lost when available.",
                        "If the map shows an unfamiliar location, do not confront anyone yourself."
                    ]],
                    ["2. 🔒 Lock the phone", [
                        "Use the official Find Hub or Find My service.",
                        "Mark the device as lost where available.",
                        "Add a contact message if appropriate."
                    ]],
                    ["3. 📞 Secure your SIM", [
                        "Contact your mobile operator.",
                        "Request blocking/replacement of the SIM.",
                        "Keep your mobile number secure."
                    ]],
                    ["4. 🔐 Secure important accounts", [
                        "Change passwords for important accounts.",
                        "Sign out the lost device where possible.",
                        "Secure banking, email and social-media accounts.",
                        "Monitor your bank and UPI transactions."
                    ]],
                    ["5. 👮 Report the loss", [
                        "File a police complaint/report for the lost or stolen phone.",
                        "Keep the complaint details safely."
                    ]],
                    ["6. 📵 Block the IMEI using CEIR", [
                        "Use the official CEIR / Sanchar Saathi service.",
                        "Keep your IMEI number ready if available.",
                        "Keep the required police report and identity documents.",
                        "Save the CEIR Request ID after submitting the request."
                    ]],
                    ["7. 💳 If money was stolen", [
                        "Contact your bank/payment provider immediately.",
                        "Call 1930.",
                        "Report the cybercrime through the National Cyber Crime Reporting Portal."
                    ]]
                ]
            }

        },


        /* =================================================
           MARATHI
           ================================================= */

        mr: {

            money: {
                title: "पैसे गेले / आर्थिक सायबर फसवणूक",
                subtitle: "त्वरित कृती करा. पुढील नुकसान थांबवणे किंवा कमी करणे हे पहिले उद्दिष्ट आहे.",
                important: "सायबर आर्थिक फसवणुकीत पैसे गेले असल्यास तात्काळ 1930 वर कॉल करा.",
                sections: [
                    ["1. पुढील नुकसान थांबवा", [
                        "आणखी पैसे पाठवू नका.",
                        "OTP, UPI PIN, CVV, पासवर्ड किंवा बँकिंग माहिती शेअर करू नका.",
                        "रिमोट ॲक्सेस दिला असल्यास तो बंद करा आणि खाती सुरक्षित करा."
                    ]],
                    ["2. बँक / पेमेंट सेवा प्रदात्याशी संपर्क करा", [
                        "अनधिकृत व्यवहाराची त्वरित माहिती द्या.",
                        "व्यवहार थांबवणे किंवा तक्रार करण्याची उपलब्ध प्रक्रिया विचारा.",
                        "व्यवहार क्रमांक जतन करा."
                    ]],
                    ["3. 1930 वर कॉल करा", [
                        "राष्ट्रीय सायबर आर्थिक फसवणूक हेल्पलाइनवर कॉल करा.",
                        "व्यवहाराची माहिती तयार ठेवा.",
                        "घटना शक्य तितक्या लवकर रिपोर्ट करा."
                    ]],
                    ["4. ऑनलाइन तक्रार करा", [
                        "National Cyber Crime Reporting Portal वर तक्रार करा.",
                        "तक्रार / acknowledgement माहिती जतन करा."
                    ]],
                    ["5. हे पुरावे जतन करा", [
                        "Transaction ID / UTR",
                        "बँक किंवा वॉलेट माहिती",
                        "स्क्रीनशॉट",
                        "UPI ID / फोन नंबर",
                        "संदेश, ईमेल किंवा चॅट",
                        "वेबसाइट किंवा प्रोफाइल लिंक"
                    ]]
                ]
            },

            otp: {
                title: "बनावट कॉल / OTP फसवणूक",
                subtitle: "कोणीतरी OTP, PIN किंवा वैयक्तिक माहिती मागितली आहे.",
                important: "कॉल करणाऱ्या व्यक्तीला OTP, UPI PIN, CVV, पासवर्ड किंवा बँकिंग माहिती देऊ नका.",
                sections: [
                    ["1. संभाषण थांबवा", [
                        "OTP किंवा verification code देऊ नका.",
                        "UPI PIN, CVV किंवा पासवर्ड देऊ नका.",
                        "कोणी सांगितले म्हणून ॲप इंस्टॉल किंवा रिमोट ॲक्सेस देऊ नका."
                    ]],
                    ["2. तुमची खाती तपासा", [
                        "बँक आणि UPI व्यवहार तपासा.",
                        "खाते, ईमेल किंवा सोशल मीडिया पासवर्ड बदलला आहे का ते तपासा.",
                        "माहिती शेअर केली असल्यास पासवर्ड त्वरित बदला."
                    ]],
                    ["3. पैसे गेले असल्यास", [
                        "बँक / पेमेंट सेवा प्रदात्याशी त्वरित संपर्क करा.",
                        "1930 वर कॉल करा.",
                        "National Cyber Crime Reporting Portal वर तक्रार करा."
                    ]],
                    ["4. पुरावे जतन करा", [
                        "कॉल करणाऱ्याचा फोन नंबर",
                        "SMS / WhatsApp संदेश",
                        "स्क्रीनशॉट",
                        "व्यवहार माहिती",
                        "ईमेल किंवा मिळालेल्या लिंक"
                    ]]
                ]
            },

            suspicious: {
                title: "संशयास्पद लिंक / फिशिंग",
                subtitle: "तुम्हाला संशयास्पद वेबसाइट, संदेश किंवा लॉगिन लिंक मिळाली किंवा तुम्ही ती उघडली.",
                important: "संशयास्पद वेबसाइटवर पासवर्ड, OTP, कार्ड माहिती किंवा इतर संवेदनशील माहिती टाकू नका.",
                sections: [
                    ["1. लिंक उघडली नसेल तर", [
                        "लिंक उघडू नका.",
                        "काहीही डाउनलोड करू नका.",
                        "संशयास्पद संदेश डिलीट किंवा रिपोर्ट करा."
                    ]],
                    ["2. लिंक उघडली असल्यास", [
                        "संशयास्पद पेज बंद करा.",
                        "आणखी माहिती टाकू नका.",
                        "अनोळखी ॲप किंवा फाइल डाउनलोड करू नका."
                    ]],
                    ["3. पासवर्ड टाकला असल्यास", [
                        "पासवर्ड त्वरित बदला.",
                        "मजबूत आणि वेगळा पासवर्ड वापरा.",
                        "Two-factor authentication सुरू करा.",
                        "उपलब्ध असल्यास संशयास्पद sessions मधून sign out करा."
                    ]],
                    ["4. बँकिंग माहिती दिली असल्यास", [
                        "बँक / पेमेंट सेवा प्रदात्याशी त्वरित संपर्क करा.",
                        "व्यवहार तपासा.",
                        "पैसे गेले असल्यास 1930 वर कॉल करा."
                    ]],
                    ["5. पुरावे जतन करा", [
                        "संशयास्पद URL",
                        "संदेशाचा स्क्रीनशॉट",
                        "पाठवणाऱ्याची माहिती",
                        "ईमेल / फोन नंबर",
                        "डाउनलोड झालेल्या फाइलचे नाव"
                    ]]
                ]
            },

            social: {
                title: "सोशल मीडिया खाते हॅक झाले",
                subtitle: "कोणीतरी तुमच्या सोशल मीडिया खात्यात प्रवेश केला किंवा ते ताब्यात घेतले.",
                important: "प्रथम खाते सुरक्षित करा आणि हॅकर तुमच्या नावाने संदेश पाठवत असल्यास संपर्कांना सावध करा.",
                sections: [
                    ["1. खाते परत मिळवण्याचा प्रयत्न करा", [
                        "प्लॅटफॉर्मची अधिकृत account recovery प्रक्रिया वापरा.",
                        "अधिकृत नसलेल्या recovery सेवांचा वापर करू नका."
                    ]],
                    ["2. पासवर्ड बदला", [
                        "नवीन मजबूत पासवर्ड तयार करा.",
                        "हॅक झालेला पासवर्ड इतरत्र वापरू नका."
                    ]],
                    ["3. खाते सुरक्षित करा", [
                        "Two-factor authentication सुरू करा.",
                        "Active login sessions तपासा.",
                        "अनोळखी devices काढा.",
                        "Recovery email आणि phone number तपासा.",
                        "संशयास्पद third-party apps काढा."
                    ]],
                    ["4. संपर्कांना सावध करा", [
                        "तुमचे खाते हॅक झाल्याचे मित्र आणि कुटुंबाला सांगा.",
                        "तुमच्या खात्यावरून आलेल्या संशयास्पद संदेशांवर विश्वास ठेवू नका असे सांगा."
                    ]],
                    ["5. पुरावे जतन करा", [
                        "Profile URL",
                        "स्क्रीनशॉट",
                        "संशयास्पद संदेश",
                        "Login alerts",
                        "Recovery emails"
                    ]]
                ]
            },

            harassment: {
                title: "सायबर छळ / ऑनलाइन पाठलाग",
                subtitle: "तुम्हाला त्रासदायक, धमकीचे किंवा वारंवार ऑनलाइन संदेश मिळत आहेत.",
                important: "सुरक्षित असल्यास संदेश डिलीट करण्यापूर्वी पुरावे जतन करा.",
                sections: [
                    ["1. पुरावे जतन करा", [
                        "स्क्रीनशॉट घ्या.",
                        "Username आणि profile links जतन करा.",
                        "संदेश, ईमेल आणि संबंधित तारीख जतन करा."
                    ]],
                    ["2. स्वतःचे संरक्षण करा", [
                        "गरजेनुसार खाते block किंवा restrict करा.",
                        "Privacy settings तपासा.",
                        "कोण तुम्हाला contact किंवा tag करू शकते ते मर्यादित करा."
                    ]],
                    ["3. खात्याची तक्रार करा", [
                        "प्लॅटफॉर्मचा अधिकृत reporting option वापरा.",
                        "Report confirmation असल्यास जतन करा."
                    ]],
                    ["4. गंभीर किंवा तातडीची धमकी", [
                        "तातडीचा धोका किंवा शारीरिक धमकी असल्यास emergency services शी संपर्क करा.",
                        "सायबर गुन्ह्यासाठी योग्य पोलीस / सायबरक्राइम माध्यम वापरा."
                    ]],
                    ["5. पुरावे जतन करा", [
                        "स्क्रीनशॉट",
                        "Profile URLs",
                        "Usernames",
                        "फोन नंबर",
                        "Messages / emails",
                        "तारीख आणि वेळ"
                    ]]
                ]
            },

            identity: {
                title: "बनावट प्रोफाइल / ओळख वापरणे",
                subtitle: "कोणी तुमची किंवा दुसऱ्या व्यक्तीची ओळख वापरून ऑनलाइन प्रोफाइल तयार केले आहे.",
                important: "बनावट प्रोफाइल गायब होण्यापूर्वी त्याची माहिती जतन करा.",
                sections: [
                    ["1. प्रोफाइल जतन करा", [
                        "स्क्रीनशॉट घ्या.",
                        "Profile URL कॉपी करा.",
                        "Username आणि खाते माहिती जतन करा."
                    ]],
                    ["2. प्रोफाइल रिपोर्ट करा", [
                        "प्लॅटफॉर्मचा impersonation / fake account reporting option वापरा.",
                        "ते तुमची ओळख वापरत असल्यास परिचितांना कळवा."
                    ]],
                    ["3. तुमचे खरे खाते सुरक्षित करा", [
                        "खाते धोक्यात असल्यास पासवर्ड बदला.",
                        "Two-factor authentication सुरू करा.",
                        "Active sessions आणि recovery माहिती तपासा."
                    ]],
                    ["4. पुरावे जतन करा", [
                        "Profile URL",
                        "Username",
                        "स्क्रीनशॉट",
                        "Messages",
                        "ईमेल किंवा फोन नंबर"
                    ]],
                    ["5. आवश्यक असल्यास सायबर तक्रार करा", [
                        "लागू असल्यास National Cyber Crime Reporting Portal वापरा."
                    ]]
                ]
            },

            shopping: {
                title: "ऑनलाइन खरेदी फसवणूक",
                subtitle: "विक्रेता, वेबसाइट, वस्तू किंवा पेमेंट फसवे वाटत आहे.",
                important: "सायबर फसवणुकीत पैसे गेले असल्यास शक्य तितक्या लवकर 1930 वर कॉल करा.",
                sections: [
                    ["1. पुढील पेमेंट थांबवा", [
                        "Refund, delivery fee किंवा verification साठी आणखी पैसे देऊ नका.",
                        "OTP, PIN किंवा बँकिंग माहिती देऊ नका."
                    ]],
                    ["2. प्लॅटफॉर्मशी संपर्क करा", [
                        "अधिकृत customer support किंवा dispute option वापरा.",
                        "फसव्या विक्रेत्याची / listing ची तक्रार करा.",
                        "Complaint/reference number जतन करा."
                    ]],
                    ["3. बँक / पेमेंट सेवा प्रदात्याशी संपर्क करा", [
                        "अनधिकृत किंवा फसव्या व्यवहाराची माहिती द्या.",
                        "उपलब्ध dispute प्रक्रिया विचारा."
                    ]],
                    ["4. पैसे गेले असल्यास", [
                        "तात्काळ 1930 वर कॉल करा.",
                        "National Cyber Crime Reporting Portal वर तक्रार करा."
                    ]],
                    ["5. खरेदीचे पुरावे जतन करा", [
                        "Order ID",
                        "Transaction ID / UTR",
                        "Seller name",
                        "Seller profile",
                        "Website/app URL",
                        "Product listing",
                        "Chats आणि emails",
                        "Screenshots",
                        "Delivery/refund messages"
                    ]]
                ]
            },

            job: {
                title: "बनावट नोकरी / कामाची फसवणूक",
                subtitle: "नोकरीच्या ऑफरमध्ये पैसे, संवेदनशील माहिती किंवा संशयास्पद पेमेंट मागितले जात आहे.",
                important: "नोकरी, मुलाखत किंवा हमीदार रोजगाराचे आश्वासन देऊन कोणी पैसे मागितले म्हणून पैसे देऊ नका.",
                sections: [
                    ["1. पेमेंट थांबवा", [
                        "आणखी पैसे देऊ नका.",
                        "OTP, PIN, पासवर्ड किंवा अनावश्यक माहिती देऊ नका."
                    ]],
                    ["2. ऑफर तपासा", [
                        "कंपनीची अधिकृत वेबसाइट तपासा.",
                        "फक्त recruiter profile, WhatsApp message किंवा forwarded advertisement वर विश्वास ठेवू नका."
                    ]],
                    ["3. बँक / पेमेंट सेवा प्रदात्याशी संपर्क करा", [
                        "पैसे ट्रान्सफर केले असल्यास व्यवहाराची त्वरित माहिती द्या."
                    ]],
                    ["4. पैसे गेले असल्यास 1930 वर कॉल करा", [
                        "सायबर आर्थिक फसवणूक त्वरित रिपोर्ट करा.",
                        "त्यानंतर National Cyber Crime Reporting Portal वर तक्रार करा."
                    ]],
                    ["5. पुरावे जतन करा", [
                        "Job advertisement",
                        "Recruiter profile",
                        "Phone number",
                        "Email address",
                        "Payment details",
                        "Chats",
                        "Website URL",
                        "Screenshots"
                    ]]
                ]
            },

            phone: {
                title: "मोबाईल हरवला / चोरीला गेला",
                subtitle: "मोबाईल शोधा, लॉक करा आणि फोन, खाती व मोबाईल नंबर सुरक्षित करा.",
                important: "त्वरित कृती करा. हरवलेल्या मोबाईलमध्ये वैयक्तिक, बँकिंग आणि खात्यांची माहिती असू शकते.",
                sections: [
                    ["1. 🔎 मोबाईल शोधण्याचा प्रयत्न करा", [
                        "Android → Google Find Hub / Find My Device वापरा.",
                        "iPhone → Apple Find My वापरा.",
                        "उपलब्ध असल्यास Locate, Play Sound किंवा Mark as Lost वापरा.",
                        "नकाशावर अनोळखी ठिकाण दिसल्यास स्वतः तिथे जाऊन सामना करू नका."
                    ]],
                    ["2. 🔒 मोबाईल लॉक करा", [
                        "अधिकृत Find Hub किंवा Find My सेवा वापरा.",
                        "उपलब्ध असल्यास device ला Lost म्हणून mark करा.",
                        "योग्य असल्यास contact message जोडा."
                    ]],
                    ["3. 📞 SIM सुरक्षित करा", [
                        "मोबाईल ऑपरेटरशी संपर्क करा.",
                        "SIM block / replacement मागा.",
                        "तुमचा मोबाईल नंबर सुरक्षित ठेवा."
                    ]],
                    ["4. 🔐 महत्त्वाची खाती सुरक्षित करा", [
                        "महत्त्वाच्या खात्यांचे पासवर्ड बदला.",
                        "शक्य असल्यास हरवलेल्या device मधून sign out करा.",
                        "बँकिंग, ईमेल आणि सोशल मीडिया खाती सुरक्षित करा.",
                        "बँक आणि UPI व्यवहार तपासा."
                    ]],
                    ["5. 👮 मोबाईल हरवल्याची तक्रार करा", [
                        "हरवलेल्या किंवा चोरी झालेल्या मोबाईलची पोलीस तक्रार करा.",
                        "तक्रारीची माहिती सुरक्षित ठेवा."
                    ]],
                    ["6. 📵 CEIR द्वारे IMEI ब्लॉक करा", [
                        "अधिकृत CEIR / Sanchar Saathi सेवा वापरा.",
                        "उपलब्ध असल्यास IMEI नंबर तयार ठेवा.",
                        "आवश्यक पोलीस तक्रार आणि ओळख कागदपत्रे तयार ठेवा.",
                        "Request ID जतन करा."
                    ]],
                    ["7. 💳 पैसे चोरीला गेले असल्यास", [
                        "बँक / पेमेंट सेवा प्रदात्याशी त्वरित संपर्क करा.",
                        "1930 वर कॉल करा.",
                        "National Cyber Crime Reporting Portal वर तक्रार करा."
                    ]]
                ]
            }

        },


        /* =================================================
           HINDI
           ================================================= */

        hi: {

            money: {
                title: "पैसे चले गए / साइबर वित्तीय धोखाधड़ी",
                subtitle: "जल्दी कार्रवाई करें। सबसे पहले आगे होने वाले नुकसान को रोकें या कम करें।",
                important: "अगर साइबर वित्तीय धोखाधड़ी में पैसे चले गए हैं, तो तुरंत 1930 पर कॉल करें.",
                sections: [
                    ["1. आगे का नुकसान रोकें", [
                        "और पैसे न भेजें।",
                        "OTP, UPI PIN, CVV, पासवर्ड या बैंकिंग जानकारी साझा न करें।",
                        "अगर रिमोट एक्सेस दिया है, तो उसे बंद करें और अपने अकाउंट सुरक्षित करें।"
                    ]],
                    ["2. बैंक / पेमेंट सेवा से संपर्क करें", [
                        "अनधिकृत लेनदेन की तुरंत जानकारी दें।",
                        "ब्लॉक या dispute प्रक्रिया के बारे में पूछें।",
                        "Transaction reference number सुरक्षित रखें।"
                    ]],
                    ["3. 1930 पर कॉल करें", [
                        "राष्ट्रीय साइबर वित्तीय धोखाधड़ी हेल्पलाइन पर कॉल करें।",
                        "लेनदेन की जानकारी तैयार रखें।",
                        "जितनी जल्दी हो सके घटना रिपोर्ट करें।"
                    ]],
                    ["4. ऑनलाइन रिपोर्ट करें", [
                        "National Cyber Crime Reporting Portal पर शिकायत करें।",
                        "Acknowledgement / complaint details सुरक्षित रखें।"
                    ]],
                    ["5. ये सबूत सुरक्षित रखें", [
                        "Transaction ID / UTR",
                        "बैंक या वॉलेट जानकारी",
                        "स्क्रीनशॉट",
                        "UPI ID / फोन नंबर",
                        "मैसेज, ईमेल या चैट",
                        "वेबसाइट या प्रोफाइल URL"
                    ]]
                ]
            },

            otp: {
                title: "फर्जी कॉल / OTP धोखाधड़ी",
                subtitle: "किसी ने OTP, PIN या व्यक्तिगत जानकारी मांगी है।",
                important: "कॉल करने वाले व्यक्ति के साथ OTP, UPI PIN, CVV, पासवर्ड या बैंकिंग जानकारी साझा न करें।",
                sections: [
                    ["1. बातचीत समाप्त करें", [
                        "OTP या verification code साझा न करें।",
                        "UPI PIN, CVV या पासवर्ड साझा न करें।",
                        "किसी के कहने पर ऐप इंस्टॉल या remote access न दें।"
                    ]],
                    ["2. अपने अकाउंट जांचें", [
                        "बैंक और UPI transactions जांचें।",
                        "देखें कि अकाउंट, ईमेल या सोशल मीडिया पासवर्ड बदला तो नहीं।",
                        "अगर जानकारी साझा की है तो पासवर्ड तुरंत बदलें।"
                    ]],
                    ["3. अगर पैसे चले गए", [
                        "बैंक / पेमेंट सेवा से तुरंत संपर्क करें।",
                        "1930 पर कॉल करें।",
                        "National Cyber Crime Reporting Portal पर शिकायत करें।"
                    ]],
                    ["4. सबूत सुरक्षित रखें", [
                        "कॉल करने वाले का फोन नंबर",
                        "SMS / WhatsApp messages",
                        "स्क्रीनशॉट",
                        "Transaction details",
                        "ईमेल या प्राप्त लिंक"
                    ]]
                ]
            },

            suspicious: {
                title: "संदिग्ध लिंक / फिशिंग",
                subtitle: "आपको संदिग्ध वेबसाइट, मैसेज या लॉगिन लिंक मिला या आपने उसे खोला।",
                important: "संदिग्ध वेबसाइट पर पासवर्ड, OTP, कार्ड विवरण या अन्य संवेदनशील जानकारी न डालें।",
                sections: [
                    ["1. लिंक नहीं खोला है", [
                        "लिंक न खोलें।",
                        "कुछ डाउनलोड न करें।",
                        "संदिग्ध संदेश को डिलीट या रिपोर्ट करें।"
                    ]],
                    ["2. लिंक खोल दिया है", [
                        "संदिग्ध पेज बंद करें।",
                        "आगे कोई जानकारी न डालें।",
                        "अज्ञात ऐप या फाइल डाउनलोड न करें।"
                    ]],
                    ["3. पासवर्ड डाल दिया है", [
                        "पासवर्ड तुरंत बदलें।",
                        "मजबूत और अलग पासवर्ड इस्तेमाल करें।",
                        "Two-factor authentication चालू करें।",
                        "जहाँ उपलब्ध हो, संदिग्ध sessions से sign out करें।"
                    ]],
                    ["4. बैंकिंग जानकारी साझा हुई है", [
                        "बैंक / पेमेंट सेवा से तुरंत संपर्क करें।",
                        "Transactions जांचें।",
                        "पैसे चले गए हों तो 1930 पर कॉल करें।"
                    ]],
                    ["5. सबूत सुरक्षित रखें", [
                        "संदिग्ध URL",
                        "मैसेज का स्क्रीनशॉट",
                        "Sender details",
                        "ईमेल / फोन नंबर",
                        "डाउनलोड की गई फाइल का नाम"
                    ]]
                ]
            },

            social: {
                title: "सोशल मीडिया अकाउंट हैक",
                subtitle: "किसी ने आपके सोशल मीडिया अकाउंट में प्रवेश किया या उसे अपने नियंत्रण में लिया।",
                important: "पहले अकाउंट सुरक्षित करें और अगर हैकर आपके अकाउंट से संदेश भेज रहा है तो अपने contacts को बताएं।",
                sections: [
                    ["1. अकाउंट रिकवरी करें", [
                        "प्लेटफॉर्म की official account recovery प्रक्रिया इस्तेमाल करें।",
                        "अनौपचारिक recovery services का इस्तेमाल न करें।"
                    ]],
                    ["2. पासवर्ड बदलें", [
                        "नया मजबूत पासवर्ड बनाएं।",
                        "Compromised password कहीं और इस्तेमाल न करें।"
                    ]],
                    ["3. अकाउंट सुरक्षित करें", [
                        "Two-factor authentication चालू करें।",
                        "Active login sessions जांचें।",
                        "अज्ञात devices हटाएं।",
                        "Recovery email और phone number जांचें।",
                        "संदिग्ध third-party apps हटाएं।"
                    ]],
                    ["4. अपने contacts को सावधान करें", [
                        "मित्रों और परिवार को बताएं कि अकाउंट compromised है।",
                        "उनसे कहें कि आपके अकाउंट से आए संदिग्ध messages पर भरोसा न करें।"
                    ]],
                    ["5. सबूत सुरक्षित रखें", [
                        "Profile URL",
                        "स्क्रीनशॉट",
                        "संदिग्ध संदेश",
                        "Login alerts",
                        "Recovery emails"
                    ]]
                ]
            },

            harassment: {
                title: "साइबर उत्पीड़न / ऑनलाइन पीछा",
                subtitle: "आपको धमकी, परेशान करने वाले या बार-बार ऑनलाइन संदेश मिल रहे हैं।",
                important: "सुरक्षित होने पर संदेश डिलीट करने से पहले सबूत सुरक्षित रखें।",
                sections: [
                    ["1. सबूत सुरक्षित रखें", [
                        "स्क्रीनशॉट लें।",
                        "Username और profile links सुरक्षित रखें।",
                        "Messages, emails और तारीख सुरक्षित रखें।"
                    ]],
                    ["2. खुद को सुरक्षित करें", [
                        "जरूरत के अनुसार account block या restrict करें।",
                        "Privacy settings जांचें।",
                        "कौन आपको contact या tag कर सकता है उसे सीमित करें।"
                    ]],
                    ["3. अकाउंट रिपोर्ट करें", [
                        "प्लेटफॉर्म का official reporting option इस्तेमाल करें।",
                        "Report confirmation हो तो सुरक्षित रखें।"
                    ]],
                    ["4. गंभीर या तुरंत खतरा", [
                        "अगर तुरंत खतरा या शारीरिक धमकी है तो emergency services से संपर्क करें।",
                        "साइबर अपराध के लिए उचित police / cybercrime channel का उपयोग करें।"
                    ]],
                    ["5. सबूत सुरक्षित रखें", [
                        "स्क्रीनशॉट",
                        "Profile URLs",
                        "Usernames",
                        "फोन नंबर",
                        "Messages / emails",
                        "तारीख और समय"
                    ]]
                ]
            },

            identity: {
                title: "फर्जी प्रोफाइल / पहचान का गलत उपयोग",
                subtitle: "कोई आपकी या किसी अन्य व्यक्ति की पहचान का उपयोग करके ऑनलाइन प्रोफाइल बना रहा है।",
                important: "फर्जी प्रोफाइल हटने से पहले उसकी जानकारी सुरक्षित रखें।",
                sections: [
                    ["1. प्रोफाइल सुरक्षित करें", [
                        "स्क्रीनशॉट लें।",
                        "Profile URL कॉपी करें।",
                        "Username और account details सुरक्षित रखें।"
                    ]],
                    ["2. प्रोफाइल रिपोर्ट करें", [
                        "प्लेटफॉर्म का impersonation / fake account reporting option इस्तेमाल करें।",
                        "अगर आपकी पहचान का उपयोग हुआ है तो परिचितों को बताएं।"
                    ]],
                    ["3. अपना असली अकाउंट सुरक्षित करें", [
                        "अकाउंट खतरे में हो तो पासवर्ड बदलें।",
                        "Two-factor authentication चालू करें।",
                        "Active sessions और recovery information जांचें।"
                    ]],
                    ["4. सबूत सुरक्षित रखें", [
                        "Profile URL",
                        "Username",
                        "स्क्रीनशॉट",
                        "Messages",
                        "ईमेल या फोन नंबर"
                    ]],
                    ["5. जरूरत होने पर साइबर रिपोर्ट करें", [
                        "लागू होने पर National Cyber Crime Reporting Portal का उपयोग करें।"
                    ]]
                ]
            },

            shopping: {
                title: "ऑनलाइन शॉपिंग धोखाधड़ी",
                subtitle: "विक्रेता, वेबसाइट, सामान या भुगतान संदिग्ध लगता है।",
                important: "अगर साइबर धोखाधड़ी में पैसे चले गए हैं तो जल्द से जल्द 1930 पर कॉल करें।",
                sections: [
                    ["1. आगे भुगतान रोकें", [
                        "Refund, delivery fee या verification के नाम पर और पैसे न दें।",
                        "OTP, PIN या बैंकिंग जानकारी साझा न करें।"
                    ]],
                    ["2. प्लेटफॉर्म से संपर्क करें", [
                        "Official customer support या dispute option इस्तेमाल करें।",
                        "फर्जी seller/listing को रिपोर्ट करें।",
                        "Complaint/reference number सुरक्षित रखें।"
                    ]],
                    ["3. बैंक / पेमेंट सेवा से संपर्क करें", [
                        "अनधिकृत या फर्जी transaction की जानकारी दें।",
                        "उपलब्ध dispute प्रक्रिया के बारे में पूछें।"
                    ]],
                    ["4. पैसे चले गए हैं", [
                        "तुरंत 1930 पर कॉल करें।",
                        "National Cyber Crime Reporting Portal पर शिकायत करें।"
                    ]],
                    ["5. खरीदारी के सबूत सुरक्षित रखें", [
                        "Order ID",
                        "Transaction ID / UTR",
                        "Seller name",
                        "Seller profile",
                        "Website/app URL",
                        "Product listing",
                        "Chats और emails",
                        "Screenshots",
                        "Delivery/refund messages"
                    ]]
                ]
            },

            job: {
                title: "फर्जी नौकरी / काम का घोटाला",
                subtitle: "नौकरी के नाम पर पैसे, संवेदनशील जानकारी या असामान्य भुगतान मांगा जा रहा है।",
                important: "नौकरी, इंटरव्यू या पक्के रोजगार के वादे पर सिर्फ इसलिए पैसे न दें क्योंकि कोई मांग रहा है।",
                sections: [
                    ["1. भुगतान रोकें", [
                        "और पैसे न दें।",
                        "OTP, PIN, पासवर्ड या अनावश्यक जानकारी साझा न करें।"
                    ]],
                    ["2. ऑफर की जांच करें", [
                        "कंपनी की official website से जानकारी जांचें।",
                        "केवल recruiter profile, WhatsApp message या forwarded advertisement पर भरोसा न करें।"
                    ]],
                    ["3. बैंक / पेमेंट सेवा से संपर्क करें", [
                        "अगर पैसे भेजे हैं तो transaction की तुरंत जानकारी दें।"
                    ]],
                    ["4. पैसे चले गए हैं तो 1930 पर कॉल करें", [
                        "साइबर वित्तीय धोखाधड़ी की जल्द रिपोर्ट करें।",
                        "फिर National Cyber Crime Reporting Portal पर शिकायत करें।"
                    ]],
                    ["5. सबूत सुरक्षित रखें", [
                        "Job advertisement",
                        "Recruiter profile",
                        "Phone number",
                        "Email address",
                        "Payment details",
                        "Chats",
                        "Website URL",
                        "Screenshots"
                    ]]
                ]
            },

            phone: {
                title: "मोबाइल खो गया / चोरी हो गया",
                subtitle: "मोबाइल खोजें, लॉक करें और फोन, अकाउंट और मोबाइल नंबर सुरक्षित करें।",
                important: "जल्दी कार्रवाई करें। खोए हुए फोन में व्यक्तिगत, बैंकिंग और अकाउंट की जानकारी हो सकती है।",
                sections: [
                    ["1. 🔎 मोबाइल खोजने की कोशिश करें", [
                        "Android → Google Find Hub / Find My Device इस्तेमाल करें।",
                        "iPhone → Apple Find My इस्तेमाल करें।",
                        "उपलब्ध होने पर Locate, Play Sound या Mark as Lost इस्तेमाल करें।",
                        "अगर नक्शे पर अनजान जगह दिखाई दे तो खुद वहां जाकर सामना न करें।"
                    ]],
                    ["2. 🔒 फोन लॉक करें", [
                        "Official Find Hub या Find My service इस्तेमाल करें।",
                        "उपलब्ध होने पर device को Lost के रूप में mark करें।",
                        "जरूरत हो तो contact message जोड़ें।"
                    ]],
                    ["3. 📞 SIM सुरक्षित करें", [
                        "अपने mobile operator से संपर्क करें।",
                        "SIM block / replacement मांगें।",
                        "अपना मोबाइल नंबर सुरक्षित रखें।"
                    ]],
                    ["4. 🔐 जरूरी अकाउंट सुरक्षित करें", [
                        "महत्वपूर्ण अकाउंट के passwords बदलें।",
                        "जहां संभव हो खोए हुए device से sign out करें।",
                        "बैंकिंग, ईमेल और सोशल मीडिया अकाउंट सुरक्षित करें।",
                        "बैंक और UPI transactions जांचें।"
                    ]],
                    ["5. 👮 मोबाइल खोने की रिपोर्ट करें", [
                        "खोए या चोरी हुए मोबाइल की police complaint/report करें।",
                        "Complaint details सुरक्षित रखें।"
                    ]],
                    ["6. 📵 CEIR से IMEI ब्लॉक करें", [
                        "Official CEIR / Sanchar Saathi service इस्तेमाल करें।",
                        "अगर उपलब्ध है तो IMEI number तैयार रखें।",
                        "जरूरी police report और identity documents तैयार रखें।",
                        "Request ID सुरक्षित रखें।"
                    ]],
                    ["7. 💳 अगर पैसे चोरी हुए", [
                        "बैंक / पेमेंट सेवा से तुरंत संपर्क करें।",
                        "1930 पर कॉल करें।",
                        "National Cyber Crime Reporting Portal पर शिकायत करें।"
                    ]]
                ]
            }

        }

    };


    /* =====================================================
       PAGE TRANSLATION FUNCTION
       ===================================================== */

    function translatePage() {

        const language =
            translations[currentLanguage];

        if (!language) {
            return;
        }

        document.documentElement.lang =
            currentLanguage;


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (language[key] !== undefined) {

                    element.innerHTML =
                        language[key];

                }

            });

        localStorage.setItem(
            "nirbhay_language",
            currentLanguage
        );
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
       GUIDE ACTION BUTTONS
       ===================================================== */

    function getActions(type) {

        if (type === "phone") {

            return [

                {
                    text:
                        currentLanguage === "mr"
                            ? "🔎 Android शोधा"
                            : currentLanguage === "hi"
                                ? "🔎 Android खोजें"
                                : "🔎 Find Android",

                    url: LINKS.android
                },

                {
                    text:
                        currentLanguage === "mr"
                            ? "🍎 iPhone शोधा"
                            : currentLanguage === "hi"
                                ? "🍎 iPhone खोजें"
                                : "🍎 Find iPhone",

                    url: LINKS.iphone
                },

                {
                    text:
                        currentLanguage === "mr"
                            ? "📵 CEIR"
                            : currentLanguage === "hi"
                                ? "📵 CEIR"
                                : "📵 CEIR",

                    url: LINKS.ceir
                },

                {
                    text:
                        currentLanguage === "mr"
                            ? "📞 1930"
                            : currentLanguage === "hi"
                                ? "📞 1930"
                                : "📞 Call 1930",

                    url: LINKS.helpline
                }

            ];
        }


        if (
            type === "money" ||
            type === "otp" ||
            type === "shopping" ||
            type === "job"
        ) {

            return [

                {
                    text:
                        currentLanguage === "mr"
                            ? "📞 1930 वर कॉल करा"
                            : currentLanguage === "hi"
                                ? "📞 1930 पर कॉल करें"
                                : "📞 Call 1930",

                    url: LINKS.helpline
                },

                {
                    text:
                        currentLanguage === "mr"
                            ? "🌐 सायबर तक्रार"
                            : currentLanguage === "hi"
                                ? "🌐 साइबर रिपोर्ट करें"
                                : "🌐 Report Cybercrime",

                    url: LINKS.cyberCrime
                }

            ];
        }


        if (type === "harassment") {

            return [

                {
                    text:
                        currentLanguage === "mr"
                            ? "🚨 आपत्कालीन 112"
                            : currentLanguage === "hi"
                                ? "🚨 आपातकाल 112"
                                : "🚨 Emergency 112",

                    url: LINKS.emergency
                },

                {
                    text:
                        currentLanguage === "mr"
                            ? "🌐 सायबर तक्रार"
                            : currentLanguage === "hi"
                                ? "🌐 साइबर रिपोर्ट करें"
                                : "🌐 Report Cybercrime",

                    url: LINKS.cyberCrime
                }

            ];
        }


        return [

            {
                text:
                    currentLanguage === "mr"
                        ? "🌐 सायबर तक्रार"
                        : currentLanguage === "hi"
                            ? "🌐 साइबर रिपोर्ट करें"
                            : "🌐 Report Cybercrime",

                url: LINKS.cyberCrime
            }

        ];
    }


    /* =====================================================
       SHOW GUIDE
       ===================================================== */

    function showGuide(type) {

        const language =
            guideTranslations[currentLanguage];

        const guide =
            language?.[type];

        const guideModal =
            document.getElementById("guideModal");

        const guideContent =
            document.getElementById("guideContent");

        if (!guide || !guideModal || !guideContent) {
            return;
        }


        let html = `

            <div class="guide-header">

                <div class="guide-label">
                    ${currentLanguage === "mr"
                        ? "NIRBHAYSETU मार्गदर्शित कृती"
                        : currentLanguage === "hi"
                            ? "NIRBHAYSETU निर्देशित कार्रवाई"
                            : "NIRBHAYSETU GUIDED ACTION"}
                </div>

                <h1>
                    ${escapeHTML(guide.title)}
                </h1>

                <p>
                    ${escapeHTML(guide.subtitle)}
                </p>

            </div>

        `;


        html += `

            <div class="guide-important">

                <h2>
                    🚨 ${
                        currentLanguage === "mr"
                            ? "महत्त्वाचे"
                            : currentLanguage === "hi"
                                ? "महत्वपूर्ण"
                                : "Important"
                    }
                </h2>

                <p>
                    ${escapeHTML(guide.important)}
                </p>

            </div>

        `;


        guide.sections.forEach(section => {

            html += `

                <div class="guide-section">

                    <h2>
                        ${escapeHTML(section[0])}
                    </h2>

                    <ul>
            `;


            section[1].forEach(item => {

                html += `

                    <li>
                        ${escapeHTML(item)}
                    </li>

                `;

            });


            html += `

                    </ul>

                </div>

            `;

        });


        const actions =
            getActions(type);


        html += `

            <div class="guide-actions">

                <h2>
                    ${
                        currentLanguage === "mr"
                            ? "⚡ जलद कृती"
                            : currentLanguage === "hi"
                                ? "⚡ तुरंत कार्रवाई"
                                : "⚡ Quick Actions"
                    }
                </h2>

                <div class="action-buttons">

        `;


        actions.forEach(action => {

            html += `

                <a
                    class="guide-action-btn"
                    href="${escapeHTML(action.url)}"
                    target="_blank"
                    rel="noopener noreferrer">

                    ${escapeHTML(action.text)}

                </a>

            `;

        });


        html += `

                </div>

            </div>

        `;


        guideContent.innerHTML =
            html;

        guideModal.classList.add("active");

        guideModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }


    /* =====================================================
       CLOSE MODALS
       ===================================================== */

    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    }


    const helpModal =
        document.getElementById("helpModal");

    const guideModal =
        document.getElementById("guideModal");

    const helpNowBtn =
        document.getElementById("helpNowBtn");

    const closeHelpModal =
        document.getElementById("closeHelpModal");

    const closeGuideModal =
        document.getElementById("closeGuideModal");


    helpNowBtn.addEventListener(
        "click",
        () => {

            helpModal.classList.add("active");

            helpModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";
        }
    );


    closeHelpModal.addEventListener(
        "click",
        () => closeModal(helpModal)
    );


    closeGuideModal.addEventListener(
        "click",
        () => closeModal(guideModal)
    );


    window.addEventListener(
        "click",
        event => {

            if (event.target === helpModal) {
                closeModal(helpModal);
            }

            if (event.target === guideModal) {
                closeModal(guideModal);
            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeModal(helpModal);
                closeModal(guideModal);

            }

        }
    );


    /* =====================================================
       SITUATION CARDS
       ===================================================== */

    document
        .querySelectorAll("[data-guide]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    showGuide(
                        card.dataset.guide
                    );

                }
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        showGuide(
                            card.dataset.guide
                        );

                    }

                }
            );

        });


    /* =====================================================
       LANGUAGE SELECTOR
       ===================================================== */

    languageSelect.addEventListener(
        "change",
        event => {

            currentLanguage =
                event.target.value;

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
            "nirbhay_large_text"
        ) === "true";


    if (savedTextSize) {
        document.body.classList.add(
            "large-text"
        );
    }


    textSizeBtn.addEventListener(
        "click",
        () => {

            const enabled =
                document.body.classList.toggle(
                    "large-text"
                );

            localStorage.setItem(
                "nirbhay_large_text",
                enabled
            );

        }
    );


    /* =====================================================
       INITIALIZE
       ===================================================== */

    translatePage();

});
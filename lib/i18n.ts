// Languages the site can be read in. The page itself is written in English and translated
// in the browser by Google Translate; the wording below overrides Google where its
// machine translation reads badly (short labels such as menu links and buttons).

export const languages = [
  { code: "en", flag: "gb", name: "English", short: "EN" },
  { code: "ur", flag: "pk", name: "اردو", short: "UR", rtl: true },
  { code: "hi", flag: "in", name: "हिन्दी", short: "HI" },
  { code: "ar", flag: "sa", name: "العربية", short: "AR", rtl: true },
  { code: "bn", flag: "bd", name: "বাংলা", short: "BN" },
  { code: "tr", flag: "tr", name: "Türkçe", short: "TR" },
  { code: "fr", flag: "fr", name: "Français", short: "FR" },
  { code: "es", flag: "es", name: "Español", short: "ES" },
  { code: "sw", flag: "ke", name: "Kiswahili", short: "SW" },
  { code: "id", flag: "id", name: "Bahasa Indonesia", short: "ID" },
] as const;

export type Lang = (typeof languages)[number];
export type Code = Lang["code"];

export const codes = languages.map((l) => l.code) as Code[];
export const isRtl = (code: Code) => code === "ur" || code === "ar";

export function findLanguage(code: string): Lang | undefined {
  return languages.find((l) => l.code === code);
}

// Google Translate reads the chosen language from this cookie, e.g. "/en/ur"
export function readLanguage(): Code {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);
  return match && findLanguage(match[1]) ? (match[1] as Code) : "en";
}

export function writeLanguage(code: Code) {
  const host = window.location.hostname;
  // Clear every copy first: Google may have set one on the bare domain and one on ".domain"
  for (const domain of ["", `; domain=${host}`, `; domain=.${host.replace(/^www\./, "")}`]) {
    document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
  }
  if (code !== "en") document.cookie = `googtrans=/en/${code}; path=/; max-age=31536000; samesite=lax`;
}

// Hand-written wording for labels Google gets wrong or renders clumsily
export const glossary: Partial<Record<Code, Record<string, string>>> = {
  ur: {
    About: "ہمارے بارے میں",
    "What we fund": "ہماری امداد",
    Governance: "نظم و نسق",
    Contact: "رابطہ",
    Donate: "عطیہ دیں",
    Menu: "مینو",
    Close: "بند کریں",
    "Support a Student": "کسی طالب علم کی مدد کریں",
    "Read the Legacy": "ان کی میراث پڑھیں",
    "Targeted Higher Education": "اعلیٰ تعلیم کے لیے",
  },
  hi: {
    About: "हमारे बारे में",
    "What we fund": "हम किसकी मदद करते हैं",
    Governance: "प्रशासन",
    Contact: "संपर्क",
    Donate: "दान करें",
    Menu: "मेनू",
    Close: "बंद करें",
    "Support a Student": "एक छात्र की मदद करें",
    "Read the Legacy": "उनकी विरासत पढ़ें",
    "Targeted Higher Education": "उच्च शिक्षा के लिए",
  },
  ar: {
    About: "من نحن",
    "What we fund": "ما نموّله",
    Governance: "الحوكمة",
    Contact: "اتصل بنا",
    Donate: "تبرّع",
    Menu: "القائمة",
    Close: "إغلاق",
    "Support a Student": "ادعم طالبًا",
    "Read the Legacy": "اقرأ عن إرثه",
    "Targeted Higher Education": "التعليم العالي",
  },
};

// Text shown by the language switcher and the suggestion bar, in each language itself
export const ui: Record<Code, { note: string; suggest: string; yes: string; no: string }> = {
  en: { note: "Translated automatically by Google", suggest: "Read this page in English?", yes: "Yes", no: "No thanks" },
  ur: { note: "گوگل کے ذریعے خودکار ترجمہ", suggest: "یہ صفحہ اردو میں پڑھیں؟", yes: "ہاں", no: "نہیں، شکریہ" },
  hi: { note: "Google द्वारा स्वचालित अनुवाद", suggest: "यह पेज हिन्दी में पढ़ें?", yes: "हाँ", no: "नहीं, धन्यवाद" },
  ar: { note: "ترجمة آلية بواسطة Google", suggest: "هل تريد قراءة هذه الصفحة بالعربية؟", yes: "نعم", no: "لا، شكرًا" },
  bn: { note: "Google দ্বারা স্বয়ংক্রিয় অনুবাদ", suggest: "এই পৃষ্ঠাটি বাংলায় পড়বেন?", yes: "হ্যাঁ", no: "না, ধন্যবাদ" },
  tr: { note: "Google tarafından otomatik çevrildi", suggest: "Bu sayfayı Türkçe okumak ister misiniz?", yes: "Evet", no: "Hayır, teşekkürler" },
  fr: { note: "Traduit automatiquement par Google", suggest: "Lire cette page en français ?", yes: "Oui", no: "Non merci" },
  es: { note: "Traducido automáticamente por Google", suggest: "¿Leer esta página en español?", yes: "Sí", no: "No, gracias" },
  sw: { note: "Imetafsiriwa kiotomatiki na Google", suggest: "Soma ukurasa huu kwa Kiswahili?", yes: "Ndiyo", no: "Hapana, asante" },
  id: { note: "Diterjemahkan otomatis oleh Google", suggest: "Baca halaman ini dalam Bahasa Indonesia?", yes: "Ya", no: "Tidak, terima kasih" },
};

// Runs in <head> before the page paints: honours a ?lang= link, then, for a translated
// visit, sets the language and hides the page until Google has swapped the text in,
// so visitors never see English laid out right-to-left
export const earlyScript = `(function(){try{
var C=${JSON.stringify(codes)},h=document.documentElement;
var q=new URLSearchParams(location.search).get("lang");
if(q&&C.indexOf(q)>-1){document.cookie="googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
if(q!=="en")document.cookie="googtrans=/en/"+q+"; path=/; max-age=31536000; samesite=lax";}
var m=document.cookie.match(/(?:^|;\\s*)googtrans=\\/en\\/([a-zA-Z-]+)/);
if(m&&m[1]!=="en"&&C.indexOf(m[1])>-1){h.lang=m[1];h.classList.add("gt-pending");
setTimeout(function(){h.classList.remove("gt-pending")},8000);}
}catch(e){}})();`;

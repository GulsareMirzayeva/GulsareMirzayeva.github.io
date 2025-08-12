import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import aze from '../../i18n/aze/translation.json'; // <- nl əvəzinə aze
import en from '../../i18n/en/translation.json';

i18n.use(initReactI18next).init({
  lng: 'aze',              
  fallbackLng: 'en',      
  resources: {
    aze: { translation: aze }, 
    en:  { translation: en  },
  },
  interpolation: { escapeValue: false },
});

export default i18n;

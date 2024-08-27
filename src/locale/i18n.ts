import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageEn from './en/language.json';
import languageKr from './kr/language.json';

i18n.use(initReactI18next).init({
    lng : 'kr',
    resources : {
        kr : { translation : languageKr },
        en : { translation : languageEn },
    },
    fallbackLng : 'kr',
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
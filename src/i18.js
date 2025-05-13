import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './lokales/en/translation.json';
import translationRU from './lokales/ru/translation.json';
import translationUZ from './lokales/uz/translation.json';

const resources = {
    en: { translation: translationEN },
    ru: { translation: translationRU },
    uz: { translation: translationUZ },
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;

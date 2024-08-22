import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['uz'];
const availablelanguages = ['uz', 'eng', 'rus'];


const options = {
    order: ['navigator', 'htmlTag', 'path', 'subdomain'],

    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'],
    cookieMinutes: 10,
    cookieDomain: 'myDomain',
    htmlTag: document.documentElement,
    checkWhitelist: true
}

i18n
    .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

    .use(LanguageDetector) // detect user language

    .use(initReactI18next) // pass the i18n instance to react-i18next.

    .init({
        fallbackLng,
        debug: true,
        whitelist: availablelanguages,
        detection: options,

        interpolation: {
            escapeValue: false
        },
    });

export default i18n;
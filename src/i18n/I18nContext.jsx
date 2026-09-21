import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "./locales/es.json";
import en from "./locales/en.json";
import it from "./locales/it.json";
import de from "./locales/de.json";

const fallbackLanguage = "es";
const translations = { es, en, it, de };
const languages = [
  { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "it", label: "IT", name: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
];

const I18nContext = createContext(null);

const getNestedValue = (source, path) =>
  path.split(".").reduce((value, key) => value?.[key], source);

const getSupportedLanguage = (language) => {
  const normalizedLanguage = language?.toLowerCase().split("-")[0];
  return translations[normalizedLanguage] ? normalizedLanguage : null;
};

const getInitialLanguage = () => {
  try {
    const urlLanguage = getSupportedLanguage(new URLSearchParams(window.location.search).get("lang"));
    const savedLanguage = getSupportedLanguage(localStorage.getItem("language"));
    const browserLanguage = getSupportedLanguage(navigator.language);

    return urlLanguage || savedLanguage || browserLanguage || fallbackLanguage;
  } catch (error) {
    return fallbackLanguage;
  }
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  const changeLanguage = (nextLanguage) => {
    const supportedLanguage = getSupportedLanguage(nextLanguage) || fallbackLanguage;

    setLanguage(supportedLanguage);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", supportedLanguage);
      window.history.replaceState({}, "", url);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
      document.documentElement.lang = translations[language] ? language : fallbackLanguage;
    } catch (error) {
      document.documentElement.lang = fallbackLanguage;
    }
  }, [language]);

  const value = useMemo(() => {
    const activeLanguage = translations[language] ? language : fallbackLanguage;
    const t = (key) =>
      getNestedValue(translations[activeLanguage], key) ||
      getNestedValue(translations[fallbackLanguage], key) ||
      key;

    return {
      language: activeLanguage,
      languages,
      setLanguage: changeLanguage,
      t,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
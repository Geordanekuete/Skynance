import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  welcome: {
    en: 'Welcome back!',
    fr: 'Bon retour!'
  },
  createAccount: {
    en: 'Create your account',
    fr: 'Créer un compte'
  },
  emailAddress: {
    en: 'Email address',
    fr: 'Adresse email'
  },
  password: {
    en: 'Password',
    fr: 'Mot de passe'
  },
  signIn: {
    en: 'Sign in',
    fr: 'Se connecter'
  },
  signUp: {
    en: 'Sign up',
    fr: "S'inscrire"
  },
  needAccount: {
    en: 'Need an account? Sign up',
    fr: 'Besoin d\'un compte? Inscrivez-vous'
  },
  haveAccount: {
    en: 'Already have an account? Sign in',
    fr: 'Déjà un compte? Connectez-vous'
  },
  dashboard: {
    en: 'Dashboard',
    fr: 'Tableau de bord'
  },
  expenses: {
    en: 'Expenses',
    fr: 'Dépenses'
  },
  analytics: {
    en: 'Analytics',
    fr: 'Analyses'
  },
  budget: {
    en: 'Budget',
    fr: 'Budget'
  },
  settings: {
    en: 'Settings',
    fr: 'Paramètres'
  },
  amount: {
    en: 'Amount',
    fr: 'Montant'
  },
  category: {
    en: 'Category',
    fr: 'Catégorie'
  },
  description: {
    en: 'Description',
    fr: 'Description'
  },
  addExpense: {
    en: 'Add Expense',
    fr: 'Ajouter une dépense'
  },
  cancel: {
    en: 'Cancel',
    fr: 'Annuler'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
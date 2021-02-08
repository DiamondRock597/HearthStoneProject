import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './ru.json';
import en from './en.json';

type anyJson = {[key: string]: number | string | anyJson | undefined | null};

export enum Languages {
  EN = 'en',
  RU = 'ru',
}

export interface Localisation {
  language: Languages;
  t: (key: string, options?: {[key: string]: string | number}) => string;
  selectLanguage: (langKey: Languages) => void;
}

export interface LangOptions {
  language: Languages;
  fallbackLng: Languages;

  resources: {[key in Languages]: {translation: anyJson}};
}

export class NextLocalisation implements Localisation {
  private currentLanguage: Languages;
  public get language() {
    return this.currentLanguage;
  }

  public constructor(options: LangOptions) {
    this.currentLanguage = options.fallbackLng;
    i18n.use(initReactI18next).init(options);
  }

  public t = (key: string, options?: {[key: string]: string | number}) => {
    return i18n.t(key, options);
  };

  public selectLanguage: (langKey: Languages) => void = (langKey) => {
    this.currentLanguage = langKey;
    i18n.changeLanguage(langKey);
  };
}

export const localisation: Localisation = new NextLocalisation({
  fallbackLng: Languages.EN,
  resources: {
    [Languages.EN]: {translation: en},
    [Languages.RU]: {translation: ru},
  },
});

declare module 'redux-i18n' {
  declare type Action = {
    type: string
  }

  declare interface I18nProps {
    translations: ITranslations;
    useReducer?: boolean;
    initialLang?: string;
    fallbackLang?: string;
    initialized?: boolean;
  }

  declare interface IreduxI18nState {
    lang: string;
    translations: ITranslations;
    forceRefresh: boolean;
  }

  declare interface ISetLanguageAction extends Action {
    lang: string;
  }

  declare interface ISetForceRefreshAction extends Action {
    force: boolean;
  }

  declare interface IWrapWithLocalized {
    (WrappedComponent: React$Component<*>): Function;
  }

  declare interface IGetTranslateFunctionResponse {
    (textKey: string, params?: string[], comment?: string): string;
  }

  declare interface ITranslation {
    [name: string]: string;
  }

  declare interface ITranslations {
    [name: string]: ITranslation;
  }

  declare interface IlanguageOrOptions {
    language?: string;
    preserveExisting?: boolean;
  }

  declare function i18nState(state: IreduxI18nState, action: Action): IreduxI18nState

  declare function setLanguage(lang: string): ISetLanguageAction

  declare function setTranslations(translations: ITranslations, languageOrOptions?: IlanguageOrOptions | string): any // ThunkAction<any, IreduxI18nState, any>

  declare function setForceRefresh(force: boolean): ISetForceRefreshAction

  declare function localize(propName?: string): IWrapWithLocalized

  declare function getTranslateFunction(translations: ITranslations, lang: string, fallbackLang?: string): IGetTranslateFunctionResponse

  declare class I18n extends React$Component<I18nProps, any> {}

  declare module.exports: any
}

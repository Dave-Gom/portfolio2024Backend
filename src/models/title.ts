import { Model } from 'sequelize';
import { LanguageInterface } from './language';
import { TextInterface } from './text';

export interface TitleInterface extends TextInterface {}

export interface TitleInstance extends Model<TitleInstance> {
    getLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    getSections?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setSections?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    countSections?: (obj: Model<LanguageInterface>) => Promise<number>;
    hasSection?: (obj: Model<LanguageInterface>) => Promise<boolean>;
    hasSections?: (obj: Model<LanguageInterface>) => Promise<boolean>;
    addSection?: (obj: Model<LanguageInterface> | Model<LanguageInterface>) => Promise<TitleInstance>;
    addSections?: (obj: Model<LanguageInterface>[]) => Promise<TitleInstance>;
    removeSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    removeSections?: (obj: Model<LanguageInterface>[]) => Promise<TitleInstance>;
}

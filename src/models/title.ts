import { Model } from 'sequelize';
import { LanguageInterface } from './language';
import { TextInterface } from './text';

export interface TitleInterface extends TextInterface {}

export interface TitleInstance extends Model<TitleInstance> {
    getLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    getSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
}

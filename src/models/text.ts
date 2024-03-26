import { Model } from 'sequelize';
import { LanguageInterface } from './language';

export interface TextInterface {
    id: number;
    text: string;
    tag: string;
}

export interface TextInstance extends Model<TextInterface> {
    language?: Model<LanguageInterface>;
    getLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
    setLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
    createLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
}

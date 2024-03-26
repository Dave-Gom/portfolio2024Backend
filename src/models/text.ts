import { Model } from 'sequelize-typescript';
import { LanguageInterface } from './language';

export interface TextInterface {
    id: number;
    text: string;
    tag: string;
}

export interface TextInstance extends Model<TextInterface> {
    language?: Model<LanguageInterface>;
    addLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
}

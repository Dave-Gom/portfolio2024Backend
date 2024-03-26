import { Model } from 'sequelize-typescript';
import { LanguageInterface } from '../../models/language';
import { Language } from '../models/language';

export const seedLanguages = async () => {
    try {
        const idiomas = await Language.findAll();
        if (idiomas.length === 0) {
            const idiomas: LanguageInterface[] = [{ code: 'es', name: 'español' }] as LanguageInterface[];
            await Language.bulkCreate<Model<LanguageInterface>>(idiomas);
        }
    } catch (error) {}
};

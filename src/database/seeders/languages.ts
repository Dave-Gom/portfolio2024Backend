import { Model } from 'sequelize-typescript';
import { LaguageInterface } from '../../models/language';
import { Language } from '../models/language';

export const seedLanguages = async () => {
    try {
        const idiomas: LaguageInterface[] = [{ code: 'es', name: 'español' }] as LaguageInterface[];
        await Language.bulkCreate<Model<LaguageInterface>>(idiomas);
    } catch (error) {}
};

import { DataTypes, Model } from 'sequelize';
import { SectionInterface } from '../../models/section';
import { sequelize } from '../database';

const Section = sequelize.define<Model, SectionInterface>('section', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { Section };

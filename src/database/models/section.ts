import { DataTypes, Model } from 'sequelize';
import { SectionInterface } from '../../models/section';
import { sequelize } from '../database';

const Section = sequelize.define<Model, SectionInterface>(
    'section',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Section };

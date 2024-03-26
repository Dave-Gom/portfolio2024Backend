import { DataType, Model } from 'sequelize-typescript';
import { SectionInterface } from '../../models/section';
import { sequelize } from '../database';

const Section = sequelize.define<Model, SectionInterface>(
    'section',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Section };

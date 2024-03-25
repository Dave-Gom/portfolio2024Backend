import { DataType, Model } from 'sequelize-typescript';
import { SectionInterface } from '../../models/section';
import { sequelize } from '../database';
import { Image } from './image';
import { Text } from './text';
import { Title } from './title';

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

Section.hasMany(Text);
Section.hasMany(Title);
Section.hasMany(Image);

export { Section };

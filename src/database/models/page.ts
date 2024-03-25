import { DataType, Model } from 'sequelize-typescript';
import { PageInterface } from '../../models/page';
import { sequelize } from '../database';
import { Section } from './section';

const Page = sequelize.define<Model, PageInterface>(
    'pages',
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

Page.hasMany(Section);

export { Page };

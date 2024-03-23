import { DataTypes, Model } from 'sequelize';
import { PageInterface } from '../../models/page';
import { sequelize } from '../database';
import { Section } from './section';

const Page = sequelize.define<Model, PageInterface>(
    'pages',
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
    { paranoid: true }
);

Page.hasMany(Section);

export { Page };

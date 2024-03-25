import { DataType, Model } from 'sequelize-typescript';
import { TitleInterface } from '../../models/title';
import { sequelize } from '../database';
import { Language } from './language';

const Title = sequelize.define<Model, TitleInterface>(
    'titles',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: { type: DataType.STRING, defaultValue: '', allowNull: true },
        tag: { type: DataType.STRING, allowNull: false, unique: true },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

Title.belongsTo(Language);

export { Title };

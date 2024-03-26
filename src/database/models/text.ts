import { DataType, Model } from 'sequelize-typescript';
import { TextInterface } from '../../models/text';
import { sequelize } from '../database';

const Text = sequelize.define<Model, TextInterface>(
    'texts',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: { type: DataType.TEXT, defaultValue: '', allowNull: true },
        tag: { type: DataType.STRING, allowNull: false, unique: true },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Text };

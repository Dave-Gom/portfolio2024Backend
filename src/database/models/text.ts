import { DataTypes, Model } from 'sequelize';
import { TextInterface } from '../../models/text';
import { sequelize } from '../database';

const Text = sequelize.define<Model, TextInterface>(
    'texts',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: { type: DataTypes.TEXT, defaultValue: '', allowNull: true },
        tag: { type: DataTypes.STRING, allowNull: false, unique: true },
        lang: { type: DataTypes.STRING, allowNull: false },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Text };

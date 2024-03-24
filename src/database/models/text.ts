import { DataTypes, Model } from 'sequelize';
import { TextInterface } from '../../models/text';
import { sequelize } from '../database';
import { Language } from './language';

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
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

Text.belongsTo(Language);

export { Text };

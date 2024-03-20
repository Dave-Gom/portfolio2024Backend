import { DataTypes, Model } from 'sequelize';
import { TextInterface } from '../../models/text';
import { sequelize } from '../database';

const Text = sequelize.define<Model, TextInterface>('texts', {
    text: { type: DataTypes.TEXT, defaultValue: '', allowNull: true },
    tag: { type: DataTypes.STRING, allowNull: false },
    lang: { type: DataTypes.STRING, allowNull: false },
});

export { Text };

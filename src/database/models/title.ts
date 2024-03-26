import { DataTypes, Model } from 'sequelize';
import { TitleInterface } from '../../models/title';
import { sequelize } from '../database';
import { Language } from './language';

const Title = sequelize.define<Model, TitleInterface>(
    'titles',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: { type: DataTypes.STRING, defaultValue: '', allowNull: true },
        tag: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

Title.belongsTo(Language);

export { Title };

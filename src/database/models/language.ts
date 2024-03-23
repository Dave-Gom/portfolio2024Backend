import { DataTypes, Model } from 'sequelize';
import { LaguageInterface } from '../../models/language';
import { sequelize } from '../database';

const Language = sequelize.define<Model, LaguageInterface>(
    'laguages',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Language };

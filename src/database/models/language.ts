import { DataType, Model } from 'sequelize-typescript';
import { LaguageInterface } from '../../models/language';
import { sequelize } from '../database';

const Language = sequelize.define<Model, LaguageInterface>(
    'languages',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: DataType.STRING,
            allowNull: false,
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

export { Language };

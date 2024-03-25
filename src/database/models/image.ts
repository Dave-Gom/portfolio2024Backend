import { DataType, Model } from 'sequelize-typescript';
import { ImageInterface } from '../../models/image';
import { sequelize } from '../database';

const Image = sequelize.define<Model, ImageInterface>(
    'images',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        url: { type: DataType.STRING, defaultValue: '', validate: { isUrl: true }, unique: true },
        tag: { type: DataType.STRING, allowNull: false, unique: true },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Image };

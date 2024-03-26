import { DataTypes, Model } from 'sequelize';
import { ImageInterface } from '../../models/image';
import { sequelize } from '../database';

const Image = sequelize.define<Model, ImageInterface>(
    'images',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        url: { type: DataTypes.STRING, defaultValue: '', validate: { isUrl: true }, unique: true },
        tag: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { Image };

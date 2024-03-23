import { DataTypes, Model } from 'sequelize';
import { ImageInterface } from '../../models/image';
import { sequelize } from '../database';

const Image = sequelize.define<Model, ImageInterface>('images', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: { type: DataTypes.STRING, defaultValue: '', allowNull: true, validate: { isUrl: true } },
    tag: { type: DataTypes.STRING, allowNull: false },
});

export { Image };

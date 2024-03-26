import { DataTypes, Model } from 'sequelize';
import { PostInterface } from '../../models/post';
import { sequelize } from '../database';

const Post = sequelize.define<Model, PostInterface>(
    'posts',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: { type: DataTypes.STRING, allowNull: false },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        brief: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longDesc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: true,
    }
);

export { Post };

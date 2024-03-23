import { DataTypes, Model } from 'sequelize';
import { TitleInterface } from '../../models/title';
import { sequelize } from '../database';

const Title = sequelize.define<Model, TitleInterface>('titles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: { type: DataTypes.STRING, defaultValue: '', allowNull: true },
    tag: { type: DataTypes.STRING, allowNull: false },
    lang: { type: DataTypes.STRING, allowNull: false },
});

export { Title };

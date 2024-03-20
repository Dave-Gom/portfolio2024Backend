import { DataTypes, Model } from 'sequelize';
import { LaguageInterface } from '../../models/language';
import { sequelize } from '../database';

const Language = sequelize.define<Model, LaguageInterface>('laguages', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { Language };

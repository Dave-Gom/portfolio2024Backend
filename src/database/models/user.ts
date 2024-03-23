import { DataTypes, Model } from 'sequelize';
import { UserInterface } from '../../models/user';
import { sequelize } from '../database';

const User = sequelize.define<Model, UserInterface>(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        about: { type: DataTypes.STRING },
        birthDate: { type: DataTypes.DATE, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, validate: { isEmail: true }, unique: true },
        apodo: { type: DataTypes.STRING },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { User };

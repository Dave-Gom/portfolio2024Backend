import { DataType, Model } from 'sequelize-typescript';
import { UserInterface } from '../../models/user';
import { sequelize } from '../database';

const User = sequelize.define<Model, UserInterface>(
    'user',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        about: { type: DataType.STRING },
        birthDate: { type: DataType.DATE, allowNull: false },
        name: { type: DataType.STRING, allowNull: false },
        email: { type: DataType.STRING, validate: { isEmail: true }, unique: true },
        apodo: { type: DataType.STRING },
        password: { type: DataType.STRING, allowNull: false },
    },
    {
        paranoid: true,
        timestamps: true,
    }
);

export { User };

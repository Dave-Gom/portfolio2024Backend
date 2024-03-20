import { DataTypes, Model } from 'sequelize';
import { UserInterface } from '../../models/user';
import { sequelize } from '../database';

const User = sequelize.define<Model, UserInterface>('user', {
    about: { type: DataTypes.STRING },
    birthDate: { type: DataTypes.DATE, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, validate: { isEmail: true }, unique: true },
});

export { User };

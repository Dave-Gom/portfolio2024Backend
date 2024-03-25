import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { generateToken } from '../helpers/jdt.handler';
import { encript, verify } from '../helpers/password.handler';
import { AuthInterface, registerNewUserProps } from '../models/Auth';
import { ControllerErrorInterface, ServicesResponse } from '../models/Responeses';
import { UserInterface } from '../models/user';

export const registerNewUser = async (userData: registerNewUserProps) => {
    const { email, password } = userData;
    try {
        const check = await User.findOne<Model<UserInterface>>({ where: { email } });
        if (check) {
            const miError: ServicesResponse = {
                type: 'error',
                payload: { status: 409, message: 'Usuario ya existe' },
            };
            return miError;
        } else {
            const passwordHash = await encript(password);
            const registerNewUser = await User.create<Model<UserInterface>>({ ...userData, password: passwordHash });
            if (registerNewUser) {
                const user: ServicesResponse = {
                    type: 'success',
                    payload: registerNewUser,
                };
                return user;
            } else {
                const miError: ServicesResponse = {
                    type: 'error',
                    payload: { status: 500, message: 'No se pudo crear el usuario' },
                };
                return miError;
            }
        }
    } catch (error) {
        const miError: ControllerErrorInterface = { status: 500, message: `${error}` };
        return { type: 'error', payload: miError } as ServicesResponse;
    }
};

export const loginUser = async ({ email, password }: AuthInterface) => {
    try {
        const check = await User.findOne<Model<UserInterface>>({
            where: { email },
        });
        if (check && check.dataValues) {
            const isCorrect = await verify(password, check.dataValues.password);
            if (isCorrect) {
                const token = await generateToken(check.dataValues.email);
                const { id, birthDate, email, name } = check.dataValues;
                //@ts-ignore
                const data: loginResponse = {
                    token,
                    data: {
                        id,
                        birthDate,
                        email,
                        name,
                    },
                };
                return { type: 'success', payload: data } as ServicesResponse;
            }
        }
        const incorrect: ServicesResponse = {
            type: 'error',
            payload: { message: 'Usuario o contraseña incorrectos', status: 401 },
        };
        return incorrect;
    } catch (error) {
        const incorrect: ServicesResponse = {
            type: 'error',
            payload: { message: `${error}`, status: 500 },
        };
        return incorrect;
    }
};

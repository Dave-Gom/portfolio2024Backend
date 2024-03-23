import { NextFunction, Request, Response } from 'express';
import { Model } from 'sequelize';
import { virifyToken } from '../../helpers/jdt.handler';
import { UserInterface } from '../../models/user';
import { User } from '../models/user';

export const checkSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = virifyToken(`${jwt}`);
        if (isUser && typeof isUser !== 'string' && isUser.id) {
            const usuario = await User.findOne<Model<UserInterface>>({
                where: { email: isUser.id },
                include: [
                    {
                        all: true,
                        attributes: {
                            exclude: ['password'],
                        },
                    },
                ],
            });
            if (usuario) {
                req.body.user = usuario;
                next();
            } else {
                throw new Error('No user');
            }
        } else {
            throw new Error('Usuario contraseña invalidos');
        }
    } catch (error) {
        res.statusCode = 401;
        res.send({ error: 'Sesion no valida' });
    }
};

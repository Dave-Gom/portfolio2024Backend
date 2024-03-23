import { Request, Response } from 'express';
import { handleHttp } from '../../helpers/error.handler';
import { ServicesResponse } from '../../models/Responeses';
import { loginUser, registerNewUser } from '../../services/auth.services';

export const RegisterController = async ({ body }: Request, res: Response) => {
    try {
        const responseRegister: ServicesResponse = await registerNewUser(body);
        if (responseRegister.type === 'success') {
            const logint = await loginUser(body);
            if (logint.type === 'success') {
                res.send(logint.payload);
            } else {
                handleHttp(res, logint, 401);
            }
        } else {
            handleHttp(res, responseRegister.payload.message, responseRegister.payload.status);
        }
    } catch (error) {
        handleHttp(res, error);
    }
};

export const LoginController = async (req: Request, res: Response) => {
    try {
        let { body } = req;
        const dato = await loginUser(body);
        if (dato.type === 'success') {
            res.send(dato.payload);
        } else {
            handleHttp(res, dato.payload.message, dato.payload.status);
        }
    } catch (error) {
        handleHttp(res, `${error}`);
    }
};

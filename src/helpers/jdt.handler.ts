import { sign, verify } from 'jsonwebtoken';

const clientSecret = process.env.CLIENT_SECRET || 'clientSecret';

export const generateToken = async (id: string) => {
    const jwt = sign({ id }, clientSecret);
    return jwt;
};

export const virifyToken = (jwt: string) => {
    const isOk = verify(jwt, clientSecret);
    return isOk;
};

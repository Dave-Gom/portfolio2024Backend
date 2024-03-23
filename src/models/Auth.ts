import { UserInterface } from './user';

export interface AuthInterface {
    email: string;
    password: string;
}

export interface loginResponse {
    token: string | null;
    data: Omit<UserInterface, 'password'> | string;
}

export interface registerNewUserProps extends UserInterface {
    role: number[];
    password: string;
}

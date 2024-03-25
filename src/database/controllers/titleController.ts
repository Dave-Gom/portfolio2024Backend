import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { handleHttp } from '../../helpers/error.handler';
import { TitleInterface } from '../../models/title';
import { Title } from '../models/title';

export const createTitle = async ({ body }: Request, res: Response) => {
    try {
        const newTitle = await Title.create<Model<TitleInterface>>(body);
        if (newTitle) {
            res.send(newTitle);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readTitles = async ({ body }: Request, res: Response) => {
    try {
        const title = await Title.findAll<Model<TitleInterface>>();
        if (title) {
            res.send(title);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readTitleById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const title = await Title.findByPk<Model<TitleInterface>>(id, {
            include: [{ all: true }],
        });

        if (Title) {
            res.send(Title);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const updateTitle = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedTitle = await Title.update(body, {
            where: { id },
        });
        if (updatedTitle.length === 1) {
            const edited = await Title.findByPk<Model<TitleInterface>>(id);
            if (edited) res.send(edited);
            else {
                res.send({ message: 'modificado' });
            }
            return;
        }

        return handleHttp(res, 'No se encontro la pagina', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const deletTitle = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedTitle = await Title.destroy({
            where: { id },
        });
        res.send({ message: 'eliminado', section: updatedTitle });
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

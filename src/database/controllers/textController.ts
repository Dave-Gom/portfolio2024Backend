import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { TextInterface } from '../../models/text';
import { Text } from '../models/text';

export const createText = async ({ body }: Request, res: Response) => {
    try {
        const newText = await Text.create<Model<TextInterface>>(body);
        if (newText) {
            res.send(newText);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readTexts = async ({ body }: Request, res: Response) => {
    try {
        const text = await Text.findAll<Model<TextInterface>>();
        if (text) {
            res.send(text);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readTextById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const text = await Text.findByPk<Model<TextInterface>>(id, {
            include: [{ all: true }],
        });

        if (text) {
            res.send(text);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const updateText = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedText = await Text.update(body, {
            where: { id },
        });
        if (updatedText.length === 1) {
            const edited = await Text.findByPk<Model<TextInterface>>(id);
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

export const deletText = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedText = await Text.destroy({
            where: { id },
        });
        res.send({ message: 'eliminado', section: updatedText });
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

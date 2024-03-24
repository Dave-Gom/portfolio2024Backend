import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { ImageInterface } from '../../models/image';
import { Image } from '../models/image';

export const createImage = async ({ body }: Request, res: Response) => {
    try {
        const newImage = await Image.create<Model<ImageInterface>>(body);
        if (newImage) {
            res.send(newImage);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readImages = async ({ body }: Request, res: Response) => {
    try {
        const image = await Image.findAll<Model<ImageInterface>>();
        if (image) {
            res.send(image);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readImageById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const image = await Image.findByPk<Model<ImageInterface>>(id, {
            include: [{ all: true }],
        });

        if (image) {
            res.send(image);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const updateImage = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedImage = await Image.update(body, {
            where: { id },
        });
        if (updatedImage.length === 1) {
            const edited = await Image.findByPk<Model<ImageInterface>>(id);
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

export const deletImage = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const updatedImage = await Image.destroy({
            where: { id },
        });
        res.send({ message: 'eliminado', section: updatedImage });
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { SectionInterface } from '../../models/section';
import { Section } from '../models/section';

export const readSections = async (req: Request, res: Response) => {
    try {
        const sections = await Section.findAll<Model<SectionInterface>>({
            include: [{ all: true }],
        });

        if (sections) {
            res.send(sections);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readSectionById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const section = await Section.findByPk<Model<SectionInterface>>(id, {
            include: [{ all: true }],
        });

        if (section) {
            res.send(section);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const createSection = async ({ body }: Request, res: Response) => {
    try {
        const section = await Section.create<Model<SectionInterface>>(body);
        if (section) {
            res.send(section);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const updateSection = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const section = await Section.update(body, {
            where: { id },
        });
        if (section.length === 1) {
            const edited = await Section.findByPk<Model<SectionInterface>>(id);
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

export const deleteSection = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const text = await Section.destroy({ where: { id } });
        res.send({ message: 'eliminado', section: text });
        return;
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

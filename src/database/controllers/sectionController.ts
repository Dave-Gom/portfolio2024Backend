import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { SectionInstance, SectionInterface } from '../../models/section';
import { TextInstance } from '../../models/text';
import { TitleInstance } from '../../models/title';
import { Section } from '../models/section';
import { Text } from '../models/text';
import { Title } from '../models/title';

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

export const addText = async ({ body, params }: Request, res: Response) => {
    try {
        const { sectionId } = body;
        const { textId } = params;

        const texto = await Text.findByPk<TextInstance>(textId, { include: [Section] });
        const seccion = await Section.findByPk<SectionInstance>(sectionId, { include: [Text] });

        if (!texto || !seccion) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (texto.addSection && seccion.addText) {
            await seccion.addText(texto);
            await seccion.reload({ include: [Text] });
            res.send(seccion);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const addTitle = async ({ body, params }: Request, res: Response) => {
    try {
        const { sectionId } = body;
        const { titleId } = params;

        const titulo = await Title.findByPk<TitleInstance>(titleId, { include: [Section] });
        const seccion = await Section.findByPk<SectionInstance>(sectionId, { include: [Text] });

        if (!titulo || !seccion) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (titulo.addSection && seccion.addTitle) {
            await seccion.addTitle(titulo);
            await seccion.reload({ include: [Title] });
            res.send(seccion);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

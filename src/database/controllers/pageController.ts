import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { PageInstance, PageInterface } from '../../models/page';
import { SectionInstance } from '../../models/section';
import { Page } from '../models/page';
import { Section } from '../models/section';

export const readPages = async (req: Request, res: Response) => {
    try {
        const pages = await Page.findAll<Model<PageInterface>>({
            include: { model: Section, include: [{ all: true }] },
        });

        if (pages) {
            res.send(pages);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readpageById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const pages = await Page.findByPk<Model<PageInterface>>(id, {
            include: { model: Section, include: [{ all: true }] },
        });

        if (pages) {
            res.send(pages);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const createPage = async ({ body }: Request, res: Response) => {
    try {
        const page = await Page.create<Model<PageInterface>>(body);
        if (page) {
            res.send(page);
            return;
        }

        return handleHttp(res, undefined, 204);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const updatePage = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const page = await Page.update(body, {
            where: { id },
        });
        if (page.length === 1) {
            const edited = await Page.findByPk<Model<PageInterface>>(id);
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

export const deletePage = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const page = await Page.destroy({ where: { id } });
        res.send({ message: 'eliminado', page: page });
        return;
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const addSection = async ({ body, params }: Request, res: Response) => {
    try {
        const { pageId } = body;
        const { sectionId } = params;

        const seccion = await Section.findByPk<SectionInstance>(sectionId, { include: [Page] });
        const pagina = await Page.findByPk<PageInstance>(pageId, { include: [Section] });

        if (!pagina || !seccion) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (pagina.addSection && seccion.addPage) {
            await pagina.addSection(seccion);
            await pagina.reload({ include: [Section] });
            res.send(pagina);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

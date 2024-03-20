import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { PageInterface } from '../../models/page';
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

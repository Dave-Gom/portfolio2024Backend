import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { handleHttp } from '../../helpers/error.handler';
import { ImageInstance } from '../../models/image';
import { LanguageInterface } from '../../models/language';
import { PostInstance } from '../../models/post';
import { TextInstance } from '../../models/text';
import { TitleInstance } from '../../models/title';
import { Image } from '../models/image';
import { Language } from '../models/language';
import { Post } from '../models/posts';
import { Text } from '../models/text';
import { Title } from '../models/title';

export const createPost = async ({ body }: Request, res: Response) => {
    try {
        const idioma = await Language.findByPk<Model<LanguageInterface>>(body.language, { include: [Post] });
        if (idioma) {
            const post = await Post.create<PostInstance>({ ...body, languageId: idioma.dataValues.id });
            if (post) {
                res.send(post);
                return;
            }

            return handleHttp(res, undefined, 204);
        }
        return handleHttp(res, `Idioma incorrecto`, 400);
    } catch (e) {
        handleHttp(res, `ERROR_POST_POST: ${e}`);
    }
};

export const readPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.findAll<PostInstance>({
            include: { all: true },
        });

        if (posts) {
            res.send(posts);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const readPostById = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const post = await Post.findByPk<PostInstance>(id, {
            include: { all: true },
        });

        if (post) {
            res.send(post);
        } else {
            handleHttp(res, undefined, 204);
        }
    } catch (error) {
        handleHttp(res, `${error}`, 500);
    }
};

export const updatePost = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const post = await Post.update(body, {
            where: { id },
        });
        if (post.length === 1) {
            const edited = await Post.findByPk<PostInstance>(id);
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

export const deletePost = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const post = await Post.destroy({ where: { id } });
        res.send({ message: 'eliminado', page: post });
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const addText = async ({ body, params }: Request, res: Response) => {
    try {
        const { postId } = body;
        const { textId } = params;

        const texto = await Text.findByPk<TextInstance>(textId, { include: [Post] });
        const post = await Post.findByPk<PostInstance>(postId, { include: [Text] });

        if (!texto || !post) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (texto.addSection && post.addText) {
            await post.addText(texto);
            await post.reload({ include: [Text] });
            res.send(post);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const addTitle = async ({ body, params }: Request, res: Response) => {
    try {
        const { postId } = body;
        const { titleId } = params;

        const titulo = await Title.findByPk<TitleInstance>(titleId, { include: [Post] });
        const post = await Post.findByPk<PostInstance>(postId, { include: [Title] });

        if (!titulo || !post) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (titulo.addSection && post.addTitle) {
            await post.addTitle(titulo);
            await post.reload({ include: [Title] });
            res.send(post);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

export const addImage = async ({ body, params }: Request, res: Response) => {
    try {
        const { postId } = body;
        const { imageId } = params;

        const imagen = await Image.findByPk<ImageInstance>(imageId, { include: [Post] });
        const post = await Post.findByPk<PostInstance>(postId, { include: [Image] });

        if (!imagen || !post) {
            return handleHttp(res, 'Id incompatible', 400);
        }

        if (imagen.addSection && post.addImage) {
            await post.addImage(imagen);
            await post.reload({ include: [Image] });
            res.send(post);
            return;
        }

        return handleHttp(res, 'No associations', 400);
    } catch (error) {
        return handleHttp(res, `${error}`, 500);
    }
};

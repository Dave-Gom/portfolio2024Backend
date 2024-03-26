import { Model } from 'sequelize';
import { ImageInstance, ImageInterface } from './image';
import { TextInstance, TextInterface } from './text';
import { TitleInstance, TitleInterface } from './title';

export interface PostInterface {
    id: number;
    title: string;
    brief: string;
    longDesc: string;
    content: string;
    active: boolean;
}

export interface PostInstance extends Model<PostInterface> {
    getTexts?: () => Promise<Model<TextInterface>[]>;
    countTexts?: () => Promise<number>;
    hasText?: (obj: TextInstance) => Promise<boolean>;
    hasTexts?: (obj: TextInstance[]) => Promise<boolean>;
    setTexts?: (obj: TextInstance) => Promise<number>;
    addText?: (obj: TextInstance) => Promise<PostInstance>;
    addTexts?: (obj: TextInstance[]) => Promise<PostInstance>;
    removeText?: (obj: TextInstance) => Promise<PostInstance>;
    removeTexts?: (obj: TextInstance[]) => Promise<PostInstance>;
    createText?: (obj: TextInterface) => Promise<PostInstance>;
    getTitles?: () => Promise<Model<TitleInterface>[]>;
    countTitles?: () => Promise<number>;
    hasTitle?: (obj: TitleInstance) => Promise<boolean>;
    hasTitles?: (obj: TitleInstance[]) => Promise<boolean>;
    setTitles?: (obj: TitleInstance) => Promise<PostInstance>;
    addTitle?: (obj: TitleInstance) => Promise<PostInstance>;
    addTitles?: (obj: TitleInstance[]) => Promise<PostInstance>;
    removeTitle?: (obj: TitleInstance) => Promise<PostInstance>;
    removeTitles?: (obj: TitleInstance[]) => Promise<PostInstance>;
    createTitle?: (obj: TitleInterface) => Promise<PostInstance>;
    getImages?: () => Promise<Model<ImageInstance>[]>;
    countImages?: () => Promise<number>;
    hasImage?: (obj: ImageInstance) => Promise<boolean>;
    hasImages?: (obj: ImageInstance) => Promise<boolean>;
    setImages?: (obj: ImageInstance[]) => Promise<PostInstance>;
    addImage?: (obj: ImageInstance) => Promise<PostInstance>;
    addImages?: (obj: ImageInstance[]) => Promise<PostInstance>;
    removeImage?: (obj: ImageInstance) => Promise<PostInstance>;
    removeImages?: (obj: ImageInstance[]) => Promise<PostInstance>;
    createImage?: (obj: ImageInterface) => Promise<PostInstance>;
}

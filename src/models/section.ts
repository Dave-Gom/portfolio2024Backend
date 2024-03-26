import { Model } from 'sequelize';
import { ImageInstance, ImageInterface } from './image';
import { PageInstance, PageInterface } from './page';
import { TextInstance, TextInterface } from './text';
import { TitleInstance, TitleInterface } from './title';

export interface SectionInterface {
    id?: number;
    name?: string;
}

export interface SectionInstance extends Model<SectionInterface> {
    getTexts?: () => Promise<Model<TextInterface>[]>;
    countTexts?: () => Promise<number>;
    hasText?: (obj: TextInstance) => Promise<boolean>;
    hasTexts?: (obj: TextInstance[]) => Promise<boolean>;
    setTexts?: (obj: TextInstance) => Promise<number>;
    addText?: (obj: TextInstance) => Promise<SectionInstance>;
    addTexts?: (obj: TextInstance[]) => Promise<SectionInstance>;
    removeText?: (obj: TextInstance) => Promise<SectionInstance>;
    removeTexts?: (obj: TextInstance[]) => Promise<SectionInstance>;
    createText?: (obj: TextInterface) => Promise<SectionInstance>;
    getTitles?: () => Promise<Model<TitleInterface>[]>;
    countTitles?: () => Promise<number>;
    hasTitle?: (obj: TitleInstance) => Promise<boolean>;
    hasTitles?: (obj: TitleInstance[]) => Promise<boolean>;
    setTitles?: (obj: TitleInstance) => Promise<SectionInstance>;
    addTitles?: (obj: TitleInstance[]) => Promise<SectionInstance>;
    removeTitle?: (obj: TitleInstance) => Promise<SectionInstance>;
    removeTitles?: (obj: TitleInstance[]) => Promise<SectionInstance>;
    createTitle?: (obj: TitleInterface) => Promise<SectionInstance>;
    getImages?: () => Promise<Model<ImageInstance>[]>;
    countImages?: () => Promise<number>;
    hasImage?: (obj: ImageInstance) => Promise<boolean>;
    hasImages?: (obj: ImageInstance) => Promise<boolean>;
    setImages?: (obj: ImageInstance[]) => Promise<SectionInstance>;
    addImage?: (obj: ImageInstance) => Promise<SectionInstance>;
    addImages?: (obj: ImageInstance[]) => Promise<SectionInstance>;
    removeImage?: (obj: ImageInstance) => Promise<SectionInstance>;
    removeImages?: (obj: ImageInstance[]) => Promise<SectionInstance>;
    createImage?: (obj: ImageInterface) => Promise<SectionInstance>;
    getPages?: () => Promise<Model<PageInterface>[]>;
    countPages?: () => Promise<number>;
    hasPage?: (obj: PageInstance) => Promise<boolean>;
    hasPages?: (obj: PageInstance[]) => Promise<boolean>;
    setPages?: (obj: PageInstance[]) => Promise<SectionInstance>;
    addPage?: (obj: PageInstance) => Promise<SectionInstance>;
    addPages?: (obj: PageInstance[]) => Promise<SectionInstance>;
    removePage?: (obj: PageInstance) => Promise<SectionInstance>;
    removePages?: (obj: PageInstance[]) => Promise<SectionInstance>;
    createPage?: (obj: PageInterface) => Promise<SectionInstance>;
}

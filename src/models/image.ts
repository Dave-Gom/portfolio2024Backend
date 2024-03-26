import { Model } from 'sequelize';
import { SectionInstance } from './section';

export interface ImageInterface {
    id: number;
    url: string;
    tag: string;
}

export interface ImageInstance extends Model<ImageInterface> {
    getSections?: () => Promise<SectionInstance[]>;
    countSections?: () => Promise<number>;
    hasSection?: (val: SectionInstance) => Promise<boolean>;
    hasSections?: (val: SectionInstance[]) => Promise<boolean>;
    setSections?: (val: SectionInstance | SectionInstance[]) => Promise<ImageInstance>;
    addSection?: (val: SectionInstance) => Promise<ImageInstance>;
    addSections?: (val: SectionInstance[]) => Promise<ImageInstance>;
    removeSection?: (val: SectionInstance) => Promise<ImageInstance>;
    removeSections?: (val: SectionInstance[]) => Promise<ImageInstance>;
    createSection?: (val: SectionInstance) => Promise<ImageInstance>;
}

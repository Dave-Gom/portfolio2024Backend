import { Model } from 'sequelize';
import { SectionInstance } from './section';

export interface PageInterface {
    id: number;
    name: string;
}

export interface PageInstance extends Model<PageInterface> {
    getSections?: () => Promise<SectionInstance[]>;
    countSections?: () => Promise<number>;
    hasSection?: (val: SectionInstance) => Promise<boolean>;
    hasSections?: (val: SectionInstance[]) => Promise<boolean>;
    setSections?: (val: SectionInstance | SectionInstance[]) => Promise<PageInstance>;
    addSection?: (val: SectionInstance) => Promise<PageInstance>;
    addSections?: (val: SectionInstance[]) => Promise<PageInstance>;
    removeSection?: (val: SectionInstance) => Promise<PageInstance>;
    removeSections?: (val: SectionInstance[]) => Promise<PageInstance>;
    createSection?: (val: SectionInstance) => Promise<PageInstance>;
}

import { Model } from 'sequelize';
import { LanguageInterface } from './language';
import { PostInstance } from './post';
import { SectionInstance } from './section';

export interface TextInterface {
    id: number;
    text: string;
    tag: string;
}

export interface TextInstance extends Model<TextInterface> {
    language?: Model<LanguageInterface>;
    getLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
    setLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
    createLanguage?: (obj: Model<LanguageInterface>) => Promise<TextInstance>;
    getSections?: () => Promise<SectionInstance[]>;
    countSections?: () => Promise<number>;
    hasSection?: (val: SectionInstance) => Promise<boolean>;
    hasSections?: (val: SectionInstance[]) => Promise<boolean>;
    setSections?: (val: SectionInstance | SectionInstance[]) => Promise<TextInstance>;
    addSection?: (val: SectionInstance) => Promise<TextInstance>;
    addSections?: (val: SectionInstance[]) => Promise<TextInstance>;
    removeSection?: (val: SectionInstance) => Promise<TextInstance>;
    removeSections?: (val: SectionInstance[]) => Promise<TextInstance>;
    createSection?: (val: SectionInstance) => Promise<TextInstance>;
    getPosts?: () => Promise<PostInstance[]>;
    countPosts?: () => Promise<number>;
    hasPost?: (val: PostInstance) => Promise<boolean>;
    hasPosts?: (val: PostInstance[]) => Promise<boolean>;
    setPosts?: (val: PostInstance | PostInstance[]) => Promise<TextInstance>;
    addPost?: (val: PostInstance) => Promise<TextInstance>;
    addPosts?: (val: PostInstance[]) => Promise<TextInstance>;
    removePost?: (val: PostInstance) => Promise<TextInstance>;
    removePosts?: (val: PostInstance[]) => Promise<TextInstance>;
    createPost?: (val: PostInstance) => Promise<TextInstance>;
}

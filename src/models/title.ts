import { Model } from 'sequelize';
import { LanguageInterface } from './language';
import { PostInstance } from './post';
import { TextInterface } from './text';

export interface TitleInterface extends TextInterface {}

export interface TitleInstance extends Model<TitleInstance> {
    getLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createLanguage?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    getSections?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    setSections?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    createSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    countSections?: (obj: Model<LanguageInterface>) => Promise<number>;
    hasSection?: (obj: Model<LanguageInterface>) => Promise<boolean>;
    hasSections?: (obj: Model<LanguageInterface>) => Promise<boolean>;
    addSection?: (obj: Model<LanguageInterface> | Model<LanguageInterface>) => Promise<TitleInstance>;
    addSections?: (obj: Model<LanguageInterface>[]) => Promise<TitleInstance>;
    removeSection?: (obj: Model<LanguageInterface>) => Promise<TitleInstance>;
    removeSections?: (obj: Model<LanguageInterface>[]) => Promise<TitleInstance>;
    getPosts?: () => Promise<PostInstance[]>;
    countPosts?: () => Promise<number>;
    hasPost?: (val: PostInstance) => Promise<boolean>;
    hasPosts?: (val: PostInstance[]) => Promise<boolean>;
    setPosts?: (val: PostInstance | PostInstance[]) => Promise<TitleInstance>;
    addPost?: (val: PostInstance) => Promise<TitleInstance>;
    addPosts?: (val: PostInstance[]) => Promise<TitleInstance>;
    removePost?: (val: PostInstance) => Promise<TitleInstance>;
    removePosts?: (val: PostInstance[]) => Promise<TitleInstance>;
    createPost?: (val: PostInstance) => Promise<TitleInstance>;
}

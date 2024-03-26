import { Image } from './models/image';
import { Language } from './models/language';
import { Page } from './models/page';
import { Post } from './models/posts';
import { Section } from './models/section';
import { Text } from './models/text';
import { Title } from './models/title';

export const associate = () => {
    Language.hasMany(Text);
    Text.belongsTo(Language);

    Language.hasMany(Title);
    Title.belongsTo(Language);

    Language.hasMany(Post);
    Post.belongsTo(Language);

    Section.belongsToMany(Text, { through: 'sectionTexts' });
    Text.belongsToMany(Section, { through: 'sectionTexts' });

    Section.belongsToMany(Title, { through: 'sectionTitles' });
    Title.belongsToMany(Section, { through: 'sectionTitles' });

    Section.belongsToMany(Image, { through: 'sectionImages' });
    Image.belongsToMany(Section, { through: 'sectionImages' });

    Page.belongsToMany(Section, { through: 'pageSections' });
    Section.belongsToMany(Page, { through: 'pageSections' });

    Post.belongsToMany(Text, { through: 'postTexts' });
    Text.belongsToMany(Post, { through: 'postTexts' });

    Post.belongsToMany(Title, { through: 'postTitles' });
    Title.belongsToMany(Post, { through: 'postTitles' });

    Post.belongsToMany(Image, { through: 'postImages' });
    Image.belongsToMany(Post, { through: 'postImages' });
};

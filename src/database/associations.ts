import { Language } from './models/language';
import { Page } from './models/page';
import { Section } from './models/section';
import { Text } from './models/text';
import { Title } from './models/title';

export const associate = () => {
    Language.hasMany(Text);
    Text.belongsTo(Language);

    Language.hasMany(Title);
    Title.belongsTo(Language);

    Section.hasMany(Text);
    Text.belongsTo(Section);

    Section.hasMany(Title);
    Title.belongsTo(Section);

    Page.hasMany(Section);
    Section.belongsTo(Page);
};

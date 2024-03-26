import { Language } from './models/language';
import { Text } from './models/text';

export const associate = () => {
    Language.hasMany(Text);
    Text.belongsTo(Language);
};

import { DataTypes, Model } from 'sequelize';
import { SectionInterface } from '../../models/section';
import { sequelize } from '../database';
import { Image } from './image';
import { Text } from './text';
import { Title } from './title';

const Section = sequelize.define<Model, SectionInterface>('section', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Section.hasMany(Text);
Section.hasMany(Title);
Section.hasMany(Image);

export { Section };

import { DataTypes, Model } from 'sequelize';
import { PageInterface } from '../../models/page';
import { sequelize } from '../database';

const Page = sequelize.define<Model, PageInterface>('pages', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { Page };

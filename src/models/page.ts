import { Model } from 'sequelize';

export interface PageInterface {
    id: number;
    name: string;
}

export interface PageInstance extends Model<PageInterface> {}

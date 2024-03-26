import { Model } from 'sequelize';

export interface ImageInterface {
    id: number;
    url: string;
    tag: string;
}

export interface ImageInstance extends Model<ImageInterface> {}

import cors from 'cors';
import express from 'express';
import { sequelize } from './database/sequelize';

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use(express.json());

    await sequelize.sync();

    app.listen(3000, () => {
        console.log('listo por el puerto 3000', 3000);
    });
};

main();

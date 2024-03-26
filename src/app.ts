import cors from 'cors';
import express from 'express';
import { associate } from './database/associations';
import { sequelize } from './database/database';
import { seedLanguages } from './database/seeders/languages';
import { loadRoutes } from './routes';

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use(express.json());
    associate();

    const rutas = await loadRoutes();

    app.use(rutas);

    await sequelize.sync();

    seedLanguages();

    app.listen(3000, () => {
        console.log('listo por el puerto 3000', 3000);
    });
};

main();

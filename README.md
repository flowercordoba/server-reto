# Rest Project + TypeScript

Este proyecto previamente inicializado tiene todo lo necesario para trabajar con TypeScript, Express y Rest.

Cada paso de su configuración ya se ha realizado previamente en el curso, por lo que solo es necesario clonar el proyecto y comenzar a trabajar.


## Instalación

1. Clonar .env.template a .env y configurar las variables de entorno
2. Ejecutar `npm install` para instalar las dependencias
3. En caso de necesitar base de datos, configurar el docker-compose.yml y ejecutar `docker-compose up -d` para levantar los servicios deseados.
4. Ejecutar `npm run dev` para levantar el proyecto en modo desarrollo


/* eslint-disable @typescript-eslint/no-unused-vars */
import cookieSession from 'cookie-session';
import cors from 'cors';

import { envs } from './config/envs';
import { MongoDatabase } from './data/mongo';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async()=> {
  main();
})();


async function main() {

  await MongoDatabase.connect({
    dbName:envs.DB_NAME,
    mongoUri:envs.URI_MONGO

  });

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}

import { Router } from 'express';

import { AuthMiddleware } from '../shared/middlewares/auth.middleware';

import { Authroutes } from './auth/routes';
import { UserRoutes } from './user/routes';
import { TaskRoutes } from './task/routes';
import { CategorieRoutes } from './categorie/routes';
import { NotificationRoutes } from './notification/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/auth', Authroutes.routes );
    router.use('/api/user', [AuthMiddleware.validateJWT],UserRoutes.routes );
    router.use('/api/task', [AuthMiddleware.validateJWT],TaskRoutes.routes );
    router.use('/api/categorie',[AuthMiddleware.validateJWT], CategorieRoutes.routes );
    router.use('/api/notification',[AuthMiddleware.validateJWT], NotificationRoutes.routes );
    return router;
  }


}



import mongoose from 'mongoose';

import { Options } from '../interfaces/Index';

export class MongoDatabase {
  static async connect(options: Options) {
    const { dbName, mongoUri } = options;

    try {
      await mongoose.connect(mongoUri, {
        dbName: dbName
      });

      return true;
    } catch (error) {
      console.log('Mongo connection error');
      throw error;
    }
  }
  static async disconnect() {
    await mongoose.disconnect();
  }
}

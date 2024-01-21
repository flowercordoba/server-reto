import express from 'express';
import cors from 'cors';


import { envs } from './config/envs';
import { MongoDatabase } from './data/mongo';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

// funtion anonim auto invocate
(async()=> {
  main();
})();


async function main() {

  await MongoDatabase.connect({
    dbName:envs.DB_NAME,
    mongoUri:envs.URI_MONGO

  });

  const app = express();

  app.use(cors({
    origin: envs.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  }));


  app.use( express.json() );


  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}

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
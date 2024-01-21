import { Router } from 'express';
import { Authroutes } from './auth/routes';
import { UserRoutes } from './user/routes';
import { TaskRoutes } from './task/routes';
import { CategorieRoutes } from './categorie/routes';
import { NotificationRoutes } from './notification/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/auth', Authroutes.routes );
    router.use('/api/user', UserRoutes.routes );
    router.use('/api/task', TaskRoutes.routes );
    router.use('/api/categorie', CategorieRoutes.routes );
    router.use('/api/notification', NotificationRoutes.routes );
    return router;
  }
  
  
}


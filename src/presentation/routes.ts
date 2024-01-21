import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { UserRoutes } from './user/routes';
import { TaskRoutes } from './task/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/auth', AuthRoutes.routes );
    router.use('/api/user', UserRoutes.routes );
    router.use('/api/task', TaskRoutes.routes );
    return router;
  }


}


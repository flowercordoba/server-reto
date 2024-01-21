import { Router } from 'express';

// import { UserController } from './controller';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    // const controller = new UserController();

    // router.get('/read/:id', controller.Read);
    // router.post('/update', controller.Update);
    return router;
  }
}

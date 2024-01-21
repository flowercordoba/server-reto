import { Router } from 'express';
import { Notification } from './controller';




export class NotificationRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new Notification()

    router.get('/read/:id',  controller.Read);
    router.get('/read',    controller.ReadAll);
    router.delete('/detele/:id',   controller.Delete );
    return router;
  }


}


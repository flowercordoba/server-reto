import { Router } from 'express';
import { Task } from './controller';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new Task()

    router.post('/create',  controller.Create);
    router.get('/read/:id',  controller.Read);
    router.post('/update',    controller.Edit);
    router.delete('/detele',   controller.Delete );



    return router;
  }


}


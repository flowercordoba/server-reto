import { Router } from 'express';
import { Task } from './controller';




export class TaskRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new Task()

    router.post('/create',  controller.Create);
    router.get('/read/:id',  controller.Read);
    router.post('/update/:id',    controller.Edit);
    router.delete('/detele/:id',   controller.Delete );

    // routes status

    router.get('/status/completed',  controller.Completed);
    router.get('/status/process',  controller.Process);





    return router;
  }


}


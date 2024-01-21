import { Router } from 'express';
import { TaskController } from './controller';
import { TaskService } from '../../shared/services/task.service';




export class TaskRoutes {


  static get routes(): Router {

    const router = Router();
    const taskService = new TaskService();
    const controller = new TaskController(taskService)
    
    router.post('/create',  controller.createTask);
    router.get('/read/:id',  controller.getTaskById);
    router.get('/read',  controller.getTasks);
    router.get('/tasks/completed/:priority', controller.getCompletedTasksByPriority);

    router.post('/update/:id',    controller.updateTask);
    router.delete('/detele/:id',   controller.deleteTask );

    // routes status

    // router.get('/status/completed',  controller.Completed);
    // router.get('/status/process',  controller.Process);





    return router;
  }


}


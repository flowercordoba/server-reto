import { Router } from 'express';
import { Categorie } from './controller';




export class CategorieRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new Categorie()

    router.post('/create',  controller.Create);
    router.get('/read/:id',  controller.Read);
    router.post('/update/:id',    controller.Edit);
    router.delete('/detele/:id',   controller.Delete );
    return router;
  }


}


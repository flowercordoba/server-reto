import { Router } from 'express';
import { Categorie } from './controller';
import { CategoryService } from '../../shared';




export class CategorieRoutes {


  static get routes(): Router {

    const router = Router();
    const categoryService = new CategoryService();

    const controller = new Categorie(categoryService)

    router.post('/create',  controller.Create);
    router.get('/read/:id',  controller.Read);
    router.get('/read',  controller.getCategories);
    router.post('/update/:id',    controller.Edit);
    router.delete('/detele/:id',   controller.Delete );
    return router;
  }


}


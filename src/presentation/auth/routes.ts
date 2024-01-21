import { Router } from 'express';
import { Auth } from './controller';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new Auth()

    router.post('/login',  controller.loginCTRL);
    router.post('/register',    controller.registerCTRL);
    router.get('/validate-email/:token',   controller.emailValidate );



    return router;
  }


}


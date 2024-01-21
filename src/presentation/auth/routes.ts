import { Router } from 'express';
import { Auth } from './controller';
import { AuthService } from '../../shared/services/auth.service';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const authService = new AuthService();
    const controller = new Auth(authService)

    router.post('/login',  controller.loginCTRL);
    router.post('/register',    controller.registerCTRL);
    router.get('/validate-email/:token',   controller.emailValidate );



    return router;
  }


}


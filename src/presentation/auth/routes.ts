import { AuthService } from '../../shared';
import { EmailService } from '../../shared/services/email.service';
import { envs } from './../../config';
import { Router } from 'express';
import { Auth } from './controller';




export class Authroutes {


  static get routes(): Router {

    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_EMAIL,
    );

    const authService = new AuthService(emailService);

    const controller = new Auth(authService);
    
    router.post('/login', controller.loginCTRL );
    router.post('/register', controller.registerCTRL );
    
    router.get('/validate-email/:token', controller.emailValidate );



    return router;
  }


}
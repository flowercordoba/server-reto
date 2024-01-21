import {Request,Response} from 'express'
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto'
import { AuthService } from '../../shared/services/auth.service';
import { CustonError } from '../../shared';
import { LoginUserDto } from '../../domain';

export class Auth{
    constructor( public readonly authService: AuthService,){}

    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustonError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      } 

    registerCTRL =(req:Request,res:Response)=>{
        const [error, registerDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({error})
    
    
        this.authService.registerUser(registerDto!)
          .then( (user) => res.json(user) )
          .catch( error => this.handleError(error, res) );
    }
    loginCTRL =(req:Request,res:Response)=>{
      const [error, loginUserDto] = LoginUserDto.create(req.body);
      if ( error ) return res.status(400).json({error})
  
  
      this.authService.loginUser(loginUserDto!)
        .then( (user) => res.json(user) )
        .catch( error => this.handleError(error, res) );
    }

 
    emailValidate =(req:Request,res:Response)=>{
        res.json('EmailValidate')
    }
}
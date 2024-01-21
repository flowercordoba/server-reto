import {Request,Response} from 'express'

export class Auth{
    constructor(){

    }

    registerCTRL =(req:Request,res:Response)=>{
        res.json('registerCTRL')
    }
    loginCTRL =(req:Request,res:Response)=>{
        res.json('loginCTRL')
    }

 
    emailValidate =(req:Request,res:Response)=>{
        res.json('EmailValidate')
    }
}
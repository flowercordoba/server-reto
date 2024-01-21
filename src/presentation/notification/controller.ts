import {Request,Response} from 'express'

export class Notification{
    constructor(){}

   
    ReadAll =(req:Request,res:Response)=>{
        res.json('ReadAll')
    }
    
    Read =(req:Request,res:Response)=>{
        res.json('Read')
    }
    Delete =(req:Request,res:Response)=>{
        res.json('delete')
    }
    
}
import {Request,Response} from 'express'

export class Task{
    constructor(){}

    Create =(req:Request,res:Response)=>{
        res.json('create')
    }
    Read =(req:Request,res:Response)=>{
        res.json('read')
    }
    Edit =(req:Request,res:Response)=>{
        res.json('edit')
    }
    Delete =(req:Request,res:Response)=>{
        res.json('delete')
    }
// status
    Completed =(req:Request,res:Response)=>{
        res.json('Completed')
    }
    Process =(req:Request,res:Response)=>{
        res.json('Process')
    }





    

 
    
}
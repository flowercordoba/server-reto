import {Request,Response} from 'express'

export class Task{
    constructor(){}

    Create =async(req:Request,res:Response)=>{
        res.json('create')
    }
    Read =async(req:Request,res:Response)=>{
        res.json('read')
    }
    GetTask =async(req:Request,res:Response)=>{
        res.json('GetTask')
    }
    Edit =async(req:Request,res:Response)=>{
        res.json('edit')
    }
    Delete =async(req:Request,res:Response)=>{
        res.json('delete')
    }
// status
    Completed =async(req:Request,res:Response)=>{
        res.json('Completed')
    }
    Process =async(req:Request,res:Response)=>{
        res.json('Process')
    }





    

 
    
}
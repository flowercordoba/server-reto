import {Request,Response} from 'express'
import { CustonError } from '../../shared';
import { CreateCategoryDto, UpdateCategoryDto } from '../../domain';

export class Categorie{
    constructor(){}


    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustonError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      } 

    Create = async( req:Request,res:Response)=>{
        const [error, createCategorieDto] = CreateCategoryDto.create(req.body);
        if(error) return res.status(400).json({error})
        res.json(createCategorieDto)
    }
    Read =async(req:Request,res:Response)=>{
        res.json('read')
    }
    getCategories =async(req:Request,res:Response)=>{
        res.json('getCategories')
    }
    Edit =async(req:Request,res:Response)=>{
        const [error, updateCategorieDto] = UpdateCategoryDto.create(req.body);
        if(error) return res.status(400).json({error})
        res.json(updateCategorieDto)
    }
    Delete =async(req:Request,res:Response)=>{
        res.json('delete')
    }






    

 
    
}
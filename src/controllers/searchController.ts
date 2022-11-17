import { Request, Response } from "express";
import router from "../routes";

export const search = (req:Request, res:Response)=>{
    res.send('PAGINA DE SEARCH')
    //res.render('pages/search');
}


import { Request, Response } from "express";
import router from "../routes";


export const home = (req:Request, res:Response)=>{
    
    res.send('HOME DA PAGINA');
    //res.render('pages/page');
}

export const dogs = (req:Request, res:Response)=>{
    
    res.send('PAGINA DE DOGS')
    //res.render('pages/page');
}

export const cats = (req:Request, res:Response)=>{

    res.send('PAGINA DE CATS')
    //res.render('pages/page');
}

export const fishes = (req:Request, res:Response)=>{

    res.send('PAGINA DE FISHES')
    //res.render('pages/page');
}
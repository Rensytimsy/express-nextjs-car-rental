import { items } from "../../models/sample/data";
import express,{Request, Response, NextFunction} from "express";

export const getDataSample = async(req: Request, res: Response, next: NextFunction) => {
    try{
        res.status(200).json({data: items});
    }catch(error){
        next(error);
    }
}
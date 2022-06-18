import { GetByAmenityUseCase } from "./getByAmenityUseCase";
import { Request, Response } from "express";
import { InputDTO } from "./getByAmenityDTO";

export class GetByAmenityController{

    constructor(private readonly getByAmenityUseCase:GetByAmenityUseCase){}

    public async handle(request: Request, response: Response){
        try{
            const params = request.query ;
            

            const data = await this.getByAmenityUseCase.execute(params as InputDTO)
          
            return response.status(201).json(data);

        }catch(e:any){

            return response.status(400).json({

                message: e.message || "Unexpected error.",

            })
        }
    }


}
import { Request, Response } from "express";
import { GetBusStopUseCase } from "./getBusStopUseCase";

export class GetBusStopController {
  constructor(private getBusStopUseCase: GetBusStopUseCase) {}

  public async handle(request: Request, response: Response) {
    const q = request.query.q as string;

    try {
      
      const data = await this.getBusStopUseCase.execute({ q });
      
      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}

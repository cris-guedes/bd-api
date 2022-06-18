import { Request, Response } from "express";
import { InputDTO } from "./getByHigwayDTO";
import { GetByHigwayUseCase } from "./getByHigwayUseCase";

export class GetByHigwayController {
  constructor(private getByHigwayUseCase: GetByHigwayUseCase) {}

  public async handle(request: Request, response: Response) {
    const params = request.query

    try {
      const data = await this.getByHigwayUseCase.execute(params as InputDTO);
      return response.status(201).json(data);
    } catch (e: any) {
      return response.status(400).json({
        message: e.message || "Unexpected error.",
      });
    }
  }
}

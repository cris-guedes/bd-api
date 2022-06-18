import { Response, Request, Router } from "express";
import getBusStopController from "../domain/useCases/getBusStop";

const route = Router();

route.get("/bus", (request, response) => {
  return getBusStopController.handle(request, response);
});

export default route;

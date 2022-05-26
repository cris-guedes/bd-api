import { Response, Request, Router } from "express";
import getBusStopController from "../domain/useCases/getBusStop";

const route = Router();

route.get("/getbusstop", (request, response) => {
  console.log("controller");
  return getBusStopController.handle(request, response);
});

export default route;

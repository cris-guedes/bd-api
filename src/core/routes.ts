import { Router } from "express";
import getByHigwayController from "../domain/useCases/getByHigway";
import getByAmenityController from "../domain/useCases/getDataByAmenity";

const route = Router();

route.get("/highway", (request, response) => {
  return getByHigwayController.handle(request, response);
});

route.get("/amenity",(request, response) => {
  return getByAmenityController.handle(request, response);
})

export default route;

import { Response, Request, Router } from "express";

const route = Router();

route.get("/ping", (req: Request, res: Response) => {
  res.send({ pong: true });
});

export default route;

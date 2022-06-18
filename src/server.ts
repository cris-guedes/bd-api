import express from "express";
import env from "./main/env";
import route from "./core/routes";
import cors from "cors";

const server = express();
server.use(cors());
server.use(route);

server.listen(env.serverPort, () =>
  console.log(`🚀🚀server running at ${env.serverPort} 🚀🚀`)
);

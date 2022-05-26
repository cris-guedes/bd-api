import express from "express";
import env from "./main/env";
import route from "./core/routes";

const server = express();

server.use(route);

server.listen(env.serverPort, () =>
  console.log(`🚀🚀server running at ${env.serverPort} 🚀🚀`)
);

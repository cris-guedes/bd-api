import express from "express";
import dotenv from "dotenv";
import route from "./core/routes";

dotenv.config();

const server = express();

server.use(route);

server.listen(process.env.PORT, () =>
  console.log(`🚀🚀server running at ${process.env.PORT} 🚀🚀`)
);

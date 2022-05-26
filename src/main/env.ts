import * as dotenv from "dotenv";
dotenv.config();

export default {
  serverPort: process.env.PORT,
  overpassBaseUrl: process.env.OVERPASS_API_URL,
};

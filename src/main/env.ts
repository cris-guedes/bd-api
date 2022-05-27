import * as dotenv from "dotenv";
dotenv.config();

export default {
  serverPort: process.env.PORT as string,
  geodataProviderBaseUrl: process.env.GEODATA_PROVIDER_URL as string,
  geoDecoderProviderBaseUrl: process.env.GEODECODER_PROVIDER_URL as string,
};

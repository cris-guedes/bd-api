import { OverpassProvider } from "../../../infra/providers/geoDataProvider/implementation/OverpassProvider";
import { NominatimProvider } from "../../../infra/providers/geoDecoderProvider/implementation/NominatimProvider";
import { GetBusStopController } from "./getBusStopController";
import { GetBusStopUseCase } from "./getBusStopUseCase";

const geodataProvider = new OverpassProvider();
const geodecoderProvider = new NominatimProvider();
const getBusStopUseCase = new GetBusStopUseCase(
  geodataProvider,
  geodecoderProvider
);
const getBusStopController = new GetBusStopController(getBusStopUseCase);

export default getBusStopController;

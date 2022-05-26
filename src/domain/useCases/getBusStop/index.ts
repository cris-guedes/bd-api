import { OverpassProvider } from "../../../infra/providers/geoDataProvider/implementation/OverpassProvider";
import { GetBusStopController } from "./getBusStopController";
import { GetBusStopUseCase } from "./getBusStopUseCase";

const geodataProvider = new OverpassProvider();
const getBusStopUseCase = new GetBusStopUseCase(geodataProvider);
const getBusStopController = new GetBusStopController(getBusStopUseCase);

export default getBusStopController;

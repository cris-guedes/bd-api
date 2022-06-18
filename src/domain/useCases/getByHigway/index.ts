import { OverpassProvider } from "../../../infra/providers/geoDataProvider/implementation/OverpassProvider";
import { NominatimProvider } from "../../../infra/providers/geoDecoderProvider/implementation/NominatimProvider";
import { GetByHigwayController } from "./getByHigwayController";
import { GetByHigwayUseCase} from "./getByHigwayUseCase";

const geodataProvider = new OverpassProvider();
const geodecoderProvider = new NominatimProvider();
const getHigwayUseCase = new GetByHigwayUseCase(
  geodataProvider,
  geodecoderProvider
);
const getByHigwayController = new GetByHigwayController(getHigwayUseCase );

export default getByHigwayController;

import { OverpassProvider } from "../../../infra/providers/geoDataProvider/implementation/OverpassProvider";
import { NominatimProvider } from "../../../infra/providers/geoDecoderProvider/implementation/NominatimProvider";
import { GetByAmenityController } from "./getByAmenityController";
import { GetByAmenityUseCase } from "./getByAmenityUseCase";



const geoDecoderProvider = new NominatimProvider()

const geoDataProvider = new OverpassProvider()

const getByAmenityUseCase = new GetByAmenityUseCase(geoDataProvider,geoDecoderProvider)

const getByAmenityController = new GetByAmenityController(getByAmenityUseCase)

export default getByAmenityController
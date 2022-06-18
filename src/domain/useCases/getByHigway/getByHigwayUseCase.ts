import { IGeodataProvider } from "../../../infra/providers/geoDataProvider/IGeodataProvider";
import { IGeodecoderProvider } from "../../../infra/providers/geoDecoderProvider/IGeodecoderProvider";
import { InputDTO } from "./getByHigwayDTO";

export class GetByHigwayUseCase {
  constructor(
    private readonly geoDataProvider: IGeodataProvider,
    private readonly geoDecoderProvider: IGeodecoderProvider
  ) {}

  async execute({ q,type}: InputDTO) {
    const areaId = await this.geoDecoderProvider.getAreaId(q);
   if(areaId){
    const data = await this.geoDataProvider.getDatabyHigway(areaId,type);
    return data
   }
    
   
  }
}


import { IGeodataProvider } from "../../../infra/providers/geoDataProvider/IGeodataProvider";
import { IGeodecoderProvider } from "../../../infra/providers/geoDecoderProvider/IGeodecoderProvider";
import { NominatimProvider } from "../../../infra/providers/geoDecoderProvider/implementation/NominatimProvider";
import { InputDTO } from "./getByAmenityDTO";


export class GetByAmenityUseCase{
    constructor(private readonly geoDataProvider: IGeodataProvider,
        private readonly geoDecoderProvider: IGeodecoderProvider){}

    public async execute ({q,type}:InputDTO){
        
        const areaId = await this.geoDecoderProvider.getAreaId(q)

        if(areaId){
            const data = await this.geoDataProvider.getDataByAmenity(areaId,type)
            return data
        }
    
    }

}



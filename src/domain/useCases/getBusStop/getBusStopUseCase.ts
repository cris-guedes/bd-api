import { IGeodataProvider } from "../../../infra/providers/geoDataProvider/IGeodataProvider";
import { IGeodecoderProvider } from "../../../infra/providers/geoDecoderProvider/IGeodecoderProvider";

export class GetBusStopUseCase {
  constructor(
    private readonly geoDataProvider: IGeodataProvider,
    private readonly geoDecoderProvider: IGeodecoderProvider
  ) {}

  async execute({ q }: GetBusStopUseCase.Params) {
    const areaId = await this.geoDecoderProvider.getAreaId({
      q: q,
      format: "json",
    });
    console.log(areaId);

    const busStop = await this.geoDataProvider.getData(areaId as number);
    return busStop;
  }
}

export namespace GetBusStopUseCase {
  export type Params = {
    q: string;
  };

  export type Result = [Node];
}

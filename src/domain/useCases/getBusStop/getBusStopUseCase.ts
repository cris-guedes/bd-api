import { IGeodataProvider } from "../../../infra/providers/geoDataProvider/IGeodataProvider";

export class GetBusStopUseCase {
  constructor(private readonly geodataProvider: IGeodataProvider) {}

  async execute() {
    const busStop = await this.geodataProvider.getData();
    return busStop;
  }
}

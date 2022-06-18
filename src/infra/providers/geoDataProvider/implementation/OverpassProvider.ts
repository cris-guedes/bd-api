import Axios from "axios";
import { queries } from "./queries";
import env from "../../../../main/env";
import { IGeodataProvider } from "../IGeodataProvider";
import * as Api from "./configs/types";
import { Node } from "../../../../domain/entities/node";

export class OverpassProvider implements IGeodataProvider {
  private httpCaller = Axios;
  constructor() {}
 public async getDatabyHigway(areaId: number, type: string): Promise<[Node]> {

    const query = queries(areaId, "higway",type);

    const { data } = await this.httpCaller.get<Api.Received>(
      env.geodataProviderBaseUrl as string,
      { data: query }
    );
    return data.elements;
  }

  public async getDataByAmenity(areaId: number, type: string): Promise<[Node]> {
    const query = queries(areaId, "amenity",type);
    const { data } = await this.httpCaller.get<Api.Received>(
      env.geodataProviderBaseUrl as string,
      { data: query }
    );

    return data.elements;
  }


}

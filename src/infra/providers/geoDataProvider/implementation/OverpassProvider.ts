import Axios from "axios";
import { queries } from "./queries";
import env from "../../../../main/env";
import { IGeodataProvider } from "../IGeodataProvider";
import * as Api from "./configs/types";
import { Node } from "../../../../domain/entities/node";

export class OverpassProvider implements IGeodataProvider {
  private httpCaller = Axios;
  constructor() {}

  public async getData(areaId: number): Promise<[Node]> {
    const query = queries(areaId.toString(), "node");

    const { data } = await this.httpCaller.get<Api.Received>(
      env.geodataProviderBaseUrl as string,
      { data: query?.bus }
    );

    return data.elements;
  }
}

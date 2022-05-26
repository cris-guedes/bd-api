import Axios from "axios";
import { queries } from "./queries";
import env from "../../../../main/env";
import { IGeodataProvider } from "../IGeodataProvider";
import * as Api from "./configs/types";

export class OverpassProvider implements IGeodataProvider {
  private axiosInstance = Axios;
  constructor() {}

  public async getData(): Promise<any> {
    const query = queries("3600297636", "node");

    const { data, headers, request, status } =
      await this.axiosInstance.get<Api.Received>(
        env.overpassBaseUrl as string,
        { data: query?.bus }
      );
    console.log(data);

    return data.elements;
  }
}

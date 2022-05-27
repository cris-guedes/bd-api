import Axios from "axios";
import env from "../../../../main/env";
import { IGeodecoderProvider } from "../IGeodecoderProvider";
import * as Api from "./configs/types";

export class NominatimProvider implements IGeodecoderProvider {
  private http = Axios;
  public baseUrl = env.geoDecoderProviderBaseUrl;

  async getAreaId(params: Object): Promise<number | undefined> {
    try {
      const { data } = await this.http.get<Api.Received>(this.baseUrl, {
        params: params,
        baseURL: this.baseUrl,
        method: "GET",
      });

      return getOsmId(data);
    } catch (e: any) {
      throw new Error("a busca não retornou resultados");
    }
  }
}

function getOsmId(elements: [Api.Features]) {
  const baseId = 3600000000;
  const limitId = 3700000000;
  let result;
  for (let i = 0; i < elements.length; i++) {
    const osmId = elements[i].osm_id + baseId;
    const osmType = elements[i].osm_type;
    if (osmType === "relation" && osmId < limitId) {
      result = osmId;
      break;
    }
  }
  return result;
}

const teste = new NominatimProvider();
teste.getAreaId({ q: "toledo+parana", format: "json" });

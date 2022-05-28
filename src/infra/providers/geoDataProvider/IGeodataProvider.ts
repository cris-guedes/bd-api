import { Node } from "../../../domain/entities/node";

export interface IGeodataProvider {
  getData(areaId: number): Promise<[Node]>;
}

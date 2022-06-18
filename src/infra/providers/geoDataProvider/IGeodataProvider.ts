import { Node } from "../../../domain/entities/node";

export interface IGeodataProvider {
  getDatabyHigway(areaId: number,type:string): Promise<[Node]>;
  getDataByAmenity(areaId:number,type:string):Promise<[Node]>;
}

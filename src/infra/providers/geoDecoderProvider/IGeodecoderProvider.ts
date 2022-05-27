export interface IGeodecoderProvider {
  getAreaId(params: Object): Promise<number | undefined>;
}

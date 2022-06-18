export interface IGeodecoderProvider {
  getAreaId(q: string): Promise<number | undefined>;
}

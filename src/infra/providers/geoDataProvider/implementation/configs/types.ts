export type Received = {
  version: number;
  generator: string;
  osm3s: {
    timestamp_osm_base: string;
    timestamp_areas_base: string;
    copyright: string;
  };
  elements: [Node];
};

type Node = {
  type: string;
  id: number;
  lat: number;
  lon: number;
  tags: [Object];
};

export type Received = [Features];

export type Features = {
  place_id: number;
  licence: string;
  osm_type: "node" | "relation";
  osm_id: number;
  boundingbox: [string];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
};

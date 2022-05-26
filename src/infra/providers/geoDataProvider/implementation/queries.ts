type geoFeature = "node";
export function queries(areaId: string, feature: geoFeature) {
  if (feature === "node") {
    return {
      bus: `[out:json] [timeout:25]; area(id:${areaId}) -> .area_0; ( node["highway"="bus_stop"](area.area_0); way["highway"="bus_stop"](area.area_0); relation["highway"="bus_stop"](area.area_0); ); (._;>;); out body;`,
    };
  }
}

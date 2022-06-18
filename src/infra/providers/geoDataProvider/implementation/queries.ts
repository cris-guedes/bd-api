type geoFeature = "higway"|"amenity";
export function queries(areaId: number, feature: geoFeature,type:string) {
  if (feature === "higway") {
    return `[out:json] [timeout:25]; area(id:${areaId}) -> .area_0; ( node["highway"=${type}](area.area_0); ); (._;>;); out body;`
  }

  if(feature==="amenity"){
    return  `[out:json] [timeout:25]; area(id:${areaId}) -> .area_0; ( node["amenity"=${type}](area.area_0); ); (._;>;); out body;`
  }
}

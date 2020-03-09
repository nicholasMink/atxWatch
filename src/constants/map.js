export const MAP_DEFAULT = {
  accessToken: process.env.MAPBOX_API_KEY,
  style: process.env.MAPBOX_URL,
  center: [-97.73333, 30.266666],
  minZoom: 8,
  maxZoom: 20,
  flyToOptions: { speed: 0.8 },
  offset: { 'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38] },
};

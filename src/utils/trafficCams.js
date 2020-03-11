import fallbackImage from '../public/static/imageNotAvailable.png';
/*
  Initial traffic cam object shape
  {
    camera_id: "295"
    location_name: " CONGRESS AVE / WILLIAM CANNON DR"
    camera_status: "TURNED_ON"
    turn_on_date: "2017-03-01T06:00:00.000Z"
    camera_mfg: "Spectra Enhanced"
    atd_location_id: "LOC16-002015"
    signal_eng_area: "SOUTHWEST"
    council_district: "2"
    jurisdiction_label: "AUSTIN FULL PURPOSE"
    location_type: "ROADWAY"
    primary_st_block: "6400"
    primary_st: " CONGRESS AVE"
    cross_st_block: "100"
    cross_st: " WILLIAM CANNON DR"
    coa_intersection_id: "5152526"
    modified_date: "2020-02-28T09:45:00.000Z"
    location: {latitude: "30.1930141", longitude: "-97.7788773"}
    ip_comm_status: "ONLINE"
    comm_status_datetime_utc: "2020-02-28T09:35:00.000Z"
    location_longitude: "-97.7788773"
    location_latitude: "30.1930141"
    screenshot_address: " http://atdatmsweb2.austintexas.gov/CCTVImages/CCTV295.jpg"
    id: "5915fb4632901a3ba85917d5"
  }
*/

export const formatCamData = (data = []) => {
  const cams = data.map(cam => {
    const {
      id = '',
      camera_id: cameraId = '',
      location_longitude: long = '',
      location_latitude: lat = '',
      location_name: intersection = '',
      signal_eng_area: area = '',
      screenshot_address: imageUrl = '',
    } = cam;
    const longitude = Number(long);
    const latitude = Number(lat);
    const coords = [longitude, latitude];
    const properties = { id, coords, intersection, imageUrl };
    const camObj = {
      id,
      cameraId,
      coords,
      longitude,
      latitude,
      intersection,
      area,
      imageUrl,
      properties,
    };
    return camObj;
  });
  return cams;
};

export const getImageFallback = e => {
  e.target.src = fallbackImage;
};
export const MAP_DEFAULT = {
  accessToken: process.env.MAPBOX_API_KEY,
  style: process.env.MAPBOX_URL,
  center: [-97.73333, 30.266666],
  minZoom: 10,
  maxZoom: 18,
  flyToOptions: { speed: 0.8 },
  offset: { 'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38] },
  defaultSelectedArea: {
    value: 'ALL',
    label: 'GREATER AUSTIN AREA'
  },
};


export const MONITOR_AREAS = [
  { value: 'ALL', label: 'Greater Austin Area' },
  { value: 'CENTRAL', label: 'Central', color: '#fff' },
  { value: 'SOUTHWEST', label: 'Southwest', color: '#fff' },
  { value: 'SOUTHEAST', label: 'Southeast', color: '#fff' },
  { value: 'NORTHWEST', label: 'Northwest', color: '#fff' },
  { value: 'NORTHEAST', label: 'Northeast', color: '#fff' },
]

export const MONITOR_SELECTOR_STYLES = {
  control: styles => ({ ...styles, backgroundColor: 'transparent', color: '#ccc', borderColor: '#ccc', boxShadow: 'none', fontSize: '0.9rem' }),
  input: styles => ({ ...styles, backgroundColor: '#333', color: '#ccc' }),
  placeholder: styles => ({ ...styles, backgroundColor: 'transparent', color: '#aaa' }),
  option: styles => ({ ...styles, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }),
  singleValue: styles => ({ ...styles, color: '#fff', backgroundColor: 'transparent' }),
  menu: styles => ({ ...styles, backgroundColor: '#111' }),
  menuPortal: styles => ({ ...styles, backgroundColor: '#111' }),
  menuList: styles => ({ ...styles, backgroundColor: 'transparent', padding: 0, margin: 0, fontSize: '0.9rem' }),
  group: styles => ({ ...styles, backgroundColor: '#111' }),
  indicatorSeparator: () => ({ width: 0 })
};

export const MONITOR_ENDPOINT_MAPPER = {
  'ALL': '',
  'CENTRAL': '&signal_eng_area=CENTRAL',
  'SOUTHWEST': '&signal_eng_area=SOUTHWEST',
  'SOUTHEAST': '&signal_eng_area=SOUTHEAST',
  'NORTHWEST': '&signal_eng_area=NORTHWEST',
  'NORTHEAST': '&signal_eng_area=NORTHEAST',
}
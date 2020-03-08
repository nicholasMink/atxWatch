import axios from 'axios';
import { API_URL } from '../../constants/apis';
import { TRAFFIC_CAMS } from '../../constants/actionTypes';
import { formatCamData } from '../../utils/trafficCams';

export const getTrafficCams = (query = '') => {
  return async dispatch => {
    const queryParams = Boolean(query.length)
      ? `$limit=400${query}`
      : '$limit=20&ip_comm_status=ONLINE';
    const errorResponse = 'Cameras are currently unavailable';
    try {
      dispatch({ type: TRAFFIC_CAMS.LOADING });
      const resp = await axios.get(`${API_URL.trafficCams}?${queryParams}`);
      const respData = resp.statusText === 'OK' ? resp.data : errorResponse;
      if (resp.statusText === 'OK') {
        console.log(respData);
        const cams = formatCamData(respData);
        dispatch({
          type: TRAFFIC_CAMS.SUCCESS,
          payload: {
            cams,
          },
        });
      }
    } catch (error) {
      dispatch({ type: TRAFFIC_CAMS.FAIL, payload: { cams: [] }, error });
    }
  };
};

import { TRAFFIC_CAMS } from '../../constants/actionTypes';

const initialState = {
  cams: [],
  camsStatus: null,
};

const trafficCams = (state = initialState, action) => {
  switch (action.type) {
    case TRAFFIC_CAMS.LOADING: {
      return {
        ...state,
        camsStatus: 'loading',
      };
    }
    case TRAFFIC_CAMS.SUCCESS: {
      return {
        ...state,
        camsStatus: 'success',
        ...action.payload,
      };
    }
    case TRAFFIC_CAMS.FAIL: {
      return {
        ...state,
        camsStatus: 'error',
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default trafficCams;

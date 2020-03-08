import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Layer, Feature, Popup } from 'react-mapbox-gl';
import Map from '../design/Map/Map';
import Sidebar from '../design/Sidebar/Sidebar';
import { getTrafficCams } from '../../redux/actions/trafficCams';
import MonitorItem from './MonitorItem';

function Monitor(props) {
  const { coords = [], cams = [], camsStatus, getTrafficCams } = props;
  const [popupItem, setPopupItem] = useState({ isActive: false });
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCams = () => {
      if (cams.length < 1) {
        dispatch(getTrafficCams);
      }
    };
    console.log('useEffect was called', cams);
    fetchCams();
  }, []);
  const handleMonitorItem = (e, data) => {
    // console.log(e, data);
    e.preventDefault();
    const { properties = {} } = data;
    setPopupItem({ ...properties, isActive: true });
  };
  const renderMonitorItems = cams.map(cam => (
    <MonitorItem
      key={cam.id}
      id={cam.id}
      onClick={handleMonitorItem}
      coords={cam.coords}
      properties={cam.properties}
    />
  ));
  const renderMap = (
    <Map closePopup={closePopup} popupItem={popupItem}>
      {renderMonitorItems}
    </Map>
  );
  const closePopup = () => {
    setPopupItem({ isActive: false });
  };
  return (
    <div className="app-wrapper--content">
      {/* <Sidebar /> */}
      <main className="app-wrapper--main">
        {(camsStatus === 'loading' || camsStatus === 'error') && (
          <div>{`Traffic cameras ${camsStatus}...`}</div>
        )}
        {camsStatus !== 'null' && renderMap}
      </main>
    </div>
  );
}

Monitor.defaultProps = {
  coords: [-97.73333, 30.266666],
};

Monitor.propTypes = {
  coords: PropTypes.array,
};

const mapStateToProps = state => ({
  cams: state.trafficCams.cams,
  camsStatus: state.trafficCams.camsStatus,
});

const mapDispatchToProps = {
  getTrafficCams,
};

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);

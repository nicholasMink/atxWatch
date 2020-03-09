import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { connect, useDispatch } from 'react-redux';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import MonitorItem from './MonitorItem';
import { getTrafficCams } from '../../redux/actions/trafficCams';
import { MAP_DEFAULT } from '../../constants/map';
import './Monitor.scss';

const { style, center, accessToken, minZoom, maxZoom, flyToOptions, offset } = MAP_DEFAULT;

const Mapbox = ReactMapboxGl({
  minZoom,
  maxZoom,
  accessToken,
});

function Monitor(props) {
  const { cams = [], camsStatus, getTrafficCams } = props;
  const [popupItem, setPopupItem] = useState({ isActive: false });
  const [mapOptions, setMapOptions] = useState({ zoom: [11], bearing: 0, pitch: 0 });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCams = () => {
      if (cams.length < 1) {
        dispatch(getTrafficCams);
      }
    };
    fetchCams();
  }, []);

  const openPopup = (e, data) => {
    e.preventDefault();
    const { properties = {} } = data;
    setPopupItem({ ...properties, isActive: true });
  };

  const closePopup = () => {
    setPopupItem({ isActive: false });
  };

  const renderMonitorItems = cams.map(cam => (
    <MonitorItem
      key={cam.id}
      id={cam.id}
      onClick={openPopup}
      coords={cam.coords}
      properties={cam.properties}
    />
  ));

  return (
    <div className="app-wrapper--content">
      <main className="app-wrapper--main">
        {(camsStatus === 'loading' || camsStatus === 'error') && (
          <div>{`Traffic cameras ${camsStatus}...`}</div>
        )}
        <div className="map-container">
          <Mapbox
            style={style}
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
            center={center}
            zoom={mapOptions.zoom}
            flyToOptions={flyToOptions}
            onClick={() => closePopup()}
          >
            {renderMonitorItems}
            {popupItem.isActive && (
              <Popup
                coordinates={popupItem.coords}
                offset={offset}
                latitude={popupItem.coords[1]}
                longitude={popupItem.coords[0]}
                onClose={closePopup}
                className="popup-container"
              >
                <div className="popup-content-img-wrapper">
                  {popupItem.imageUrl !== '' && (
                    <img
                      id={`img-${popupItem.id}`}
                      className="popup-content-img"
                      src={`${popupItem.imageUrl}`}
                      alt="Latest image isn't unavailable"
                    />
                  )}
                </div>
                <div className="popup-content-controls">
                  <div className="popup-content-active">
                    <a
                      className="popup-content-link"
                      href={`${popupItem.imageUrl}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      View Full Image
                    </a>
                    <button className="popup-content-btn-close" onClick={() => closePopup()}>
                      CLOSE
                    </button>
                  </div>
                </div>
              </Popup>
            )}
          </Mapbox>
        </div>
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
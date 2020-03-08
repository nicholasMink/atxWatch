import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import { MAP_DEFAULT } from '../../../constants/map';
import './Map.scss';

function Map(props) {
  const { geoJson, children, popupItem, closePopup } = props;
  const { style, center, token } = MAP_DEFAULT;
  const Mapbox = ReactMapboxGl({
    minZoom: 8,
    maxZoom: 15,
    accessToken: token,
  });
  const flyToOptions = {
    speed: 0.8,
  };
  return (
    <div className="map-container">
      <Mapbox
        renderChildrenInPortal
        style={style}
        containerStyle={{
          height: '100%',
          width: '100%',
          flex: 1,
        }}
        center={center}
        zoom={[12]}
        antialias
        flyToOptions={flyToOptions}
      >
        {children}
        {popupItem.isActive ? (
          <Popup
            coordinates={popupItem.coords}
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
          </Popup>
        ) : null}
      </Mapbox>
    </div>
  );
}

Map.defaultProps = {
  geoJson: {},
};

Map.propTypes = {
  geoJson: PropTypes.object,
};

export default Map;

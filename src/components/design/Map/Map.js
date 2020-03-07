import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl from 'react-mapbox-gl';
import { MAP_DEFAULT } from '../../../constants/map';
import './Map.scss';

function Map(props) {
  const { geoJson, children } = props;
  const { style, center, token } = MAP_DEFAULT;
  const Map = ReactMapboxGl({
    accessToken: token,
  });

  return (
    <div className="map-container">
      <Map
        style={style}
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        center={center}
      >
        {children}
      </Map>
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

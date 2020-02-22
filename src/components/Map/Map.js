import React from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl from 'react-mapbox-gl'
import './Map.scss'

function Map(props) {
  const { geoJson, config, children } = props;
  const { style, center, token } = config;
  const Map = ReactMapboxGl({
    accessToken: token,
  });

  return (
    <div className="map-container">
      <Map
        style={style}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
        center={center}
      >
        {children}
      </Map>
    </div>
  )
}

Map.defaultProps = {
  geoJson: {},
  config: {
    center: [-97.733330, 30.266666],
  }
}

Map.propTypes = {
  geoJson: PropTypes.object,
  config: PropTypes.shape({
    token: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    center: PropTypes.array,
  }),
}

export default Map


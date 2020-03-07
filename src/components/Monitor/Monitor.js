import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Feature } from 'react-mapbox-gl';
import Map from '../design/Map/Map';
import Sidebar from '../design/Sidebar/Sidebar';

function Monitor(props) {
  const { coords = [] } = props;
  return (
    <div className="app-wrapper--content">
      {/* <Sidebar /> */}
      <main className="app-wrapper--main">
        <Map>
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={coords} />
          </Layer>
        </Map>
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

export default Monitor;

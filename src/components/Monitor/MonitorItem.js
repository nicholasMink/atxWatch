import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Layer, Feature } from 'react-mapbox-gl';
import { ICONS } from '../design/Icons/Icons';

function MonitorItem(props) {
  const { onClick, coords, properties, zoom, id } = props;
  const mapMarker = (
    <Marker
      id={id}
      onClick={e => onClick(e, { coords, properties })}
      latitude={coords[1]}
      longitude={coords[0]}
      coordinates={coords}
      properties={properties}
      className="marker-styles"
      style={{ zIndex: 0 }}
    >
      {ICONS.cams}
    </Marker>
  );
  const mapFeature = (
    <Layer
      id="3d-buildings"
      sourceId="composite"
      filter={['==', 'extrude', 'true']}
      sourceLayer="building"
      type="fill-extrusion"
    >
      <Feature coordinates={coords} />
    </Layer>
  );
  const mapItem = zoom === [16] ? mapFeature : mapMarker;
  return mapItem;
}

MonitorItem.defaultProps = {
  zoom: [11],
};

MonitorItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  coords: PropTypes.array.isRequired,
  properties: PropTypes.object.isRequired,
  zoom: PropTypes.array,
};

export default MonitorItem;

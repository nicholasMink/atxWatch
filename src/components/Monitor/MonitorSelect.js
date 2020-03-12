import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { MONITOR_AREAS, MONITOR_SELECTOR_STYLES, MAP_DEFAULT } from '../../constants/map';

function MonitorSelect(props) {
  const { onChange, selectedObj } = props;

  return (
    <div className="cams-selector-container">
      <Select
        value={selectedObj}
        classNamePrefix="cams-selector"
        onChange={onChange}
        options={MONITOR_AREAS}
        styles={MONITOR_SELECTOR_STYLES}
        isSearchable={false}
        closeMenuOnSelect
      />
    </div>
  )
};

MonitorSelect.defaultProps = {
  selectedObj: MAP_DEFAULT.defaultSelectedArea,
};

MonitorSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedObj: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default MonitorSelect;

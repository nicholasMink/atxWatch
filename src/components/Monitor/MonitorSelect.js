import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { MONITOR_AREAS, MONITOR_SELECTOR_STYLES } from '../../constants/map';

function MonitorSelect(props) {
  const { onChange } = props;

  return (
    <div className="cams-selector-container">
      <Select
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

MonitorSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MonitorSelect;

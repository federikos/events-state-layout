import React from 'react';
import PropTypes from 'prop-types';

const IconSwitch = ({icon, onSwitch}) => (
  <div className='iconSwitchWrapper'>
    <button className='iconSwitch' onClick={onSwitch}>
      <i className='material-icons'>{icon}</i>
    </button>
  </div>
);

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;
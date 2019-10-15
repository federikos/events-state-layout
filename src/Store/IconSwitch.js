import React from 'react';

const IconSwitch = ({icon, onSwitch}) => (
  <div className='iconSwitchWrapper'>
    <button className='iconSwitch' onClick={onSwitch}>
      <i className='material-icons'>{icon}</i>
    </button>
  </div>
);

export default IconSwitch;
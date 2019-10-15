import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import cards from './data'
// import ListView from './ListView'

export default () => {
  const [ icon, setIcon ] = useState('view_list');

  function onSwitch() {
    if (icon === 'view_module') {
      setIcon('view_list');
      return;
    }
    setIcon('view_module');
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {
        icon === 'view_list' && <CardsView cards={cards} />
      }
      {
        // icon === 'view_module' && <ListView cards={cards} />
      }
    </>
  )
}
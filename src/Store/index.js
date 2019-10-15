import React, { useState, useEffect } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import cards from './data';

export default () => {
  const [ icon, setIcon ] = useState('view_list');
  const [ hideList, setHideList ] = useState(false);

  //т.к. список хорош только для широких экранов, не будем отображать его на мобильных
  useEffect(() => {
    window.addEventListener("resize", () => {
      let currentHideList = (window.innerWidth <= 700);
      if (currentHideList !== hideList) {
          setHideList(currentHideList);
      }
    });
  });

  useEffect(() => {
    if(hideList) setIcon('view_list');
  }, [hideList]);
  //конец необязательного кода

  function onSwitch() {
    if (icon === 'view_module') {
      setIcon('view_list');
      return;
    }
    setIcon('view_module');
  }

  return (
    <>
      {
        !hideList && <IconSwitch icon={icon} onSwitch={onSwitch} />
      }
      {
        icon === 'view_list' && <CardsView cards={cards} />
      }
      {
        icon === 'view_module' && <ListView cards={cards} />
      }
    </>
  )
}
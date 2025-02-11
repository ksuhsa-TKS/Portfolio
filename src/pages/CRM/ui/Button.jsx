import { useState } from 'react';
import { observer } from 'mobx-react';
import Loading from '../img/loading.svg?react'
import Pen from '../img/pen.svg?react'
import Close from '../img/close.svg?react'
import Window from '../storage/Window';

const Button = ({ clientId, value, className }) => {
  const [icon, setIcon] = useState(true);

  const btnActivation = (value) => {
    switch (value) {
      case "Изменить":
        return (
          location.hash = `#${clientId}`,
          setIcon(false),
          Window.updateWindowForm('Изменить', clientId),
          Window.windowForm && setIcon(true)
        );
      case "Удалить":
        return (
          setIcon(false),
          Window.updateWindowDelete(clientId),
          Window.windowDelete && setIcon(true)
        );
    }
  }

  return (
    <button className={`crm-btn ${className}`} onClick={(() => { btnActivation(value) })}>
      {value}
      {icon ? (value === "Изменить" ? <Pen /> : <Close />) : <Loading className='crm-btn-loading' />}
    </ button>
  )
}

export default observer(Button)

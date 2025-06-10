import { useState } from 'react'
import { observer } from 'mobx-react'
import Loading from '../src/img/loading.svg?react'
import Pen from '../src/img/pen.svg?react'
import Close from '../src/img/close.svg?react'
import Window from '../storage/Window'
import styled, { css } from 'styled-components'
import { Btn } from '../src/generic'

const Button = ({ clientId, value }) => {
  const [icon, setIcon] = useState(true)

  const btnActivation = (value) => {
    switch (value) {
      case 'Изменить':
        return (
          (location.hash = `#${clientId}`),
          setIcon(false),
          Window.updateWindowForm('Изменить', clientId),
          Window.windowForm && setIcon(true)
        )
      case 'Удалить':
        return setIcon(false), Window.updateWindowDelete(clientId), Window.windowDelete && setIcon(true)
    }
  }

  return (
    <ButtonTable
      $value={value}
      onClick={() => {
        btnActivation(value)
      }}>
      {value}
      {icon ? value === 'Изменить' ? <Pen /> : <Close /> : <IconLoading />}
    </ButtonTable>
  )
}

export default observer(Button)

const ButtonTable = styled(Btn)`
  transition: all 0.2s ease-in-out;

  ${({ $value }) =>
    $value === 'Удалить' &&
    css`
      fill: var(--red);

      &:focus-visible {
        color: var(--red);
      }
    `}
`
const IconLoading = styled(Loading)`
  width: 16px;
  height: 16px;
  animation: crm-loading 1s linear infinite;
`

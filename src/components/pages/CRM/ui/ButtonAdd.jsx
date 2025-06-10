import styled from 'styled-components'
import Add from '../src/img/humen-plus.svg?react'
import Window from '../storage/Window'
import { Btn } from '../src/generic'

const ButtonAdd = () => {
  return (
    <BtnWrap>
      <BtnAdd
        id="add-client"
        onClick={() => {
          Window.updateWindowForm('Создать')
        }}>
        Добавить клиента <Add />
      </BtnAdd>
    </BtnWrap>
  )
}

export default ButtonAdd

const BtnWrap = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;
  background-color: var(--grey);
`
const BtnAdd = styled(Btn)`
  gap: 13px;
  padding: 11px 26px;
  width: 216px;
  border: 1px solid currentColor;
  color: var(--firm);
  fill: currentColor;
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    border: 1px solid var(--firm-lighter);
    color: var(--white);
    background-color: var(--firm-lighter);
  }
  &:hover {
    border: 1px solid var(--firm);
    color: var(--white);
    background-color: var(--firm);
  }
  &:active {
    border: 1px solid var(--firm-darker);
    color: var(--white);
    background-color: var(--firm-darker);
  }
`

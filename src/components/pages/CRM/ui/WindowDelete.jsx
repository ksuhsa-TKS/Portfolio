import styled from 'styled-components'
import { Btn, Title } from '../src/generic'
import Close from '../src/img/close-big.svg?react'
import Window from '../storage/Window'
import Storage from '../storage/Storage'

const WindowDelete = () => {
  const activateClose = (el = false) => {
    if (!el) {
      return Window.updateWindowDelete()
    }
    if (el.target.tagName === 'ARTICLE') {
      return Window.updateWindowDelete()
    }
  }

  const activateDelete = (id) => {
    Storage.deleteClient(id)
    Window.updateWindowDelete()
  }

  return (
    <WrapWindow
      onClick={(el) => {
        activateClose(el)
      }}>
      <WindowModal id="removal">
        <TitleWindow>Удалить клиента</TitleWindow>
        <DescrWindow>Вы действительно хотите удалить данного клиента?</DescrWindow>

        <BtnEdit
          onClick={() => {
            activateDelete(Window.clientId)
          }}>
          Удалить
        </BtnEdit>

        <BtnCancel
          onClick={() => {
            activateClose()
          }}>
          Отмена
        </BtnCancel>

        <BtnClose
          onClick={() => {
            activateClose()
          }}>
          <Close />
        </BtnClose>
      </WindowModal>
    </WrapWindow>
  )
}

export default WindowDelete

const WrapWindow = styled.article`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--black-opacity);
  animation: crm-open-window-fon 0.25s linear;
`
const WindowModal = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
  padding: 20px 87px 27px;
  max-width: 450px;
  max-height: 215px;
  background-color: var(--white);
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.15);
  animation: crm-open-window 0.25s linear;
`
const TitleWindow = styled.h3`
  ${Title}
  align-self: center;
  margin-bottom: 9px;
  font-size: 18px;
  font-weight: 700;
  line-height: 155%;
`
const DescrWindow = styled.p`
  margin: 0;
  margin-bottom: 27px;
  font-size: 14px;
  font-weight: 400;
  line-height: 135%;
  text-align: center;
`
const BtnEdit = styled(Btn)`
  margin-bottom: 10px;
  padding: 12px 35px;
  outline-offset: -2px;
  outline: 2px solid var(--firm);
  font-weight: 600;
  color: var(--white);
  background-color: var(--firm);
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--firm);
    color: var(--firm);
    background-color: var(--white);
  }
  &:hover {
    outline: 2px solid var(--firm-lighter);
    color: var(--white);
    background-color: var(--firm-lighter);
  }
  &:active {
    outline: 2px solid var(--firm-darker);
    color: var(--white);
    background-color: var(--firm-darker);
  }
`
const BtnCancel = styled(Btn)`
  border-bottom: 1px solid var(--black);
  font-size: 12px;
  line-height: 100%;
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    border-bottom: 1px solid var(--firm-lighter);
  }
  &:hover {
    border-bottom: 1px solid var(--firm);
  }
  &:active {
    border-bottom: 1px solid var(--firm-darker);
  }
`
const BtnClose = styled(Btn)`
  position: absolute;
  top: 17px;
  right: 14px;

  &:focus-visible svg {
    outline: 2px solid var(--black-transparent);
  }
  &:hover svg {
    opacity: 0.8;
  }
  &:active svg {
    opacity: 1;
  }
`

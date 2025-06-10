import styled, { css } from 'styled-components'
import { Btn, Input } from '../src/generic'
import { useState } from 'react'
import { observer } from 'mobx-react'
import Close from '../src/img/close.svg?react'
import Window from '../storage/Window'

const LableContacts = ({ id }) => {
  const getContact = () => {
    return Window.contactsClient.find((el) => el.id === id).contact
  }
  const { type, value } = getContact()

  const [status, setStatus] = useState(false)

  const pickElement = (id, value) => {
    Window.updatePickContact(id, value), setStatus(!status)
  }

  const valueElement = (id, value) => {
    Window.updateValueContact(id, value), Window.checkData(id)
  }

  const deleteElement = (id) => {
    Window.deleteContactClient(id)
  }

  return (
    <Lable>
      <input type="hidden" />
      <WrapValueList
        $isActive={status}
        onClick={() => {
          setStatus(!status)
        }}>
        {type}
      </WrapValueList>

      {status && (
        <DropDown>
          <WrapItemDropDown>
            {type !== 'Телефон' && (
              <ItemDropDown
                onClick={() => {
                  pickElement(id, 'Телефон')
                }}>
                Телефон
              </ItemDropDown>
            )}
            {type !== 'Email' && (
              <ItemDropDown
                onClick={() => {
                  pickElement(id, 'Email')
                }}>
                Email
              </ItemDropDown>
            )}
            {type !== 'Facebook' && (
              <ItemDropDown
                onClick={() => {
                  pickElement(id, 'Facebook')
                }}>
                Facebook
              </ItemDropDown>
            )}
            {type !== 'Vk' && (
              <ItemDropDown
                onClick={() => {
                  pickElement(id, 'Vk')
                }}>
                Vk
              </ItemDropDown>
            )}
            {type !== 'Другое' && (
              <ItemDropDown
                onClick={() => {
                  pickElement(id, 'Другое')
                }}>
                Другое
              </ItemDropDown>
            )}
          </WrapItemDropDown>
        </DropDown>
      )}

      <InputField
        $isError={Window.listError.includes(id)}
        placeholder="Введите данные контакта"
        type={type === 'Телефон' ? 'tel' : type === 'Email' ? 'email' : 'text'}
        name={type}
        defaultValue={value}
        onChange={(el) => {
          valueElement(id, el.target.value)
        }}
      />

      {value !== '' && (
        <BtnIcon
          onClick={() => {
            deleteElement(id)
          }}>
          <Close />
        </BtnIcon>
      )}
    </Lable>
  )
}

export default observer(LableContacts)

const Lable = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 37px;
`
const WrapValueList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 9px;
  border: 1px solid var(--grey-lilac);
  outline: none;
  min-width: 123px;
  height: 100%;
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  background-color: var(--grey-filled);
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 8px;
    width: 10px;
    height: 6px;
    background-image: url('assets/crm/arrow-min.svg');
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        transform: translateY(-50%) rotate(-180deg);
      }
    `}
`
const DropDown = styled.ul`
  position: absolute;
  z-index: 20;
  top: 37px;
  padding: 6px 10px;
  width: 123px;
  border: 1px solid var(--grey-lilac);
  border-top: none;
  background-color: rgb(244, 243, 246);
`
const WrapItemDropDown = styled.li`
  margin: 4px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  cursor: pointer;
`
const ItemDropDown = styled.span`
  display: inline-block;
  width: 100%;
  align-self: center;
`
const InputField = styled(Input)`
  padding: 5px 12px;
  border: 1px solid var(--grey-lilac);
  border-left: none;
  width: 100%;
  height: 100%;
  font-weight: 400;
  background-color: transparent;

  &::placeholder {
    color: var(--txt-grey);
  }

  ${({ $isError }) =>
    $isError &&
    css`
      border-bottom: 1px solid var(--red);
      color: var(--red);
    `}
`
const BtnIcon = styled(Btn)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--grey-lilac);
  border-left: none;
  min-width: 27px;
  height: 100%;
  background-color: var(--grey-filled);
  fill: var(--txt-grey);
`

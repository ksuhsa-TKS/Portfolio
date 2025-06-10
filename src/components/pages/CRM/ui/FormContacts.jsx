import styled, { css } from 'styled-components'
import { Btn } from '../src/generic'
import { observer } from 'mobx-react'
import Plus from '../src/img/plus.svg?react'
import LableContacts from './LableContacts'
import Window from '../storage/Window'

const FormContacts = () => {
  return (
    <WrapField $isActive={Window.contactsClient.length > 0}>
      {Window.contactsClient.length > 0 && (
        <WrapContactsContent>
          {Window.contactsClient.map((el) => (
            <LableContacts key={el.id} id={el.id} />
          ))}
        </WrapContactsContent>
      )}

      {Window.contactsClient.length !== 10 && (
        <BtnAddContacts
          type="button"
          onClick={() => {
            Window.updateContactsClient({
              id: Date.now(),
              contact: { type: 'Телефон', value: '' },
            })
          }}>
          Добавить контакт <Plus />
        </BtnAddContacts>
      )}
    </WrapField>
  )
}

export default observer(FormContacts)

const WrapField = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 0 -30px;
  padding: 8px 30px;
  border: none;
  background-color: var(--grey-lilac-transparent);

  ${({ $isActive }) =>
    $isActive &&
    css`
      padding: 25px 30px;
    `}

  @media (max-width: 577px) {
    margin: 0 -15px;
  }
`
const WrapContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  width: 100%;
`
const BtnAddContacts = styled(Btn)`
  gap: 5px;
  align-items: center;
  align-self: center;
  transition: color 0.2s ease-in-out;

  &:focus-visible {
    color: var(--firm-lighter);
  }
  &:hover {
    color: var(--firm);
  }
  &:active {
    color: var(--firm-darker);
  }
`

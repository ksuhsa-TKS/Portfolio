import { useState } from 'react'
import Phone from '../src/img/phone.svg?react'
import Mail from '../src/img/mail.svg?react'
import Vk from '../src/img/vk.svg?react'
import Facebook from '../src/img/fb.svg?react'
import Other from '../src/img/human.svg?react'
import styled from 'styled-components'

const TableContacts = ({ contacts }) => {
  const [window, setWindow] = useState('')
  const [allContacts, setAllContacts] = useState([])

  const allListContacts = (contacts) => {
    setAllContacts(contacts.slice(4))
    setTimeout(() => {
      setAllContacts([])
    }, 20000)
  }

  const icon = (type) => {
    if (type === 'Телефон') {
      return <Phone />
    }
    if (type === 'Email') {
      return <Mail />
    }
    if (type === 'Facebook') {
      return <Facebook />
    }
    if (type === 'Vk') {
      return <Vk />
    }
    if (type === 'Другое') {
      return <Other />
    }
  }

  const spanElement = (contact) => {
    return (
      <SpanIcon
        key={contact.value}
        onMouseOver={() => {
          setWindow(`${contact.type}: ${contact.value}`)
        }}
        onMouseOut={() => {
          setWindow('')
        }}>
        {window === `${contact.type}: ${contact.value}` && (
          <WindowContacts>{`${contact.type}: ${contact.value}`}</WindowContacts>
        )}
        {icon(contact.type)}
      </SpanIcon>
    )
  }

  switch (contacts.length > 5) {
    case false:
      return contacts.map((contact) => spanElement(contact))

    case true:
      return contacts.map((contact, i) => {
        if (i > 4) {
          return
        }

        if (i === 4) {
          return allContacts.length === 0 ? (
            <NumberContacts
              key={`num ${contact.value}`}
              onClick={() => {
                allListContacts(contacts)
              }}>
              {`+ ${contacts.length - 4}`}
            </NumberContacts>
          ) : (
            allContacts.map((contact) => spanElement(contact))
          )
        }

        return spanElement(contact)
      })
  }
}

export default TableContacts

const SpanIcon = styled.span`
  position: relative;
  margin-right: -1px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
const WindowContacts = styled.span`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 7px 15px 15px 15px;
  width: max-content;
  height: 37px;
  font-size: 12px;
  font-weight: 700;
  line-height: 133%;
  text-align: center;
  color: var(--white);
  background-image: url('assets/crm/text-cloud.svg');
  background-position: center;
  background-repeat: repeat-x;
`
const NumberContacts = styled(SpanIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--firm);
  border-radius: 100%;
  font-size: 8px;
  font-weight: 600;
  line-height: 100%;
`

import { useState } from "react";
import { observer } from "mobx-react";
import Close from '../img/close.svg?react'
import Window from "../storage/Window";

const LableContacts = ({ id }) => {
  const getContact = () => { return Window.contactsClient.find(el => el.id === id).contact }
  const { type, value } = getContact()

  const [status, setStatus] = useState(false);

  const pickElement = (id, value) => { Window.updatePickContact(id, value), setStatus(!status) }

  const valueElement = (id, value) => { Window.updateValueContact(id, value), Window.checkData(id) }

  const deleteElement = (id) => { Window.deleteContactClient(id) }

  return (
    <label className="crm-contacts__lable">
      <input className="crm-contacts__input" type="hidden" />
      <div className={`crm-contacts__type ${status ? 'crm-open' : ''}`} onClick={() => { setStatus(!status) }}>{type}</div>

      {status && <ul className="crm-list-reset crm-contacts__window">
        <li className="crm-menu">
          {type !== 'Телефон' && <span className="crm-span-contact" onClick={() => { pickElement(id, 'Телефон') }}>Телефон</span>}
          {type !== 'Email' && <span className="crm-span-contact" onClick={() => { pickElement(id, 'Email') }}>Email</span>}
          {type !== 'Facebook' && <span className="crm-span-contact" onClick={() => { pickElement(id, 'Facebook') }}>Facebook</span>}
          {type !== 'Vk' && <span className="crm-span-contact" onClick={() => { pickElement(id, 'Vk') }}>Vk</span>}
          {type !== 'Другое' && <span className="crm-span-contact" onClick={() => { pickElement(id, 'Другое') }}>Другое</span>}
        </li>
      </ul>}

      <input className={`crm-input crm-contacts__value ${Window.listError.includes(id) ? 'crm-input__bug' : ''}`}
        placeholder="Введите данные контакта" type={type === 'Телефон' ? 'tel' : type === 'Email' ? 'email' : 'text'}
        name={type} defaultValue={value} onChange={(el) => { valueElement(id, el.target.value) }} />

      {value !== '' && <button className='crm-btn crm-contacts__clean-up' onClick={() => { deleteElement(id) }} ><Close /></button>}
    </label>
  )
}

export default observer(LableContacts)

import { observer } from 'mobx-react';
import Plus from '../img/plus.svg?react'
import LableContacts from "./LableContacts";
import Window from "../storage/Window";

const FormContacts = () => {
  return (
    <fieldset className={`crm-modal__wrap crm-modal__wrap--contacts ${Window.contactsClient.length > 0 ? 'crm-modal__contacts' : ''} `}>
      {Window.contactsClient.length > 0 &&
        <div className="crm-modal__wrap crm-contacts">
          {Window.contactsClient.map((el) => (<LableContacts key={el.id} id={el.id} />))}
        </div>
      }

      {Window.contactsClient.length !== 10 &&
        <button className="crm-btn crm-modal__btn crm-contacts__btn" type="button"
          onClick={() => { Window.updateContactsClient({ id: Date.now(), contact: { type: 'Телефон', value: '' } }) }}>
          Добавить контакт <Plus />
        </button>
      }
    </fieldset>
  )
}

export default observer(FormContacts)

import { useState } from "react";
import Phone from '../img/phone.svg?react';
import Mail from '../img/mail.svg?react';
import Vk from '../img/vk.svg?react';
import Facebook from '../img/fb.svg?react';
import Other from '../img/human.svg?react';

const TableContacts = ({ contacts }) => {
  const [window, setWindow] = useState('');
  const [allContacts, setAllContacts] = useState([]);

  const allListContacts = (contacts) => { setAllContacts(contacts.slice(4)); setTimeout(() => { setAllContacts([]) }, 20000); };

  const icon = (type) => {
    if (type === "Телефон") { return <Phone /> };
    if (type === "Email") { return <Mail /> };
    if (type === "Facebook") { return <Facebook /> };
    if (type === "Vk") { return <Vk /> };
    if (type === "Другое") { return <Other /> };
  };

  const spanElement = (contact) => {
    return <span key={contact.value} className="crm-icon" onMouseOver={() => { setWindow(`${contact.type}: ${contact.value}`) }} onMouseOut={() => { setWindow('') }} >
      {window === `${contact.type}: ${contact.value}` && <span className="crm-text-cloud">{`${contact.type}: ${contact.value}`}</span>}
      {icon(contact.type)}
    </span>
  }

  switch (contacts.length > 5) {
    case false:
      return (contacts.map((contact) => (spanElement(contact))));

    case true:
      return (contacts.map((contact, i) => {
        if (i > 4) { return }

        if (i === 4) {
          return (
            allContacts.length === 0 ?
              <span key={`num ${contact.value}`} className="crm-icon crm-contacts__number" onClick={() => { allListContacts(contacts) }}>
                {`+ ${contacts.length - 4}`}
              </span>
              :
              allContacts.map((contact) => (spanElement(contact)))
          )
        }

        return (spanElement(contact))
      }));

  }
}


export default TableContacts

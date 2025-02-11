import { useState } from "react";
import { observer } from "mobx-react";
import { getDateSeparation } from "../utils/getDateSeparation";
import TableContacts from './TableContacts'
import Button from './Button'

const TableClient = ({ client }) => {
  const [fullId, setFullId] = useState(false)

  const created = getDateSeparation(client.createdAt);
  const updated = getDateSeparation(client.updatedAt);

  let id = client.id.length > 6 ? `${client.id.slice(0, 5)}...` : client.id

  return (<>
    <tr className="crm-table__cell">
      <td className="crm-table__id crm-table__descr crm-table__descr--grey"
        onMouseOver={() => { setFullId(true) }} onMouseOut={() => { setFullId(false) }}>
        {fullId && <span className="crm-text-cloud">{client.id}</span>}
        {id}
      </td>

      <td className="crm-table__name crm-title crm-table__descr">{client.fullName}</td>

      <td className="crm-table__data crm-table__wrap crm-table__wrap--data">
        <span className="crm-table__descr">{created.date}</span>
        <span className="crm-table__descr crm-table__descr--grey">{created.time}</span>
      </td>

      <td className="crm-table__data crm-table__wrap crm-table__wrap--data">
        <span className="crm-table__descr">{updated.date}</span>
        <span className="crm-table__descr crm-table__descr--grey">{updated.time}</span>
      </td>

      <td className="crm-table__link crm-table__wrap">
        <TableContacts contacts={client.contacts} />
      </td>

      <td className="crm-table__btn crm-table__wrap crm-table__wrap--btn">
        <Button value='Изменить' className='crm-table__edit' clientId={client.id} />
        <Button value='Удалить' className='crm-table__delete' clientId={client.id} />
      </td>
    </tr>
  </>)
}

export default observer(TableClient)

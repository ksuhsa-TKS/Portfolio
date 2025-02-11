import { observer } from 'mobx-react'
import Arrow from '../img/arrow.svg?react'
import TableClient from "./TableClient"
import Storage from '../storage/Storage'
import Window from '../storage/Window'

const TableHeader = () => {
  const direction = Storage.directionSort ? 'crm-sort-rotate crm-sort-onclick' : 'crm-sort-onclick'

  const tableClients = () => {
    switch (Window.loadingTable) {
      case true:
        return <tr><td><div className="crm-anima-wrap"><span className="crm-anima-element"></span></div></td></tr>
      case false:
        return Storage.copyClientsList.length === 0 ? <tr><td><span className="crm-anima-wrap">Нет данных</span></td></tr> :
          Storage.copyClientsList.map((client) => (<TableClient client={client} key={client.id} />))
    }
  }

  return (
    <table className="crm-table" id="table">
      <thead>
        <tr className="crm-table__header">
          <th className={`crm-title crm-table__title crm-sort crm-table__id ${Storage.elementSort === 'id' ? "crm-sort-onclick" : ''}`}
            onClick={() => { Storage.updateSort('id'), Storage.sortClients() }}>
            ID
            <Arrow className={`crm-arrow ${Storage.elementSort === 'id' ? direction : ''}`} />
          </th>

          <th className={`crm-title crm-table__title crm-sort crm-table__name ${Storage.elementSort === 'fullName' ? "crm-sort-onclick" : ''}`}
            onClick={() => { Storage.updateSort('fullName'), Storage.sortClients() }}>
            Фамилия Имя Отчество
            <Arrow className={`crm-arrow ${Storage.elementSort === 'fullName' ? direction : ''}`} />
            <span className="crm-descr-order">{Storage.elementSort === 'fullName' ? (Storage.directionSort ? 'А-Я' : 'Я-А') : 'А-Я'}</span>
          </th>

          <th className={`crm-title crm-table__title crm-sort crm-table__data ${Storage.elementSort === 'createdAt' ? "crm-sort-onclick" : ''}`}
            onClick={() => { Storage.updateSort('createdAt'), Storage.sortClients() }}>
            Дата и&nbsp;время создания
            <Arrow className={`crm-arrow ${Storage.elementSort === 'createdAt' ? direction : ''}`} />
          </th>

          <th className={`crm-title crm-table__title crm-sort crm-table__data ${Storage.elementSort === 'updatedAt' ? "crm-sort-onclick" : ''}`}
            onClick={() => { Storage.updateSort('updatedAt'), Storage.sortClients() }}>
            Последние изменения
            <Arrow className={`crm-arrow ${Storage.elementSort === 'updatedAt' ? direction : ''}`} />
          </th>

          <th className="crm-title crm-table__title crm-table__link">Контакты</th>

          <th className="crm-title crm-table__title crm-table__btn">Действия</th>
        </tr>
      </thead>

      <tbody>
        {tableClients()}
      </tbody>
    </table>
  )
}

export default observer(TableHeader)

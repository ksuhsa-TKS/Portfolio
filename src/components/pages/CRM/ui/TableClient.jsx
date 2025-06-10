import { useState } from 'react'
import { observer } from 'mobx-react'
import { getDateSeparation } from '../utils/getDateSeparation'
import TableContacts from './TableContacts'
import Button from './Button'
import styled, { css } from 'styled-components'
import { TitleTable } from '../src/generic'

const TableClient = ({ client }) => {
  const [fullId, setFullId] = useState(false)

  const created = getDateSeparation(client.createdAt)
  const updated = getDateSeparation(client.updatedAt)

  let id = client.id.length > 6 ? `${client.id.slice(0, 5)}...` : client.id

  return (
    <>
      <WrapCell>
        <IdCell
          $isElement="id"
          $color={true}
          onMouseOver={() => {
            setFullId(true)
          }}
          onMouseOut={() => {
            setFullId(false)
          }}>
          {fullId && <IdCellWindow>{client.id}</IdCellWindow>}
          {id}
        </IdCell>

        <DescrCell $isElement="name">{client.fullName}</DescrCell>

        <DescrCell $isElement="data" $wrapElement="data">
          <SpanDescrCell>{created.date}</SpanDescrCell>
          <SpanDescrCell $color={true}>{created.time}</SpanDescrCell>
        </DescrCell>

        <DescrCell $isElement="data" $wrapElement="data">
          <SpanDescrCell>{updated.date}</SpanDescrCell>
          <SpanDescrCell $color={true}>{updated.time}</SpanDescrCell>
        </DescrCell>

        <DescrCell $isElement="link" $wrapElement="link">
          <TableContacts contacts={client.contacts} />
        </DescrCell>

        <DescrCell $isElement="btn" $wrapElement="btn">
          <Button value="Изменить" clientId={client.id} />
          <Button value="Удалить" clientId={client.id} />
        </DescrCell>
      </WrapCell>
    </>
  )
}

export default observer(TableClient)

const WrapCell = styled.tr`
  display: flex;
  padding: 8px 0;
  padding-left: 10px;
  height: 60px;
  border-bottom: 1px solid var(--grey-lilac-opacity);
  background-color: var(--white);
`
const Descr = css`
  align-self: center;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 135%;

  ${({ $color }) =>
    $color &&
    css`
      color: var(--txt-grey);
    `}
`
const IdCell = styled.td`
  ${TitleTable}
  ${Descr}
  font-size: 12px;
`
const IdCellWindow = styled.span`
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
const DescrCell = styled.td`
  ${TitleTable}

  display: flex;
  flex-flow: row wrap;
  align-self: center;
  font-size: 14px;
  line-height: 1.35;
  color: inherit;

  ${({ $wrapElement }) => {
    switch ($wrapElement) {
      case 'data':
        return css`
          gap: 0 9px;
        `
      case 'link':
        return css`
          gap: 5px 8px;
        `
      case 'btn':
        return css`
          row-gap: 5px;
          column-gap: clamp(15px, 4vw, 30px);
        `
    }
  }}
`
const SpanDescrCell = styled.span`
  ${Descr}
`

import { observer } from 'mobx-react'
import styled, { css } from 'styled-components'
import Arrow from '../src/img/arrow.svg?react'
import TableClient from './TableClient'
import Storage from '../storage/Storage'
import Window from '../storage/Window'
import { AnimationElement, AnimationWrap, TitleTable } from '../src/generic'

const TableHeader = () => {
  const tableClients = () => {
    switch (Window.loadingTable) {
      case true:
        return (
          <tr>
            <td>
              <AnimationWrap>
                <AnimationElement></AnimationElement>
              </AnimationWrap>
            </td>
          </tr>
        )
      case false:
        return Storage.copyClientsList.length === 0 ? (
          <tr>
            <td>
              <AnimationWrap>Нет данных</AnimationWrap>
            </td>
          </tr>
        ) : (
          Storage.copyClientsList.map((client) => <TableClient client={client} key={client.id} />)
        )
    }
  }

  return (
    <Table id="table">
      <thead>
        <HeaderTable>
          <TitleHeader
            $isElement="id"
            $isSelect={Storage.elementSort === 'id'}
            onClick={() => {
              Storage.updateSort('id'), Storage.sortClients()
            }}>
            ID
            <ArrowIcon $isSelect={Storage.elementSort === 'id'} />
          </TitleHeader>

          <TitleHeader
            $isElement="name"
            $isSelect={Storage.elementSort === 'fullName'}
            onClick={() => {
              Storage.updateSort('fullName'), Storage.sortClients()
            }}>
            Фамилия Имя Отчество
            <ArrowIcon $isSelect={Storage.elementSort === 'fullName'} />
            <SortName>
              {Storage.elementSort === 'fullName' ? (Storage.directionSort ? 'А-Я' : 'Я-А') : 'А-Я'}
            </SortName>
          </TitleHeader>

          <TitleHeader
            $isElement="data"
            $isSelect={Storage.elementSort === 'createdAt'}
            onClick={() => {
              Storage.updateSort('createdAt'), Storage.sortClients()
            }}>
            Дата и&nbsp;время создания
            <ArrowIcon $isSelect={Storage.elementSort === 'createdAt'} />
          </TitleHeader>

          <TitleHeader
            $isElement="data"
            $isSelect={Storage.elementSort === 'updatedAt'}
            onClick={() => {
              Storage.updateSort('updatedAt'), Storage.sortClients()
            }}>
            Последние изменения
            <ArrowIcon $isSelect={Storage.elementSort === 'updatedAt'} />
          </TitleHeader>

          <TitleHeader $isElement="link">Контакты</TitleHeader>

          <TitleHeader $isElement="btn">Действия</TitleHeader>
        </HeaderTable>
      </thead>

      <tbody>{tableClients()}</tbody>
    </Table>
  )
}

export default observer(TableHeader)

const Table = styled.table`
  width: 100%;

  @media (max-width: 940px) {
    width: 100%;
    min-width: 728px;
  }
`
const HeaderTable = styled.tr`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 5px;
  padding-left: 10px;
`
const TitleHeader = styled.th`
  ${TitleTable}
  cursor: pointer;
  user-select: none;

  ${({ $isSelect }) =>
    $isSelect &&
    css`
      color: var(--firm);
      opacity: 1;
    `}
`
const ArrowIcon = styled(Arrow)`
  display: inline-flex;
  vertical-align: middle;
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  fill: var(--firm);
  opacity: 0.7;
  transition: all 0.2s ease-in-out;

  ${({ $isSelect }) =>
    $isSelect &&
    (Storage.directionSort
      ? css`
          color: var(--firm);
          opacity: 1;
          transform: rotate(-180deg);
        `
      : css`
          color: var(--firm);
          opacity: 1;
        `)}
`
const SortName = styled.span`
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  color: var(--firm);
  opacity: 0.7;
`

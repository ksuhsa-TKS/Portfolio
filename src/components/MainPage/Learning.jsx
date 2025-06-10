import styled from 'styled-components'
import { Descr, ListDecorations } from '../generic'

const Learning = ({ db }) => {
  const { learning } = db

  return (
    <List>
      {learning.map((el, i) => (
        <Item key={i}>
          <WrapTitle>
            <Icon $icon={el.img}></Icon>
            <Title>{el.title}</Title>
          </WrapTitle>

          <WrapDescr>
            <DescrContent>{el.descr}</DescrContent>

            <ListDecorations>
              {el.reasons.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ListDecorations>
          </WrapDescr>

          <WrapDescr>
            <Descr>Почему выбрала его:</Descr>
            <ListDecorations>
              {el.why.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ListDecorations>
          </WrapDescr>

          <WrapDescr>
            <Descr>Как впишу в свой стек:</Descr>
            <Descr>{el.compatibility}</Descr>
          </WrapDescr>
        </Item>
      ))}
    </List>
  )
}
export default Learning

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 20px;

  @media (max-width: 576px) {
    flex-flow: column;
  }
`
const Item = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 12px;
  width: calc((100% - 20px) / 2);

  @media (max-width: 576px) {
    width: 90%;
  }
`
const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Icon = styled.span`
  width: 20px;
  height: 20px;
  background: no-repeat ${(props) => `url(${props.$icon})`} center / contain;
`
const Title = styled.h4`
  padding-bottom: 4px;
  border-bottom: 1px solid currentColor;
  font-size: clamp(14px, 2vw, 18px);
`
const WrapDescr = styled.div`
  display: flex;
  flex-flow: column;
  gap: 6px;
`
const DescrContent = styled.p`
  width: 100%;
  line-height: 1.1;
  white-space: pre-wrap;
`

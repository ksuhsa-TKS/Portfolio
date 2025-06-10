import styled from 'styled-components'

const ListStack = ({ db }) => {
  const { stek, imageBackground } = db

  return (
    <>
      <List>
        {stek.map((el, i) => (
          <Item key={i} $backImg={imageBackground[i]}>
            <WrapTitle>
              <IconTitle $icon={el.img}></IconTitle>
              <Title>{el.title}</Title>
            </WrapTitle>

            <Descr>{el.descr}</Descr>
          </Item>
        ))}

        <Item $backImg={imageBackground[0]}>
          <TitleTechnologies>Ключевые связки технологий</TitleTechnologies>
          <ListItem>
            <li>
              <Descr>
                <SpanDescr>React</SpanDescr> + <SpanDescr>MobX</SpanDescr> + <SpanDescr>Vite</SpanDescr> →
                Быстрая разработка SPA с удобным state-менеджментом.
              </Descr>
            </li>
            <li>
              <Descr>
                <SpanDescr>Figma</SpanDescr> → <SpanDescr>HTML/CSS</SpanDescr> → Реализация дизайна в коде.
              </Descr>
            </li>
            <li>
              <Descr>
                <SpanDescr>Git</SpanDescr> → Фиксация этапов работы над всем стеком.
              </Descr>
            </li>
          </ListItem>
        </Item>
      </List>
    </>
  )
}

export default ListStack

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
`
const Item = styled.li`
  display: flex;
  flex-flow: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: clamp(12px, 3vw, 30px);
  border-radius: 16px;
  width: calc((100% - 20px) / 2);
  background: no-repeat ${(props) => `url(${props.$backImg})`} center / cover;

  &:last-child {
    width: 100%;
  }
`
const WrapTitle = styled.span`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const IconTitle = styled.span`
  width: 20px;
  height: 20px;
  background: no-repeat ${(props) => `url(${props.$icon})`} center / contain;
`
const Title = styled.h4`
  font-size: clamp(14px, 2vw, 18px);
`
const TitleTechnologies = styled(Title)`
  padding-bottom: 4px;
  border-bottom: 1px solid currentColor;
`
const Descr = styled.p`
  width: 100%;
  line-height: 1.1;
  text-align: center;
`
const ListItem = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 12px;
`
const SpanDescr = styled.span`
  font-weight: 400;
`

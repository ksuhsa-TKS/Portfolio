import styled from 'styled-components'
import { Container, Descr, List, Title } from '../src/generic'

export const Info = () => {
  return (
    <ContainerInfo>
      <TitleInfo>Вопросы</TitleInfo>

      <Listinfo>
        <Item>
          <TitleItem>Из&nbsp;чего формируется конечная стоимость проекта?</TitleItem>
          <DescrItem>
            Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны
            к&nbsp;ответу.
          </DescrItem>
        </Item>

        <Item>
          <TitleItem>У&nbsp;меня есть свой проект. Можно&nbsp;ли его реализовать?</TitleItem>
          <DescrItem>
            А&nbsp;ещё некоторые особенности внутренней политики, которые представляют собой яркий пример
            континентального типа.
          </DescrItem>
        </Item>

        <Item>
          <TitleItem>Я&nbsp;выбираю между разными компаниями. Почему&nbsp;вы?</TitleItem>
          <DescrItem>
            Явные признаки победы институционализации набирают популярность среди определённых слоёв
            населения.
          </DescrItem>
        </Item>
      </Listinfo>
    </ContainerInfo>
  )
}

const ContainerInfo = styled(Container)`
  margin-bottom: 100px;

  @media (max-width: 1360px) {
    margin-bottom: 82px;
  }
  @media (max-width: 992px) {
    margin-bottom: 76px;
  }
`
const TitleInfo = styled.h2`
  ${Title}

  @media (max-width: 520px) {
    letter-spacing: -0.22px;
  }
`
const Listinfo = styled(List)`
  display: flex;
  column-gap: var(--gap);

  @media (max-width: 1360px) {
    flex-flow: column wrap;
    row-gap: var(--gap);
  }
`
const Item = styled.li`
  padding: 66px 65px 65px 59px;
  border: 1px var(--color-light-gray) solid;
  border-radius: var(--radius-max);
  width: calc((100% - (var(--gap) * 2)) / 3);

  @media (max-width: 1750px) {
    padding: 40px;
  }
  @media (max-width: 1360px) {
    padding: 64px 59px;
    width: auto;
  }
  @media (max-width: 992px) {
    padding: 35px 46px 35px 39px;
  }
  @media (max-width: 520px) {
    padding: 0;
    border: none;
  }
`
const TitleItem = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.1px;

  @media (max-width: 520px) {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
  }
`
const DescrItem = styled(Descr)`
  line-height: 32px;
`

import styled from 'styled-components'
import { Container, Descr, Link, List, Title } from '../src/generic'

export const KeyInfo = () => {
  return (
    <ContainerKeyInfo>
      <TitleKeyInfo>О&nbsp;нас</TitleKeyInfo>

      <DescrKeyInfo>
        Также как перспективное планирование создаёт необходимость включения в&nbsp;производственный план
        целого ряда внеочередных мероприятий с&nbsp;учётом комплекса экспериментов, поражающих по&nbsp;своей
        масштабности и&nbsp;грандиозности. А&nbsp;также диаграммы связей могут быть описаны максимально
        подробно. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что убеждённость некоторых оппонентов требует
        от&nbsp;нас анализа как&nbsp;самодостаточных, так и&nbsp;внешне зависимых концептуальных решений!
        Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую
        востребованность позиций, занимаемых участниками в&nbsp;отношении поставленных задач.
        Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что высококачественный прототип будущего проекта
        способствует повышению качества экспериментов.
      </DescrKeyInfo>

      <WrapContent>
        <MainCard>
          <WrapMainCard>
            <DescrMainCard>
              Принимая во&nbsp;внимание показатели успешности, перспективное планирование способствует
              подготовке и&nbsp;реализации новых принципов
            </DescrMainCard>
            <LinkMainCard href="#">Подробнее</LinkMainCard>
          </WrapMainCard>
        </MainCard>

        <ListContent>
          <li>
            <WrapItemContent $iconCard={'cube'}>
              <DescrItemContent>
                <SpanDescrItemContent>Консультация с&nbsp;широким активом</SpanDescrItemContent>
                А&nbsp;также свежий взгляд на&nbsp;привычные вещи&nbsp;&mdash; безусловно открывает новые
                горизонты для как самодостаточных, так и&nbsp;внешне зависимых концептуальных решений
              </DescrItemContent>
            </WrapItemContent>
          </li>

          <li>
            <WrapItemContent $iconCard={'gear'}>
              <DescrItemContent>
                <SpanDescrItemContent>В&nbsp;своём стремлении повысить</SpanDescrItemContent>
                Качество жизни, они забывают, что сплочённость команды профессионалов представляет собой
                интересный эксперимент проверки прогресса профессионального сообщества
              </DescrItemContent>
            </WrapItemContent>
          </li>
        </ListContent>
      </WrapContent>
    </ContainerKeyInfo>
  )
}

const ContainerKeyInfo = styled(Container)`
  margin-bottom: 102px;

  @media (max-width: 1360px) {
    margin-bottom: 80px;
  }
  @media (max-width: 992px) {
    margin-bottom: 83px;
  }
`
const TitleKeyInfo = styled.h1`
  ${Title}
  margin-bottom: 22px;

  @media (max-width: 1360px) {
    margin-bottom: 25px;
  }
  @media (max-width: 992px) {
    margin-bottom: 21px;
  }
`
const DescrKeyInfo = styled(Descr)`
  margin-bottom: 49px;
  max-width: 1235px;
  line-height: 32px;
  letter-spacing: -0.06px;

  @media (max-width: 1360px) {
    margin-bottom: 58px;
  }
  @media (max-width: 992px) {
    margin-bottom: 54px;
  }
  @media (max-width: 760px) {
    margin-bottom: 14px;
  }
  @media (max-width: 520px) {
    margin-bottom: 15px;
  }
`
const WrapContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: var(--gap);

  @media (max-width: 1360px) {
    flex-flow: column wrap;
    row-gap: var(--gap);
  }
`
const MainCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  border-radius: var(--radius-max);
  max-height: 100%;
  max-width: 100%;
  background: no-repeat green url('assets/evclid/info-human.webp') center / cover;

  @media (max-width: 1360px) {
    min-height: 640px;
    background-position: center 15%;
  }
  @media (max-width: 992px) {
    min-height: 650px;
    border-radius: var(--radius-phone);
  }
  @media (max-width: 520px) {
    min-height: auto;
    background: none;

    &::before {
      content: '';
      padding-bottom: 69%;
      border-radius: var(--radius-min);
      height: auto;
      width: 100%;
      background: no-repeat url('assets/evclid/info-human-phone.webp') center center / cover;
    }
  }
`
const WrapMainCard = styled.div`
  display: flex;
  column-gap: 160px;
  padding: 50px;
  border-radius: var(--radius-max);
  background-color: var(--color-wrap);

  @media (max-width: 1750px) {
    column-gap: 40px;
  }
  @media (max-width: 1360px) {
    justify-content: space-between;
  }
  @media (max-width: 992px) {
    padding: 34px 40px;
    border-radius: var(--radius-phone);
  }
  @media (max-width: 760px) {
    flex-flow: column wrap;
  }
  @media (max-width: 520px) {
    padding: 0;
    border: none;
    background: none;
  }
`
const DescrMainCard = styled(DescrKeyInfo)`
  margin: 0;
  max-width: 433px;
  font-weight: 700;
  color: var(--color-white);

  @media (max-width: 1360px) {
    margin-bottom: 0;
    max-width: 60%;
  }
  @media (max-width: 992px) {
    margin: 0;
    max-width: 70%;
  }
  @media (max-width: 760px) {
    max-width: 100%;
  }
  @media (max-width: 520px) {
    padding-top: 8px;
    margin-bottom: 13px;
    color: var(--color-black);
  }
`
const LinkMainCard = styled(Link)`
  align-self: center;
  padding: 18px 36px;
  border: 3px var(--color-yellow) solid;
  border-radius: var(--radius-min);
  font-weight: 700;
  color: var(--color-white);
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: none;
    background-color: var(--color-yellow);
  }
  &:hover {
    background-color: var(--color-yellow);
  }
  &:active {
    border-color: var(--color-orange);
    background-color: var(--color-orange);
  }

  @media (max-width: 760px) {
    align-self: flex-start;
  }
  @media (max-width: 520px) {
    padding: 11px 42px;
    border: 2px var(--color-yellow) solid;
    border-radius: var(--radius-phone-min);
    font-size: 12px;
    color: var(--color-yellow);

    &:focus-visible {
      color: var(--color-white);
    }
    &:hover {
      color: var(--color-white);
    }
    &:active {
      color: var(--color-white);
    }
  }
`
const ListContent = styled(List)`
  display: flex;
  flex-flow: column wrap;
  row-gap: var(--gap);
`
const WrapItemContent = styled.div`
  padding: 65px 118px 64px 298px;
  border: 1px var(--color-light-gray) solid;
  border-radius: var(--radius-max);
  max-width: 870px;
  min-height: 295px;
  box-sizing: border-box;
  position: relative;
  background: no-repeat
    ${(props) => (props.$iconCard === 'cube' ? 'url(assets/evclid/cube.svg)' : 'url(assets/evclid/gear.svg)')}
    9% center / 190px 165px;

  @media (max-width: 1750px) {
    padding: 45px 30px 45px 245px;
    background-position: 5% center;
  }
  @media (max-width: 1360px) {
    padding-top: 65px;
    padding-right: 65px;
    padding-left: 315px;
    max-width: 100%;
    background-position: 77px center;
  }
  @media (max-width: 992px) {
    padding: 36px 30px 30px 170px;
    min-height: 235px;
    border-radius: var(--radius-phone);
    background-position: 40px center;
    background-size: 114px 99px;
  }
  @media (max-width: 760px) {
    background-position: 25px center;
  }
  @media (max-width: 520px) {
    padding: 0;
    padding-top: 61px;
    border: none;
    background: no-repeat
      ${(props) =>
        props.$iconCard === 'cube'
          ? 'url(assets/evclid/cube-phone-min.svg)'
          : 'url(assets/evclid/gear-phone-min.svg)'}
      top left / 64px 49px;
  }
`
const DescrItemContent = styled(Descr)`
  display: flex;
  flex-flow: column nowrap;
  justify-items: flex-start;
  max-width: 452px;
  line-height: 32px;
  letter-spacing: -0.06px;

  @media (max-width: 1360px) {
    max-width: 95%;
  }
  @media (max-width: 520px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
  }
`
const SpanDescrItemContent = styled.span`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.4px;

  @media (max-width: 520px) {
    margin-bottom: 2px;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
  }
`

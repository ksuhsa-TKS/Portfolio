import styled, { css } from 'styled-components'
import { Link, List, Title } from '../src/generic'
import Arrow from '../src/img/arrow.svg?react'

export const Offer = () => {
  return (
    <section>
      <Title>Спецпредложения</Title>

      <WrapContent>
        <ListOffer>
          <li>
            <WrapCard $numberImg={1}>
              <TitleItem>Мальдивские острова</TitleItem>
              <PiceItem>от&nbsp;55&nbsp;000&nbsp;₽</PiceItem>
              <LinkItem href="#">
                Подробнее
                <Arrow />
              </LinkItem>
            </WrapCard>
          </li>

          <li>
            <WrapCard $numberImg={2}>
              <TitleItem>Горящий тур на&nbsp;остров Крит</TitleItem>
              <PiceItem>от&nbsp;30&nbsp;000&nbsp;₽</PiceItem>
              <LinkItem href="#">
                Подробнее
                <Arrow />
              </LinkItem>
            </WrapCard>
          </li>
        </ListOffer>

        <CardNumber $numberImg={3}>
          <TitleItem $bigItem={true}>Номера категории люкс</TitleItem>
          <PiceItem $bigItem={true}>от&nbsp;5&nbsp;000&nbsp;₽</PiceItem>
          <LinkItem href="#">
            Подробнее
            <Arrow />
          </LinkItem>
        </CardNumber>
      </WrapContent>
    </section>
  )
}

const backImg = {
  1: 'linear-gradient(90deg,rgba(48, 64, 89, 0.84) -2.9%,rgba(53, 65, 83, 0) 65.7%), url(assets/lagoona/photo-offer-1.webp)',
  2: 'linear-gradient(90deg,rgba(48, 64, 89, 0.84) -2.9%,rgba(53, 65, 83, 0) 65.7%), url(assets/lagoona/photo-offer-2.webp)',
  3: 'url("assets/lagoona/photo-offer-3.webp")',
}

const WrapContent = styled.section`
  display: flex;
  gap: 24px;
`
const ListOffer = styled(List)`
  flex-flow: column;
`
const WrapCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  gap: 15px;
  padding: 40px 100px 40px 45px;
  border-radius: 15px;
  width: 573px;
  min-height: 258px;
  color: var(--white-color);
  overflow: hidden;
  background: no-repeat var(--color-img) center / cover;
  background-image: ${(props) => backImg[props.$numberImg]};

  &:focus-within {
    border-radius: 15px;
    outline: 1px var(--border-color) solid;
    outline-offset: 8px;
  }
`
const TitleItem = styled.h3`
  font-size: 40px;
  line-height: 1;
  font-weight: 700;

  ${({ $bigItem }) =>
    $bigItem &&
    css`
      font-size: 60px;
    `}
`
const PiceItem = styled.p`
  font-size: 20px;
  line-height: 1;
  font-weight: 400;

  ${({ $bigItem }) =>
    $bigItem &&
    css`
      font-size: 30px;
    `}
`
const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 47px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: var(--light-outline);
  stroke: var(--light-outline);
  transition: all 0.3s ease-in-out;

  & svg {
    transition: all 0.3s ease-in-out;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:hover svg {
    transform: translateX(11px);
  }
  &:active {
    color: var(--white-color);
  }
  &:active svg {
    transform: translateX(0);
    stroke: var(--white-color);
  }
`
const CardNumber = styled(WrapCard)`
  height: auto;
  min-width: 573px;
`

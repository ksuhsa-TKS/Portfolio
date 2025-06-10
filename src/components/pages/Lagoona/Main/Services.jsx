import styled from 'styled-components'
import { Descr, Link, List, Title } from '../src/generic'
import Arrow from '../src/img/arrow.svg?react'

export const Services = () => {
  return (
    <section id="service">
      <Title>Услуги</Title>

      <List>
        <Item $imgBack={1}>
          <LinkItem href="#">
            Эксклюзивное обслуживание
            <Arrow />
          </LinkItem>
          <Descr>Равным образом постоянный количественный рост и&nbsp;сфера нашей активности</Descr>
        </Item>

        <Item $imgBack={2}>
          <LinkItem href="#">
            Аренда банкетных залов
            <Arrow />
          </LinkItem>
          <Descr>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм</Descr>
        </Item>

        <Item $imgBack={3}>
          <LinkItem href="#">
            Сауны, бассейны, бани, фитнес-залы
            <Arrow />
          </LinkItem>
          <Descr>
            Не&nbsp;следует, однако забывать, что начало повседневной работы по&nbsp;формированию позиции
          </Descr>
        </Item>

        <Item $imgBack={4}>
          <LinkItem href="#">
            Охраняемые автомобильные стоянки
            <Arrow />
          </LinkItem>
          <Descr>
            Не&nbsp;следует, однако забывать, что начало повседневной работы по&nbsp;формированию позиции
          </Descr>
        </Item>
      </List>
    </section>
  )
}
const ItemImgBack = {
  1: 'url(assets/lagoona/service-1.webp)',
  2: 'url(assets/lagoona/service-2.webp)',
  3: 'url(assets/lagoona/service-3.webp)',
  4: 'url(assets/lagoona/service-4.webp)',
}

const Item = styled.li`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding: 165px 125px 35px 45px;
  border-radius: 15px;
  min-height: 330px;
  width: 573px;
  background: no-repeat var(--white-color) ${({ $imgBack }) => ItemImgBack[$imgBack]} top / contain;
  overflow: hidden;

  &:focus-within {
    border-radius: 15px;
    outline: 1px var(--border-color) solid;
    outline-offset: 8px;
  }
  &:active {
    outline: none;
  }
`
const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 26px;
  outline: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 200%;
  color: var(--text-color);
  stroke: var(--text-color);
  fill: transparent;
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
  &:hover {
    color: var(--light-outline);
  }
  &:hover svg {
    transform: translateX(11px);
    stroke: var(--light-outline);
  }
  &:active {
    color: var(--dark-outline);
  }
  &:active svg {
    transform: translateX(0);
    stroke: var(--dark-outline);
  }
`

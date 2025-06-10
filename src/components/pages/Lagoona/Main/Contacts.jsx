import styled from 'styled-components'
import { Btn, Descr, Link, List, Title } from '../src/generic'

export const Contacts = () => {
  return (
    <section id="contacts">
      <Title>Контакты</Title>

      <WrapContent>
        <ListContent>
          <Item>
            <TitleItem>Адрес</TitleItem>
            <DescrItem>Москва, улица Юности, дом 5&nbsp;строение&nbsp;4, офис&nbsp;2</DescrItem>
          </Item>

          <Item>
            <TitleItem>Телефоны</TitleItem>
            <WrapLink>
              <LinkItem href="tel:+74995356434">+7&nbsp;499 535-64-34</LinkItem>
              <LinkItem href="tel:+74950050544">+7&nbsp;495 005-05-44</LinkItem>
            </WrapLink>
          </Item>

          <Item>
            <TitleItem>Email</TitleItem>
            <WrapLink>
              <LinkItem href="mailto:lg.oona@mail.ru">lg.oona@mail.ru</LinkItem>
              <DwscrLinkItem>по&nbsp;вопросам бронирования</DwscrLinkItem>
              <LinkItem href="mailto:hotels.ln@mail.ru">hotels.ln@mail.ru</LinkItem>
              <DwscrLinkItem>по&nbsp;вопросам сотрудничества</DwscrLinkItem>
            </WrapLink>
          </Item>

          <Item>
            <TitleItem>График</TitleItem>
            <DescrItem>Понедельник-пятница, с&nbsp;10:00 до&nbsp;19:00</DescrItem>
          </Item>

          <Item>
            <BtnItem>Построить маршрут</BtnItem>
          </Item>
        </ListContent>

        <ImgContacts src="assets/lagoona/ReceptionPhoto.webp" alt="Фото ресепшена Lagoona" />
      </WrapContent>
    </section>
  )
}

const WrapContent = styled.div`
  display: flex;
  gap: 45px;
  padding: 45px;
  min-height: 618px;
  min-width: 1170px;
  background-color: var(--white-color);
  border-radius: 15px;
`
const ListContent = styled(List)`
  gap: 50px;
  min-height: 528px;
  width: 375px;
`
const Item = styled.li`
  position: relative;
  display: flex;
  width: 375px;

  &::after {
    content: '';
    position: absolute;
    rigth: 0;
    left: 0;
    bottom: -25px;
    width: 100%;
    border-bottom: 1px solid var(--line-color);
  }
  &:last-child::after {
    border: none;
  }
`
const TitleItem = styled.h3`
  width: 145px;
  font-weight: 700;
  font-size: 20px;
`
const DescrItem = styled(Descr)`
  width: 230px;
  line-height: 1.5;
`
const WrapLink = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 230px;
`
const LinkItem = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-color);
  transition: color 0.3s;

  &:focus-visible {
    outline: 1px var(--border-color) solid;
    outline-offset: 5px;
  }
  &:hover {
    outline: none;
    color: var(--light-outline);
  }
  &:active {
    color: var(--dark-outline);
  }
`
const DwscrLinkItem = styled(Descr)`
  line-height: 1.5;
  color: var(--icon-color);
`
const BtnItem = styled(Btn)`
  padding: 27px 29px;
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
`
const ImgContacts = styled.img`
  border-radius: 10px;
`

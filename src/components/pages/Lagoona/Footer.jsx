import styled, { css } from 'styled-components'
import { Descr, Link } from './src/generic'
import Owl from './src/img/logo-owl.svg?react'
import Ok from './src/img/logo-ok.svg?react'
import Vk from './src/img/logo-vk.svg?react'

const Footer = () => {
  return (
    <Container>
      <Logo src="assets/lagoona/logo-part.svg" alt="Лого компании" />

      <LeftContent>
        <DescrLeftContent>
          &copy;&nbsp;2012&ndash;2020 Управляющая компания Объединённой сети &laquo;Лагуна Хотелс&raquo;
        </DescrLeftContent>
        <DescrLeftContent>
          Представленная на&nbsp;сайте информация носит справочный характер и&nbsp;не&nbsp;является публичной
          офертой
        </DescrLeftContent>
        <LinkLeftContent href="#">Пользовательское соглашение</LinkLeftContent>
      </LeftContent>

      <CenterContent>
        <ItemCenterContent>11710, улица Юности, дом 5&nbsp;строение&nbsp;4, офис&nbsp;2</ItemCenterContent>

        <ItemCenterContent>
          <LinkCenterContent href="tel:+74995356434">+7&nbsp;499 535-64-34</LinkCenterContent>
          <LinkCenterContent href="tel:+74950050544">+7&nbsp;495 005-05-44</LinkCenterContent>
        </ItemCenterContent>

        <ItemCenterContent>
          <LinkCenterContent href="mailto:lg.oona@mail.ru">lg.oona@mail.ru</LinkCenterContent>
          <LinkCenterContent href="mailto:hotels.ln@mail.ru">hotels.ln@mail.ru</LinkCenterContent>
        </ItemCenterContent>
      </CenterContent>

      <RightContent>
        <li>
          <LinkRightContent href="#">
            <Owl />
          </LinkRightContent>
        </li>
        <li>
          <LinkRightContent href="#">
            <Ok />
          </LinkRightContent>
        </li>
        <li>
          <LinkRightContent href="#">
            <Vk />
          </LinkRightContent>
        </li>
      </RightContent>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  position: relative;
  display: flex;
  margin: 40px auto 0;
  padding: 45px;
  width: 1170px;
  min-height: 341px;
  background-color: var(--footer-color);
  border-radius: 15px;
  overflow: hidden;
`
const Logo = styled.img`
  position: absolute;
  top: 112px;
  left: 695px;
  width: 255px;
  height: 255px;
`
const WrapContent = css`
  display: flex;
  flex-flow: column wrap;
`
const LeftContent = styled.div`
  ${WrapContent}
  gap: 25px;
  min-width: 300px;
  margin-right: 125px;
`
const DescrLeftContent = styled(Descr)`
  line-height: 1.9;
  color: var(--white-color);
`
const LinkLeftContent = styled(Link)`
  width: fit-content;
  line-height: 1.5;
  color: var(--text-color);

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
const CenterContent = styled.ul`
  ${WrapContent}
  gap: 15px;
  margin-right: 260px;
  min-width: 370px;
`
const ItemCenterContent = styled.li`
  ${WrapContent}
  gap: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--white-color);
`
const LinkCenterContent = styled(Link)`
  width: fit-content;
  color: var(--text-color);

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
const RightContent = styled.ul`
  ${WrapContent}
  gap: 20px;
  width: 25px;
`
const LinkRightContent = styled(Link)`
  fill: var(--icon-color);

  &:focus-visible {
    outline: none;
    fill: var(--text-color);
  }
  &:hover {
    fill: var(--text-color);
  }
  &:active {
    fill: var(--dark-outline);
  }
`

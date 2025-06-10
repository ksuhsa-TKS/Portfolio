import styled, { css } from 'styled-components'
import { Btn, Link } from './src/generic'
import Enter from './src/img/icon-enter.svg?react'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <LinkLogo href="#">
          <img src="assets/lagoona/logo-Lagoona.svg" alt="логотип Lagoona" />
        </LinkLogo>
        <LinkContacts href="tel:+74953225448">+7&nbsp;495 322-54-48</LinkContacts>
        <LinkEnter href="#">
          <Enter /> Личный кабинет
        </LinkEnter>
      </HeaderWrap>

      <HeaderWrap $isColor={true}>
        <Nav>
          <NavList>
            <li>
              <NavLink href="#info">О&nbsp;нас</NavLink>
            </li>
            <li>
              <NavLink href="#service">Услуги</NavLink>
            </li>
            <li>
              <NavLink href="#benefit">Преимущества</NavLink>
            </li>
            <li>
              <NavLink href="#space">Размещение</NavLink>
            </li>
            <li>
              <NavLink href="#">Блог</NavLink>
            </li>
            <li>
              <NavLink href="#contacts">Контакты</NavLink>
            </li>
          </NavList>
        </Nav>

        <HeaderBtn>Хочу тур</HeaderBtn>
        <HeaderBtn>Обратный звонок</HeaderBtn>
      </HeaderWrap>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1200px;
  margin: 30px auto 70px;
  padding: 0 15px;
`
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 0;

  ${({ $isColor }) =>
    $isColor &&
    css`
      padding: 0 45px;
      min-height: 70px;
      background-color: var(--white-color);
      background-size: contain;
      border-radius: 15px;
    `}
`
const LinkLogo = styled(Link)`
  justify-content: flex-start;
  background-size: 100%;
  outline: none;
`
const LinkContacts = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  color: var(--gray-color);
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: 1px var(--border-color) solid;
    outline-offset: 5px;
    color: var(--text-color);
  }
  &:hover {
    color: var(--text-color);
  }
  &:active {
    outline: none;
    color: var(--dark-outline);
  }
`
const LinkEnter = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin-left: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: var(--text-color);
  text-align: center;
  fill: var(--text-color);
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: 1px var(--border-color) solid;
    outline-offset: 5px;
  }
  &:hover {
    color: var(--light-outline);
    fill: var(--light-outline);
  }
  &:active {
    outline: none;
    color: var(--dark-outline);
    fill: var(--dark-outline);
  }
`
const Nav = styled.nav`
  margin-right: auto;
`
const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 45px;
`
const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: var(--gray-color);
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: 1px var(--border-color) solid;
    outline-offset: 5px;
    color: var(--text-color);
  }
  &:hover {
    color: var(--text-color);
  }
  &:active {
    outline: none;
    color: var(--dark-outline);
  }
`
const HeaderBtn = styled(Btn)`
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
`

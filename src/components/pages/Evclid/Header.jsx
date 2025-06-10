import styled from 'styled-components'
import { Btn, Link, List } from './src/generic'
import Search from './src/img/search.svg?react'

const Header = () => {
  return (
    <Section>
      <ContainerHeader>
        <LinkLogo href="#">
          <picture>
            <source srcSet="assets/evclid/Logo-head-phone.png" media="(max-width: 992px)" />
            <source srcSet="assets/evclid/Logo-head-tablett.png" media="(max-width: 1360px)" />
            <img src="assets/evclid/Logo-head.png" alt="Логотип компании" />
          </picture>
        </LinkLogo>

        <NavWrap>
          <NavList>
            <NavItem>
              <NavLink href="#">О&nbsp;нас</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Этапы</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Вопросы</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Оставить заявку</NavLink>
            </NavItem>
          </NavList>
        </NavWrap>

        <BtnSearch aria-label="Найти">
          <SeacrhIcon />
        </BtnSearch>
      </ContainerHeader>
    </Section>
  )
}

export default Header

const Section = styled.header`
  margin-bottom: 50px;
  padding: 0;
  max-width: 100%;
  border-radius: 0 0 var(--radius-max) var(--radius-max);
  background-color: var(--color-white);
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1360px) {
    margin-bottom: 40px;
  }
  @media (max-width: 992px) {
    margin-bottom: 38px;
    border-radius: 0 0 var(--radius-phone) var(--radius-phone);
  }
  @media (max-width: 760px) {
    margin-bottom: 20px;
    border-radius: 0 0 var(--radius-min) var(--radius-min);
  }
  @media (max-width: 520px) {
    padding: 0 8px;
    max-height: 132px;
  }
`
const ContainerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto 50px;
  padding: 0 75px;
  max-width: 1920px;
  min-height: 100px;

  @media (max-width: 1360px) {
    justify-content: space-between;
    column-gap: 40px;
    padding: 0 50px;
  }
  @media (max-width: 992px) {
    margin-bottom: 0;
    min-height: 70px;
  }
  @media (max-width: 760px) {
    align-content: flex-end;
    row-gap: 20px;
    column-gap: 70px;
    padding: 0 15px;
    min-height: 132px;
  }
  @media (max-width: 520px) {
    align-content: flex-start;
    row-gap: 11px;
    padding: 13px 0 0;
  }
`
const LinkLogo = styled(Link)`
  margin: 5px auto 0 0;
  outline: none;

  @media (max-width: 1360px) {
    margin: 0;
    margin-top: 5px;
  }
  @media (max-width: 992px) {
    margin-top: 4px;
  }
  @media (max-width: 520px) {
    margin-left: 7px;
  }
`
const NavWrap = styled.nav`
  display: flex;
  column-gap: 85px;

  @media (max-width: 760px) {
    order: 1;
    margin: auto;
    margin-bottom: 40px;
  }
  @media (max-width: 520px) {
    max-width: 410px;
    width: 100%;
  }
`
const NavList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 84px;

  @media (max-width: 1360px) {
    column-gap: 60px;
  }
  @media (max-width: 992px) {
    column-gap: 42px;
  }
  @media (max-width: 520px) {
    flex-wrap: nowrap;
    column-gap: 25px;
    padding: 7px;
    overflow-y: hidden;
    white-space: nowrap;
  }
`
const NavItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`
const NavLink = styled(Link)`
  position: relative;
  color: var(--color-black);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.06px;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--color-yellow);
    outline-offset: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 100%;
    height: 2px;
    background-color: var(--color-yellow);
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }
  &:hover::before {
    outline: none;
    transform: scaleX(1);
  }
  &:active {
    color: var(--color-orange);
    outline: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 100%;
    height: 2px;
    background-color: var(--color-orange);
    opacity: 0;
  }
  &:active::after {
    opacity: 1;
  }

  @media (max-width: 992px) {
    font-size: 16px;
    color: #333;
  }
`
const BtnSearch = styled(Btn)`
  margin-left: 85px;
  border: none;
  background: none;

  &:focus-visible {
    border-radius: 0;
    outline: 2px solid var(--color-yellow);
    outline-offset: 5px;
    background: none;
  }
  &:hover {
    background: none;
  }
  &:active {
    background: none;
  }

  @media (max-width: 1360px) {
    margin: 0;
  }
  @media (max-width: 520px) {
    margin-right: 7px;
  }
`
const SeacrhIcon = styled(Search)`
  display: block;
  stroke: var(--color-black);
  fill: var(--color-black);
  transition: all 0.6s ease-in-out;

  &:hover {
    stroke: var(--color-yellow);
    fill: var(--color-yellow);
  }
  &:active {
    stroke: var(--color-black);
    fill: var(--color-black);
  }
`
// @media (max-width: px) {

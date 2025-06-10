import styled from 'styled-components'
import { Btn, Container, Link, List, Nav } from './src/generic'
import Search from './src/img/search.svg?react'

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLink href="#">
            <picture>
              <source srcSet="assets/w-wave/logo-mobile-min.png" media="(max-width: 425px)" />
              <source srcSet="assets/w-wave/logo-tablet.png" media="(max-width: 1200px)" />
              <img src="assets/w-wave/logo.png" alt="Логотип компании W-Wave Radio" />
            </picture>
          </HeaderLink>

          <Nav>
            <HeaderList>
              <li>
                <HeaderListLink href="#podcast">Подкасты</HeaderListLink>
              </li>
              <li>
                <HeaderListLink href="#broadcast">Передачи</HeaderListLink>
              </li>
              <li>
                <HeaderListLink href="#guest">Гости</HeaderListLink>
              </li>
              <li>
                <HeaderListLink href="#playlist">Плейлисты</HeaderListLink>
              </li>
              <li>
                <HeaderListLink href="#about-us">О нас</HeaderListLink>
              </li>
            </HeaderList>
          </Nav>

          <HeaderBtn aria-label="Поиск по сайту">
            <IconSearchBtn className="icon" />
          </HeaderBtn>
        </HeaderWrap>
      </HeaderContainer>
    </HeaderBlock>
  )
}

export default Header

const HeaderBlock = styled.header`
  @media (max-width: 1200px) {
    position: relative;
  }
`

const HeaderContainer = styled(Container)`
  padding: 34px 30px;

  @media (max-width: 1200px) {
    padding: 29px 100px 91px;
  }
  @media (max-width: 1023px) {
    padding: 24px 114px 85px;
  }
  @media (max-width: 766px) {
    padding: 15px 32px 66px;
  }
`

const HeaderWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    row-gap: 27px;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 766px) {
    row-gap: 15px;
  }
`

const HeaderLink = styled(Link)`
  margin-right: 80px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
  @media (max-width: 425px) {
    padding-top: 5px;
  }
`

const HeaderList = styled(List)`
  column-gap: 58px;

  @media (max-width: 1200px) {
    column-gap: 104px;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    min-height: 62px;
  }
  @media (max-width: 1023px) {
    column-gap: 54px;
    width: 100%;
    min-height: 57px;
  }
  @media (max-width: 766px) {
    flex-wrap: nowrap;
    column-gap: 24px;
    min-height: 48px;
    white-space: nowrap;
    overflow-x: auto;
  }
`

const HeaderListLink = styled(Link)`
  font-size: 20px;
  transition: color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: -10px;
    left: -10px;
    bottom: -4px;
    z-index: -1;
    background-color: var(--color-melrose);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  &:focus-visible {
    color: var(--color-white);
  }
  &:focus-visible::before {
    opacity: 1;
  }
  &:hover {
    color: var(--color-electric-violet);
  }
  &:active {
    color: var(--color-daisy-bush);
  }

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`

const HeaderBtn = styled(Btn)`
  &:focus-visible .icon {
    stroke: var(--color-melrose);
  }
`
const IconSearchBtn = styled(Search)`
  outline: none;
  stroke: var(--color-electric-violet);
  transition: stroke 0.2s ease-in-out;

  &:hover {
    stroke: var(--color-melrose);
  }
  &:active {
    stroke: var(--color-daisy-bush);
  }
`

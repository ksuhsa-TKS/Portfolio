import styled from 'styled-components'
import { Container, Link, List, Nav, Span } from './src/generic'
import Youtube from './src/img/youtube.svg?react'
import Classmates from './src/img/od.svg?react'
import Vk from './src/img/vk.svg?react'

const Footer = () => {
  return (
    <SectionFooter>
      <SpanFooter></SpanFooter>

      <ContainerFooter>
        <TopInfoFooter>
          <WrapConnectFooter>
            <LinkLogoFooter href="#">
              <img src="assets/w-wave/logo-foot.png" alt="Логотип компании W-Wave Radio" />
            </LinkLogoFooter>

            <ListConnectFooter>
              <li>
                <LinkConnectFooter href="#" aria-label="YouTube">
                  <Youtube />
                </LinkConnectFooter>
              </li>
              <li>
                <LinkConnectFooter href="#" aria-label="Одноклассники">
                  <Classmates />
                </LinkConnectFooter>
              </li>
              <li>
                <LinkConnectFooter href="#" aria-label="ВКонтакте">
                  <Vk />
                </LinkConnectFooter>
              </li>
            </ListConnectFooter>
          </WrapConnectFooter>

          <NavFooter>
            <ListMainLink>
              <li>
                <LinkMainFooter href="#">Подкасты</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Передачи</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Гости</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Плейлисты</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Сетка</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">О нас</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Новости</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Блоги</LinkMainFooter>
              </li>
              <li>
                <LinkMainFooter href="#">Топы</LinkMainFooter>
              </li>
            </ListMainLink>
          </NavFooter>
        </TopInfoFooter>

        <WrapTrademarkFooter>
          <TrademarkFooter>W-WAVE ® 2023</TrademarkFooter>
        </WrapTrademarkFooter>
      </ContainerFooter>
    </SectionFooter>
  )
}
export default Footer

const SectionFooter = styled.footer`
  position: relative;
  background-color: var(--color-charade);
`
const SpanFooter = styled(Span)`
  position: absolute;
  left: 0px;
  bottom: 36px;
  width: 100%;
  height: 12px;
  background-image: url('assets/w-wave/wave-big.svg');

  @media (max-width: 1200px) {
    background-position: 12% bottom;
  }
  @media (max-width: 425px) {
    bottom: 32px;
    background-position: 0% bottom;
  }
`
const ContainerFooter = styled(Container)`
  padding-bottom: 6px;

  @media (max-width: 766px) {
    padding: 0;
  }
`
const TopInfoFooter = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--indent);
  padding-bottom: 104px;

  @media (max-width: 1023px) {
    justify-content: center;
    row-gap: 74px;
    padding-bottom: 90px;
  }
  @media (max-width: 766px) {
    row-gap: 0;
    padding-bottom: 35px;
  }
  @media (max-width: 425px) {
    padding-bottom: 28px;
  }
`
const WrapConnectFooter = styled.div`
  @media (max-width: 766px) {
    padding: 54px 32px;
  }
  @media (max-width: 425px) {
    padding-bottom: 47px;
  }
`
const LinkLogoFooter = styled(Link)`
  margin-bottom: 20px;
`
const ListConnectFooter = styled(List)`
  align-items: center;
  column-gap: 21px;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`
const LinkConnectFooter = styled(Link)`
  fill: var(--color-mischka);

  & svg {
    transition: all 0.2s ease-in-out;
  }
  &:focus-visible svg {
    fill: var(--color-melrose);
  }
  &:hover svg {
    fill: var(--color-electric-violet);
  }
  &:active svg {
    fill: var(--color-daisy-bush);
  }

  @media (max-width: 1023px) {
    & svg {
      width: 36px;
      height: 36px;
    }
  }
`
const NavFooter = styled(Nav)`
  margin: 0;

  @media (max-width: 1200px) {
    position: relative;
    padding: 0;
    border: none;
    width: auto;
  }
  @media (max-width: 1023px) {
    padding: 0;
    width: 100%;
  }
  @media (max-width: 766px) {
    padding: 30px 32px;
    background-color: var(--color-mirage);
  }
  @media (max-width: 425px) {
    padding-top: 27px;
    padding-bottom: 25px;
  }
`
const ListMainLink = styled(List)`
  flex-flow: column wrap;
  align-content: space-between;
  gap: 20px 109px;
  min-width: 445px;
  max-height: 94px;
  line-height: 100%;

  @media (max-width: 1200px) {
    align-items: flex-start;
    margin: 0;
  }
  @media (max-width: 1023px) {
    align-content: space-between;
    gap: var(--indent);
    min-width: 100%;
    max-height: 148px;
  }
  @media (max-width: 766px) {
    flex-wrap: wrap;
    align-content: space-evenly;
    column-gap: 78px;
    max-height: 200px;
    white-space: normal;
    overflow: hidden;
  }
  @media (max-width: 425px) {
    align-content: flex-start;
    gap: 19px 78px;
  }
`
const LinkMainFooter = styled(Link)`
  z-index: 0;
  font-size: 16px;
  color: var(--color-white);
  -webkit-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
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
  &:active::before {
    opacity: 0;
  }

  @media (max-width: 766px) {
    font-size: 12px;
  }
`
const WrapTrademarkFooter = styled.div`
  padding-top: 7px;

  @media (max-width: px) {
    padding-top: 0px;
  }
`
const TrademarkFooter = styled(Span)`
  text-align: center;

  @media (max-width: 766px) {
    padding-bottom: 6px;
    font-size: 12px;
  }
`

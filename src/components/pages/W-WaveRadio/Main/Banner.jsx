import styled from 'styled-components'
import { Container, Descr, Link, LinkBtn } from '../src/generic'

export const Banner = () => {
  return (
    <section>
      <ContainerBanner>
        <WrapBanner>
          <TitleBanner>
            Радио <TitleAccentBanner>W-Wave</TitleAccentBanner>
          </TitleBanner>
          <DescrBanner>
            Привет, на&nbsp;связи W-Wave! Раньше мы&nbsp;были{' '}
            <LinkBanner href="#" target="_blank">
              изданием,
            </LinkBanner>{' '}
            а&nbsp;теперь пробуем себя в&nbsp;разоворном жанре. Говорим о&nbsp;музыке, политике, истории,
            науке и&nbsp;культуре. Здесь, помимо прямого эфира&nbsp;&mdash; архив передач и&nbsp;многое
            другое:)
          </DescrBanner>
          <LinkBtnBanner href="#">Слушать эфир</LinkBtnBanner>
        </WrapBanner>
      </ContainerBanner>
    </section>
  )
}

const ContainerBanner = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 766px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
const WrapBanner = styled.div`
  padding: 93px 475px 93px 0;
  background-image: url('assets/w-wave/microphone.png');
  background-repeat: no-repeat;
  background-position: right 38%;

  @media (max-width: 1200px) {
    padding: 93px 275px 89px 0;
    background-image: url('assets/w-wave/microphone-tablet.png');
    background-position: right 48%;
  }
  @media (max-width: 1023px) {
    padding: 93px 32px 91px 0;
    background: none;
  }
  @media (max-width: 766px) {
    padding: 0;
  }
`
const TitleBanner = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
  font-size: 60px;
  font-weight: 700;
  line-height: 100%;
  color: var(--color--mirage);

  @media (max-width: 766px) {
    margin-bottom: 8px;
    font-size: 32px;
  }
`
const TitleAccentBanner = styled.span`
  display: inline;
  font-weight: 400;
  font-style: italic;
  line-height: 100%;
  color: var(--color-mirage);
`
const DescrBanner = styled(Descr)`
  margin-bottom: 45px;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: 1200px) {
    margin-bottom: 21px;
  }
  @media (max-width: 766px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    margin-bottom: 19px;
  }
`
const LinkBanner = styled(Link)`
  position: relative;
  transition: color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 3px;
    right: -3px;
    left: -3px;
    bottom: 3px;
    background-color: var(--color-melrose);
    opacity: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
  &:focus-visible {
    color: var(--color-white);
  }
  &:focus-visible::before {
    opacity: 1;
  }
  &:hover::after {
    transform: scaleX(1);
    background-color: var(--color-electric-violet);
  }
  &:hover {
    color: var(--color-electric-violet);
  }
  &:active::after {
    transform: scaleX(1);
    background-color: var(--color-daisy-bush);
  }
  &:active {
    color: var(--color-daisy-bush);
  }

  @media (max-width: 766px) {
    font-size: 14px;
  }
`
const LinkBtnBanner = styled(LinkBtn)`
  padding: 24px 54px;
  border: none;
  border-radius: var(--border);
  background-color: var(--color-electric-violet);
  color: var(--color-white);
  transition: background-color 0.2s ease-in-out, outline 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--color-daisy-bush);
    outline-offset: -2px;
    background-color: var(--color-melrose);
  }
  &:hover {
    outline: none;
    background-color: var(--color-melrose);
  }
  &:active {
    background-color: var(--color-daisy-bush);
  }

  @media (max-width: 425px) {
    padding: 16px 46px;
  }
`

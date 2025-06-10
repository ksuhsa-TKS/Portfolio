import styled from 'styled-components'
import { Container, Descr, LinkBtn, Span, Title } from '../src/generic'
import Marcet from '../src/img/marcet.svg?react'

export const Sale = () => {
  return (
    <SectionSale>
      <ContainerSale>
        <WrapImgSale>
          <ImgSale alt="Фото Радиоприёмника-колонки W-Wave 1.0 xm" src="assets/w-wave/radio.png" />
          <StickerImgSale></StickerImgSale>
        </WrapImgSale>

        <WrapInfoSale>
          <TitleSale>Будь с&nbsp;нами на&nbsp;одной волне!</TitleSale>

          <DescrSale>
            Друзья, рады представить вам продукт нашего производства! Да-да, несмотря на&nbsp;то, что
            мы&nbsp;только начали свой путь радиовещателей, нам хочется, чтобы вы&nbsp;могли как следует нас
            расслышать:)
          </DescrSale>
          <DescrSale>
            Итак, встречайте! Портативный радиоприёмник-колонка W-Wave 1.0&nbsp;xm. Тщательный подбор всех
            деталей, ручная сборка, качественный звук. Пока доступно только 60&nbsp;штук в&nbsp;3&nbsp;цветах,
            но&nbsp;мы&nbsp;активно трудимся над новыми партиями и&nbsp;дизайном. Спешите приобрести!
          </DescrSale>
          <PiceSale>2&nbsp;800&nbsp;₽</PiceSale>

          <LinkBtnSale href="#" target="_blank">
            <MarcetSale /> Купить на&nbsp;Яндекс.Маркет
          </LinkBtnSale>
        </WrapInfoSale>
      </ContainerSale>
    </SectionSale>
  )
}

const SectionSale = styled.section`
  background-color: var(--color-charade);
`
const ContainerSale = styled(Container)`
  display: flex;
  gap: 25px;
  padding-bottom: 134px;

  @media (max-width: 1200px) {
    gap: var(--indent);
    padding-bottom: 94px;
  }
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    row-gap: 45px;
    padding-top: 54px;
  }
  @media (max-width: 766px) {
    row-gap: var(--indent);
    padding: 54px 32px;
  }
`
const WrapImgSale = styled.div`
  position: relative;
  align-self: center;

  @media (max-width: 1200px) {
    padding-bottom: 31px;
  }
  @media (max-width: 1023px) {
    padding: 0;
  }
`
const ImgSale = styled.img`
  padding-top: 6px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0;
  }
`
const StickerImgSale = styled.span`
  position: absolute;
  top: -2px;
  left: -5px;
  width: 160px;
  height: 160px;
  background: url('assets/w-wave/new.svg') no-repeat;

  @media (max-width: 1200px) {
    top: -7px;
    left: 0;
    width: 100px;
    height: 100px;
    background: url('assets/w-wave/new-tablet.svg') no-repeat;
  }
  @media (max-width: 1023px) {
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    background: url('assets/w-wave/new.svg') no-repeat;
  }
  @media (max-width: 425px) {
    top: 0;
    left: 0;
    width: 62px;
    height: 62px;
    background: url('assets/w-wave/new-mobile-min.svg') no-repeat;
  }
`
const WrapInfoSale = styled.div`
  max-width: 445px;

  @media (max-width: 1200px) {
    max-width: 397px;
  }
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`
const TitleSale = styled(Title)`
  margin-bottom: 19px;
  padding-bottom: 29px;
  color: var(--color-buff);
  background: no-repeat url('assets/w-wave/wave.svg') center bottom;

  @media (max-width: 1200px) {
    background: no-repeat url('assets/w-wave/wave.svg') 0% bottom;
  }
  @media (max-width: 1023px) {
    padding-right: 140px;
  }
  @media (max-width: 425px) {
    margin-bottom: 16px;
    padding-right: 0;
    padding-bottom: 24px;
    background: no-repeat url('assets/w-wave/wave.svg') 3% bottom;
  }
  }
`
const DescrSale = styled(Descr)`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 180%;
  color: var(--color-white);

  &:not(:nth-last-child(2n)) {
    margin-bottom: 26px;
  }

  @media (max-width: 766px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    margin-bottom: 10px;
    line-height: 160%;

    &:not(:nth-last-child(2n)) {
      margin-bottom: 5px;
    }
  }
`
const PiceSale = styled(Span)`
  display: block;
  margin-bottom: 21px;
  font-size: 30px;
  font-weight: 500;
  color: var(--color-white);

  @media (max-width: 766px) {
    margin-bottom: 13px;
    font-size: 24px;
  }
`
const LinkBtnSale = styled(LinkBtn)`
  display: inline-flex;
  padding: 22px 11px;
  color: var(--color-buff);
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    border: 2px solid var(--color-buff);
    color: var(--color-mirage);
    background-color: var(--color-tussock);
  }
  &:focus-visible svg {
    fill: var(--color-buff);
  }
  &:focus-visible path + path {
    fill: var(--color-mirage);
  }
  &:hover {
    border: 2px solid var(--color-buff);
    color: var(--color-mirage);
    background-color: var(--color-buff);
  }
  &:hover svg {
    fill: var(--color-mirage);
  }
  &:hover path + path {
    fill: var(--color-buff);
  }
  &:active {
    border: 2px solid var(--color-tussock);
    color: var(--color-mirage);
    background-color: var(--color-tussock);
  }
  &:active svg {
    fill: var(--color-mirage);
  }
  &:active path + path {
    fill: var(--color-tussock);
  }

  @media (max-width: 425px) {
    padding: 13px 13px;
  }
`
const MarcetSale = styled(Marcet)`
  align-self: center;
  margin-right: 7px;
  fill: var(--color-buff);
  transition: all 0.2s ease-in-out;

  & path + path {
    fill: var(--color-mirage);
  }
`
//  @media (max-width: px) {

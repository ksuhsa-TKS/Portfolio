import styled, { css } from 'styled-components'
import { Btn, Descr, Link, List, Title } from '../src/generic'
import Stars from '../src/img/star.svg?react'
import Arrow from '../src/img/arrow.svg?react'

export const Space = () => {
  return (
    <section id="space">
      <Title>Размещение</Title>

      <List>
        <Item>
          <img src="assets/lagoona/photo-1.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">4&nbsp;698&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona espa&ntilde;ola</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-2.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">5&nbsp;148&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona son t&iacute;picas</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-3.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;254&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-4.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;320&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-5.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;457&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-6.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;320&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-7.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;505&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <img src="assets/lagoona/photo-8.webp" alt="Фото отеля" />

          <WrapItemContent>
            <WrapHeaderContent>
              <DescrPrice>
                <DescrDifference>от&nbsp;</DescrDifference>
                <DescrDifference $styleText="price">6&nbsp;824&nbsp;₽</DescrDifference>
                &nbsp;/ ночь
              </DescrPrice>

              <WrapStars>
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon $isSelectStar={true} />
                <StarsIcon />
              </WrapStars>
            </WrapHeaderContent>

            <PlaceDescr>Lagoona de&nbsp;la&nbsp;guerra</PlaceDescr>
            <PlaceDescr $language="ru">Барселона, Испания</PlaceDescr>
            <BtnItem>Номера</BtnItem>
          </WrapItemContent>
        </Item>

        <Item>
          <LinkItem href="#">
            Посмотреть все варианты
            <Arrow />
          </LinkItem>
        </Item>
      </List>
    </section>
  )
}

const Item = styled.li`
  display: flex;
  flex-flow: column;
  gap: 32px;
  border-radius: 15px;
  min-height: 440px;
  width: 374px;
  background-color: var(--white-color);
  overflow: hidden;

  &:focus-within {
    border-radius: 15px;
    outline: 1px var(--border-color) solid;
    outline-offset: 8px;
  }
  &:active {
    outline: none;
  }

  &:last-child {
    justify-content: end;
    padding: 45px;
    background: no-repeat var(--light-outline) url('assets/lagoona/photo-9.webp') center / cover;
  }
`
const WrapItemContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  padding: 0 45px 45px 45px;
`
const WrapHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-heigth: 1;
`
const DescrPrice = styled(Descr)`
  display: flex;
  align-items: baseline;
  line-height: 1;
`
const DescrDifference = styled.span`
  ${({ $styleText }) =>
    $styleText === 'price'
      ? css`
          font-weight: 700;
          font-size: 20px;
        `
      : css`
          color: var(--icon-color);
        `}
`
const WrapStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  width: min-content;
`
const StarsIcon = styled(Stars)`
  fill: ${({ $isSelectStar }) => ($isSelectStar ? '#f0bf5f' : '#e9e9e9')};
`
const PlaceDescr = styled(Descr)`
  ${({ $language }) =>
    $language === 'ru' &&
    css`
      color: var(--icon-color);
    `}
`
const BtnItem = styled(Btn)`
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
`
const LinkItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  outline: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 2;
  color: var(--white-color);
  stroke: var(--white-color);
  transition: all 0.3s ease-in-out;

  & svg {
    transition: transform 0.3s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:focus-visible {
    color: var(--text-color);
  }

  &:focus-visible svg {
    transform: translateX(0);
    stroke: var(--text-color);
  }

  &:hover svg {
    transform: translateX(11px);
  }

  &:active {
    color: var(--dark-outline);
  }

  &:active svg {
    transform: translateX(0);
    stroke: var(--dark-outline);
  }
`

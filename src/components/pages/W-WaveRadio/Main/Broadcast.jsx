import styled from 'styled-components'
import { Container, Link, LinkBtn, List, Span, Title } from '../src/generic'
import Arrow from '../src/img/arrow.svg?react'

export const Broadcast = () => {
  return (
    <section id="broadcast">
      <ContainerBroadcast>
        <TitleBroadcast>Передачи</TitleBroadcast>

        <ListBroadcast>
          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={1}>
              <ItemTitleBroadcast>О&nbsp;людях и&nbsp;книгах</ItemTitleBroadcast>
              <SpanBroadcast>Анонсируется отдельно</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>

          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={2}>
              <ItemTitleBroadcast>Графомания&nbsp;td</ItemTitleBroadcast>
              <SpanBroadcast>По&nbsp;понедельникам в&nbsp;10:00</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>

          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={3}>
              <ItemTitleBroadcast>Не&nbsp;Рим, не&nbsp;Троя</ItemTitleBroadcast>
              <SpanBroadcast>По&nbsp;вторникам в&nbsp;12:00</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>

          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={4}>
              <ItemTitleBroadcast>Эрудит</ItemTitleBroadcast>
              <SpanBroadcast>По&nbsp;пятницам в&nbsp;17:00</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>

          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={5}>
              <ItemTitleBroadcast>Тонкости эпох</ItemTitleBroadcast>
              <SpanBroadcast>По&nbsp;субботам в&nbsp;10:00</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>

          <ItemBroadcast>
            <ItemWrapBroadcast $broadcastImg={6}>
              <ItemTitleBroadcast>Живые мысли</ItemTitleBroadcast>
              <SpanBroadcast>По&nbsp;воскресеньям в&nbsp;15:30</SpanBroadcast>

              <LinkBroadcast href="#">
                Подробнее
                <Arrow />
              </LinkBroadcast>
            </ItemWrapBroadcast>
          </ItemBroadcast>
        </ListBroadcast>

        <ArchiveWrapBroadcast>
          <LinkBtnBroadcast href="#" target="_blank">
            Архив
          </LinkBtnBroadcast>
          <Span>В&nbsp;архив попадают все передачи, которые вы&nbsp;пропустили! Enjoy:)</Span>
        </ArchiveWrapBroadcast>
      </ContainerBroadcast>
    </section>
  )
}

const imgCards = {
  desctop: {
    1: 'url(assets/w-wave/broadcast-1.webp)',
    2: 'url(assets/w-wave/broadcast-2.webp)',
    3: 'url(assets/w-wave/broadcast-3.webp)',
    4: 'url(assets/w-wave/broadcast-4.webp)',
    5: 'url(assets/w-wave/broadcast-5.webp)',
    6: 'url(assets/w-wave/broadcast-6.webp)',
  },
  mobile: {
    1: 'url(assets/w-wave/broadcast-1-mobile-min.webp)',
    2: 'url(assets/w-wave/broadcast-2-mobile-min.webp)',
    3: 'url(assets/w-wave/broadcast-3-mobile-min.webp)',
    4: 'url(assets/w-wave/broadcast-4-mobile-min.webp)',
    5: 'url(assets/w-wave/broadcast-5-mobile-min.webp)',
    6: 'url(assets/w-wave/broadcast-6-mobile-min.webp)',
  },
}

const ContainerBroadcast = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  gap: var(--indent);
  padding-bottom: 93px;
  min-height: 500px;
  max-height: 1100px;

  @media (max-width: 1200px) {
    padding-bottom: 92px;
  }
  @media (max-width: 1023px) {
    position: relative;
    flex-wrap: nowrap;
    row-gap: 122px;
    padding-bottom: 215px;
    max-height: fit-content;
  }
  @media (max-width: 766px) {
    row-gap: 28px;
    padding-bottom: 214px;
  }
  @media (max-width: 425px) {
    padding-bottom: 220px;
  }
`
const TitleBroadcast = styled(Title)`
  margin-bottom: 273px;
  width: 228px;

  @media (max-width: 1200px) {
    margin-bottom: 563px;
  }
  @media (max-width: 1023px) {
    margin-bottom: 0;
  }
  @media (max-width: 766px) {
    margin-bottom: 0;
  }
`
const ListBroadcast = styled(List)`
  justify-content: center;
  gap: var(--indent);
  order: 3;
  padding-top: 13px;
  width: calc(100% - 285px);

  @media (max-width: 1023px) {
    justify-content: flex-start;
    order: 0;
    padding-top: 0;
    width: 100%;
  }
`
const ItemBroadcast = styled.li`
  min-width: 254px;

  @media (max-width: 766px) {
    min-width: 180px;
    max-width: 200px;
  }
  @media (max-width: 425px) {
    min-width: 100px;
    max-width: 113px;
  }
`
const ItemWrapBroadcast = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 169px 16px 18px 16px;
  height: 100%;
  border: 1px solid var(--color-athens-gray);
  max-width: 256px;
  background: no-repeat top center / contain;
  background-image: ${(props) => imgCards.desctop[props.$broadcastImg]};

  @media (max-width: 1023px) {
    padding: 169px 16px 18px 16px;
  }
  @media (max-width: 766px) {
    padding: 125px 12px 10px 9px;
  }
  @media (max-width: 425px) {
    padding-top: 60px;
    background-image: ${(props) => imgCards.mobile[props.$broadcastImg]};
  }
`
const ItemTitleBroadcast = styled(TitleBroadcast)`
  margin-bottom: 0;
  width: auto;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1200px) {
    margin-bottom: 0;
  }
  @media (max-width: 1023px) {
    margin-bottom: 0;
  }
  @media (max-width: 766px) {
    margin-bottom: 6px;
    font-size: 12px;
  }
`
const SpanBroadcast = styled(Span)`
  margin-bottom: 16px;
  font-size: 12px;

  @media (max-width: 766px) {
    font-size: 9px;
    line-height: 100%;
  }
`
const LinkBroadcast = styled(Link)`
  align-items: center;
  margin-top: auto;
  font-style: italic;
  transition: color 0.2s ease-in-out, fill 0.2s ease-in-out;

  & svg {
    fill: currentColor;
  }
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -1px;
    left: -2px;
    bottom: 0;
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
  @media (max-width: 425px) {
    color: var(--color-electric-violet);
  }
`
const ArchiveWrapBroadcast = styled(ItemWrapBroadcast)`
  row-gap: 12px;
  padding: 0;
  padding-top: 113px;
  border: none;
  max-width: 255px;
  background: no-repeat url(assets/w-wave/mic.png) left top / 65px 89px;

  @media (max-width: 1023px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    align-self: center;
    row-gap: 8px;
    padding: 30px 145px 30px 39.4%;
    border-top: 1px solid var(--color-athens-gray);
    height: auto;
    max-width: 100%;
    background-position: 30% center;
    background-size: 70px 96px;
  }
  @media (max-width: 766px) {
    padding: 31px 32px 54px 30%;
    background-position: 12% 36%;
  }
  @media (max-width: 425px) {
    padding: 29px 32px 54px 100px;
    background-size: 77px 105px;
    background-position: 4% 36%;
  }
`
const LinkBtnBroadcast = styled(LinkBtn)`
  padding: 9px 54px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    border: 2px solid var(--color-daisy-bush);
    color: var(--color-white);
    background-color: var(--color-melrose);
  }
  &:hover {
    border: 2px solid var(--color-melrose);
    color: var(--color-white);
    background-color: var(--color-melrose);
  }
  &:active {
    border: 2px solid var(--color-mirage);
    color: var(--color-white);
    background-color: var(--color-melrose);
  }

  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 766px) {
    order: 2;
  }
  @media (max-width: 425px) {
    padding: 7px 29px;
  }
`

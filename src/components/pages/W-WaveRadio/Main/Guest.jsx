import styled from 'styled-components'
import { Container, Descr, LinkBtn, List, Span, Title } from '../src/generic'

export const Guest = () => {
  return (
    <SectionGuest id="guest">
      <Container>
        <TitleGuest>Гости</TitleGuest>

        <SpanGuest>У&nbsp;нас бывают:</SpanGuest>
        <DescrGuest>
          Блогеры, арт-критики и&nbsp;деятели искусства, музыканты, молодые учёные и&nbsp;люди науки,
          историки, филологи и&nbsp;много других интересных гостей!
        </DescrGuest>

        <ListGuest>
          <ItemGuest>
            <ItemImgGuest alt="Фото Ольги Мартыновой" src="assets/w-wave/guest-1.webp" aria-hidden="true" />
            <ItemWrapGuest>
              <ItemNameGuest>Ольга Мартынова</ItemNameGuest>
              <ItemDescrGuest>
                Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии.
                Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как
                куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.
              </ItemDescrGuest>
              <ItemLinkBtnGuest href="#" target="_blank">
                Эфиры с&nbsp;гостем
              </ItemLinkBtnGuest>
            </ItemWrapGuest>
          </ItemGuest>

          <ItemGuest>
            <ItemImgGuest alt="Фото Дениса Гришина" src="assets/w-wave/guest-2.webp" aria-hidden="true" />
            <ItemWrapGuest>
              <ItemNameGuest>Денис Гришин</ItemNameGuest>
              <ItemDescrGuest>
                Однозначно, элементы политического процесса являются только методом политического участия
                и&nbsp;смешаны с&nbsp;не&nbsp;уникальными данными до&nbsp;степени совершённой неузнаваемости,
                из-за чего возрастает их&nbsp;статус бесполезности.
              </ItemDescrGuest>
              <ItemLinkBtnGuest href="#" target="_blank">
                Эфиры с&nbsp;гостем
              </ItemLinkBtnGuest>
            </ItemWrapGuest>
          </ItemGuest>

          <ItemGuest>
            <ItemImgGuest alt="Фото Ольги Мартыновой" src="assets/w-wave/guest-3.webp" aria-hidden="true" />
            <ItemWrapGuest>
              <ItemNameGuest>Ольга Мартынова</ItemNameGuest>
              <ItemDescrGuest>
                С&nbsp;другой стороны, высококачественный прототип будущего проекта выявляет срочную
                потребность дальнейших направлений развития. В&nbsp;рамках спецификации современных
                стандартов, реплицированные с&nbsp;зарубежных источников.
              </ItemDescrGuest>
              <ItemLinkBtnGuest href="#" target="_blank">
                Эфиры с&nbsp;гостем
              </ItemLinkBtnGuest>
            </ItemWrapGuest>
          </ItemGuest>
        </ListGuest>
      </Container>
    </SectionGuest>
  )
}

const SectionGuest = styled.section`
  background-color: var(--color-mirage);
`
const TitleGuest = styled(Title)`
  margin-bottom: 12px;
  color: var(--color-white);
`
const SpanGuest = styled(Span)`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 425px) {
    margin-bottom: 0px;
  }
`
const DescrGuest = styled(Descr)`
  margin-bottom: 50px;
  max-width: 825px;
  line-height: 160%;
  color: var(--color-gray-chateau);

  @media (max-width: 1200px) {
    max-width: 536px;
  }
  @media (max-width: 766px) {
    margin-bottom: var(--indent);
  }
  @media (max-width: 425px) {
    margin-bottom: 28px;
  }
`
const ListGuest = styled(List)`
  flex-flow: column wrap;
  row-gap: 50px;

  @media (max-width: 1023px) {
    row-gap: 52px;
  }
  @media (max-width: 766px) {
    row-gap: var(--indent);
  }
  @media (max-width: 425px) {
    row-gap: 31px;
  }
`
const ItemGuest = styled.li`
  display: flex;
  flex-flow: row nowrap;
  gap: var(--indent);
  max-width: 920px;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    gap: 12px;
  }
`
const ItemImgGuest = styled.img`
  margin: auto 0;
  height: 272px;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 425px) {
    height: 159px;
    object-fit: cover;
  }
`
const ItemWrapGuest = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  max-width: 458px;
  height: auto;

  @media (max-width: 1023px) {
    max-width: 68%;
  }
  @media (max-width: 425px) {
    max-width: 100%;
  }
`
const ItemNameGuest = styled(Descr)`
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--color-white);

  @media (max-width: 766px) {
    font-size: 20px;
  }
`
const ItemDescrGuest = styled(DescrGuest)`
  margin: 0;
  font-size: 16px;
  line-height: 180%;

  @media (max-width: 1023px) {
    margin-bottom: var(--indent);
  }
  @media (max-width: 766px) {
    margin-bottom: 31px;
    font-size: 16px;
    line-height: 182%;
  }
`
const ItemLinkBtnGuest = styled(LinkBtn)`
  margin-top: auto;
  padding: 9px 17px;
  font-size: 16px;
  color: var(--color-melrose);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border 0.2s ease-in-out;

  &:focus-visible {
    border: 2px solid var(--color-electric-violet);
    color: var(--color-white);
    background-color: var(--color-electric-violet);
  }
  &:hover {
    border: 2px solid var(--color-melrose);
    color: var(--color-white);
    background-color: var(--color-melrose);
  }
  &:active {
    border: 2px solid var(--color-daisy-bush);
    color: var(--color-white);
    background-color: var(--color-daisy-bush);
  }

  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    padding: 7px 12px;
  }
`

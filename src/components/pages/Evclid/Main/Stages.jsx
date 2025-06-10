import styled, { css } from 'styled-components'
import { Container, Descr, Link, Title } from '../src/generic'

export const Stages = () => {
  return (
    <ContainerStages>
      <TitleStages>Этапы</TitleStages>

      <WrapStages>
        <Info>
          <TitleInfo>Проводим консультацию</TitleInfo>

          <DescrInfo>
            Влечёт за&nbsp;собой процесс внедрения и&nbsp;модернизации приоритизации разума над&nbsp;эмоциями.
            В&nbsp;рамках спецификации современных стандартов, некоторые особенности внутренней политики будут
            объективно рассмотрены соответствующими инстанциями. <br /> А&nbsp;также представители современных
            социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом
            мышления. Являясь всего лишь частью общей картины, реплицированные с&nbsp;зарубежных источников,
            современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся
            вытеснить традиционное&nbsp;производство, нанотехнологии освещают чрезвычайно интересные
            особенности картины в&nbsp;целом, однако конкретные выводы, разумеется, призваны к&nbsp;ответу.
          </DescrInfo>

          <WrapLinkInfo>
            <LinkInfo $styleLink={'orange'} href="#">
              Подробнее
            </LinkInfo>
            <LinkInfo $styleLink={'empty'} href="#" download="#">
              Договор
            </LinkInfo>
          </WrapLinkInfo>
        </Info>

        <picture>
          <source srcSet="assets/evclid/stages-phone-min.webp" media="(max-width: 520px)" />
          <source srcSet="assets/evclid/stages-phone.webp" media="(max-width: 992px)" />
          <source srcSet="assets/evclid/stages-laptop.webp" media="(max-width: 1360px)" />
          <ImgStages src="assets/evclid/stages.webp" alt="Превью консультации" />
        </picture>
      </WrapStages>
    </ContainerStages>
  )
}

const ContainerStages = styled(Container)`
  margin-bottom: 96px;

  @media (max-width: 1360px) {
    margin-bottom: 80px;
  }
  @media (max-width: 992px) {
    margin-bottom: 84px;
  }
`
const TitleStages = styled.h2`
  ${Title}
  margin-bottom: 36px;

  @media (max-width: 992px) {
    margin-bottom: var(--gap);
  }
`
const WrapStages = styled.div`
  display: flex;
  column-gap: 142px;

  @media (max-width: 1750px) {
    column-gap: 52px;
  }
  @media (max-width: 1360px) {
    justify-content: space-between;
    column-gap: 43px;
  }
  @media (max-width: 992px) {
    flex-flow: column-reverse wrap;
    justify-content: flex-start;
    row-gap: 37px;
  }
  @media (max-width: 520px) {
    row-gap: 19px;
  }
`
const Info = styled.article`
  max-width: 758px;
  min-height: 382px;

  @media (max-width: 1750px) {
    max-width: 50%;
  }
  @media (max-width: 1360px) {
    max-width: 48%;
  }
  @media (max-width: 992px) {
    max-width: 100%;
  }
`
const TitleInfo = styled.h3`
  ${Title}
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;

  @media (max-width: 992px) {
    margin-bottom: 11px;
  }
  @media (max-width: 520px) {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 500;
  }
`
const DescrInfo = styled(Descr)`
  margin-bottom: 18px;
  line-height: 32px;
  letter-spacing: -0.06px;

  @media (max-width: 1360px) {
    margin-bottom: 24px;
  }
  @media (max-width: 992px) {
    margin-bottom: 25px;
  }
`
const WrapLinkInfo = styled.div`
  display: flex;
  column-gap: var(--gap);

  @media (max-width: 520px) {
    flex-wrap: wrap;
    gap: 11px;
  }
`
const LinkOrange = css`
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-yellow);

  &:focus-visible {
    outline: none;
    background-color: var(--color-light-yellow);
  }
  &:hover {
    background-color: var(--color-light-yellow);
  }
  &:active {
    background-color: var(--color-orange);
  }

  @media (max-width: 520px) {
    padding: 12px 43px;
  }
`
const LinkEmpty = css`
  border: 1px var(--color-black) solid;
  font-weight: 400;

  &:focus-visible {
    outline: none;
    border-color: var(--color-gray);
    background-color: var(--color-gray);
    color: var(--color-white);
  }
  &:hover {
    border-color: var(--color-gray);
    background-color: var(--color-gray);
    color: var(--color-white);
  }
  &:active {
    background-color: var(--color-black);
    color: var(--color-white);
  }

  @media (max-width: 520px) {
    padding: 12px 31px;
  }
`
const LinkInfo = styled(Link)`
  padding: 19px 38px;
  border-radius: var(--radius-min);
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  ${({ $styleLink }) => ($styleLink === 'orange' ? LinkOrange : LinkEmpty)}

  @media (max-width: 520px) {
    border-radius: var(--radius-phone-min);
    font-size: 12px;
`
const ImgStages = styled.img`
  padding-top: 8px;
  border-radius: var(--radius-min);
  overflow: hidden;
  width: 100%;
  height: auto;

  @media (max-width: 992px) {
    padding-top: 0;
    max-height: 284px;
    max-width: 668px;
  }
  @media (max-width: 520px) {
    max-width: 290px;
    max-height: 160px;
  }
`

import styled from 'styled-components'
import { Container, Descr, LinkBtn, List, Span, Title } from '../src/generic'

export const Podcast = () => {
  return (
    <SectionPodcast id="podcast">
      <ContainerPodcast>
        <TitlePodcast>Подкасты</TitlePodcast>

        <ListPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-1-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast
                alt="Подкаст: Европа. XIX век"
                src="assets/w-wave/podcast-1.webp"
                aria-hidden="true"
              />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>14&nbsp;июня</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">15:43</TimePodcast>
                <DescrPodcast>Европа. XIX век</DescrPodcast>
                <NamePodcast>Дмитрий Гутенберг</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-2-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast alt="Подкаст: О музыке" src="assets/w-wave/podcast-2.webp" aria-hidden="true" />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>11&nbsp;июня</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">5:32</TimePodcast>
                <DescrPodcast>О&nbsp;музыке</DescrPodcast>
                <NamePodcast>Дмитрий Гутенберг</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-3-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast alt="Подкаст: Люди сегодня" src="assets/w-wave/podcast-3.webp" aria-hidden="true" />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>8&nbsp;июня</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">8:54</TimePodcast>
                <DescrPodcast>Люди сегодня</DescrPodcast>
                <NamePodcast>Анна Васильева</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-4-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast
                alt="Подкаст: Хэллоу, Африка!"
                src="assets/w-wave/podcast-4.webp"
                aria-hidden="true"
              />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>5&nbsp;июня</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">9:04</TimePodcast>
                <DescrPodcast>Хэллоу, Африка!</DescrPodcast>
                <NamePodcast>Пётр Дмитриевский</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-5-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast alt="Подкаст: Обо всём" src="assets/w-wave/podcast-5.webp" aria-hidden="true" />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>2&nbsp;июня</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">7:03</TimePodcast>
                <DescrPodcast>Обо всём</DescrPodcast>
                <NamePodcast>Пётр Дмитриевский</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-6-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast alt="Подкаст: Физика цвета" src="assets/w-wave/podcast-6.webp" aria-hidden="true" />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>28&nbsp;мая</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">9:15</TimePodcast>
                <DescrPodcast>Физика цвета</DescrPodcast>
                <NamePodcast>Татьяна Флеганова</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-7-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast
                alt="Подкаст: Источник звука"
                src="assets/w-wave/podcast-7.webp"
                aria-hidden="true"
              />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>22&nbsp;мая</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">16:04</TimePodcast>
                <DescrPodcast>Источник звука</DescrPodcast>
                <NamePodcast>Пётр Дмитриевский</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
          <ItemPodcast>
            <PicturePodcast>
              <source srcSet="assets/w-wave/podcast-8-mobil-min.webp" media="(max-width: 425px)" />
              <ImgPodcast
                alt="Подкаст: Правила этикета"
                src="assets/w-wave/podcast-8.webp"
                aria-hidden="true"
              />
            </PicturePodcast>
            <WrapPodcast>
              <SapnPodcast>18&nbsp;мая</SapnPodcast>
              <PartPodcast>
                <TimePodcast aria-hidden="true">6:55</TimePodcast>
                <DescrPodcast>Правила этикета</DescrPodcast>
                <NamePodcast>Татьяна Флеганова</NamePodcast>
              </PartPodcast>
            </WrapPodcast>
          </ItemPodcast>
        </ListPodcast>

        <LinkBtnPodcast href="#">Ещё подкасты</LinkBtnPodcast>
      </ContainerPodcast>
    </SectionPodcast>
  )
}

const SectionPodcast = styled.section`
  background-color: var(--color-athens-gray);
`
const ContainerPodcast = styled(Container)`
  @media (max-width: 425px) {
    padding-bottom: 58px;
  }
`
const TitlePodcast = styled(Title)`
  margin-bottom: var(--indent);

  @media (max-width: 425px) {
    margin-bottom: 18px;
    padding-top: 2px;
  }
`
const ListPodcast = styled(List)`
  gap: var(--indent);
`
const LinkBtnPodcast = styled(LinkBtn)`
  display: none;
  margin-top: var(--indent);
  padding: 23px 52px;
  text-align: center;
  color: var(--color-electric-violet);
  transform: translateX(177%);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border 0.2s ease-in-out;

  &:focus-visible {
    border: 2px solid var(--color-daisy-bush);
    outline-offset: -2px;
    background-color: var(--color-melrose);
    color: var(--color-white);
  }
  &:hover {
    outline: none;
    background-color: var(--color-electric-violet);
    color: var(--color-white);
  }
  &:active {
    background-color: var(--color-daisy-bush);
    color: var(--color-white);
  }
`
const ItemPodcast = styled.li`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: calc(50% - 30px / 2);
  height: 100%;
  background-color: var(--color-white);

  @media (max-width: 1023px) {
    width: 100%;
  }
`
const PicturePodcast = styled.picture`
  max-height: 140px;

  @media (max-width: 425px) {
    width: 100%;
  }
`
const ImgPodcast = styled.img`
  object-fit: cover;
  margin: auto 0;
  height: 140px;

  @media (max-width: 425px) {
    height: auto;
    width: 100%;
  }
`
const WrapPodcast = styled.div`
  padding: 15px 0;
  max-width: 350px;

  @media (max-width: 425px) {
    padding: 25px 64px 30px 16px;
  }
`
const SapnPodcast = styled(Span)`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 51px;
  font-size: 10px;
  line-height: 165%;
  color: var(--color-mirage);
  background-color: var(--color-athens-gray);

  @media (max-width: 766px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    top: 0;
    left: 0;
    bottom: auto;
  }
`
const PartPodcast = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding-left: var(--indent);
  height: 100%;

  @media (max-width: 425px) {
    padding-left: 0;
  }
`
const TimePodcast = styled(Span)`
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 100%;
  color: var(--color-mirage);

  @media (max-width: px) {
    font-size: 12px;
  }
`
const DescrPodcast = styled(Descr)`
  margin-bottom: 4px;

  @media (max-width: 766px) {
    font-size: 16px;
  }
`
const NamePodcast = styled(Descr)`
  font-size: 16px;
  color: var(--color-gray-chateau);

  @media (max-width: 766px) {
    font-size: 12px;
  }
`

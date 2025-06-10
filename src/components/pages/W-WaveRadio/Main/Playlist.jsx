import styled from 'styled-components'
import { Container, Descr, List, Span, Title } from '../src/generic'

export const Playlist = () => {
  return (
    <section id="playlist">
      <ContainerPlaylist>
        <WrapDescrPlaylist>
          <TitlePlaylist>Плейлисты</TitlePlaylist>
          <DescrPlaylist>
            Раздел &laquo;Плейлисты&raquo; может содержать информацию, не&nbsp;предназначенную для
            несовершеннолетних
          </DescrPlaylist>
          <CopyrightPlaylist>&copy;&nbsp;2021&nbsp;l W-Wave</CopyrightPlaylist>
          <LimitPlaylist>18+</LimitPlaylist>
        </WrapDescrPlaylist>

        <ListPlaylist>
          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Ploho"
              src="assets/w-wave/playlist-1.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Ploho</ItemNamePlaylist>
              <ItemInfoPlaylist>3&nbsp;последних альбома</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Molchat Doma"
              src="assets/w-wave/playlist-2.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Molchat Doma</ItemNamePlaylist>
              <ItemInfoPlaylist>Все песни</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Motorama"
              src="assets/w-wave/playlist-3.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Motorama</ItemNamePlaylist>
              <ItemInfoPlaylist>Все песни</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Human Tetris"
              src="assets/w-wave/playlist-4.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Human Tetris</ItemNamePlaylist>
              <ItemInfoPlaylist>3&nbsp;последних альбома</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Буерак"
              src="assets/w-wave/playlist-5.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Буерак</ItemNamePlaylist>
              <ItemInfoPlaylist>Все EP</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'rus'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Июльские Дни"
              src="assets/w-wave/playlist-6.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Июльские Дни</ItemNamePlaylist>
              <ItemInfoPlaylist>Альбом &laquo;Колокол&raquo;</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Joy Division"
              src="assets/w-wave/playlist-7.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Joy Division</ItemNamePlaylist>
              <ItemInfoPlaylist>Лучшее за&nbsp;всё время</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста The Cure"
              src="assets/w-wave/playlist-8.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>The Cure</ItemNamePlaylist>
              <ItemInfoPlaylist>Лучшее за&nbsp;всё время</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста The Smiths"
              src="assets/w-wave/playlist-9.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>The Smiths</ItemNamePlaylist>
              <ItemInfoPlaylist>Период 1984&ndash;1988</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста New Order"
              src="assets/w-wave/playlist-10.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>New Order</ItemNamePlaylist>
              <ItemInfoPlaylist>Хиты</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Bauhaus"
              src="assets/w-wave/playlist-11.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Bauhaus</ItemNamePlaylist>
              <ItemInfoPlaylist>Все синглы</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>

          <ItemPlaylist>
            <ItemIconPlaylist $language={'brit'}></ItemIconPlaylist>
            <ItemImgPlaylist
              alt="Обложка плейлиста Gang Of Four"
              src="assets/w-wave/playlist-12.webp"
              aria-hidden="true"
            />
            <ItemWrapDescrPlaylist>
              <ItemNamePlaylist>Gang Of Four</ItemNamePlaylist>
              <ItemInfoPlaylist>3&nbsp;последних альбома</ItemInfoPlaylist>
            </ItemWrapDescrPlaylist>
          </ItemPlaylist>
        </ListPlaylist>
      </ContainerPlaylist>
    </section>
  )
}

const ContainerPlaylist = styled(Container)`
  display: flex;
  gap: var(--indent);

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 95px;
  }
  @media (max-width: 1023px) {
    padding-bottom: 113px;
  }
  @media (max-width: 425px) {
    padding-bottom: 56px;
  }
`
const WrapDescrPlaylist = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 0;
  min-width: 349px;

  @media (max-width: 425px) {
    min-width: 100%;
  }
`
const TitlePlaylist = styled(Title)`
  margin-bottom: 12px;
`
const DescrPlaylist = styled(Descr)`
  font-size: 16px;
  line-height: 139%;
  color: var(--color-gray-chateau);

  @media (max-width: 766px) {
    font-size: 12px;
  }
`
const CopyrightPlaylist = styled(Span)`
  margin-bottom: 3px;
  font-style: italic;

  @media (max-width: 766px) {
    margin-bottom: 7px;
    font-size: 12px;
  }
`
const LimitPlaylist = styled(Span)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-gray-chateau);
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 12px;

  @media (max-width: 1200px) {
    padding-top: 4px;
  }
`
const ListPlaylist = styled(List)`
  gap: 30px 29px;
  padding-top: 13px;

  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 425px) {
    row-gap: 29px;
  }
`
const ItemPlaylist = styled.li`
  position: relative;
  border: 1px solid var(--color-athens-gray);
  width: 161px;

  @media (max-width: 1200px) {
    display: flex;
    width: calc(33% - 17px);
    max-height: 112px;
  }
  @media (max-width: 1023px) {
    width: calc(50% - 15px);
  }
  @media (max-width: 766px) {
    flex-direction: column;
    width: 141px;
    max-height: 100%;
  }
  @media (max-width: 425px) {
    width: 113px;
  }
`
const ItemIconPlaylist = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.$language === 'rus' ? 'url(assets/w-wave/rus.webp)' : 'url(assets/w-wave/brit.webp)'};

  @media (max-width: 1200px) {
    left: 0;
  }
  @media (max-width: 425px) {
    left: 88px;
  }
`
const ItemImgPlaylist = styled.img`
  @media (max-width: 1200px) {
    height: 112px;
  }
  @media (max-width: 766px) {
    height: 140px;
  }
  @media (max-width: 425px) {
    height: 113px;
  }
`
const ItemWrapDescrPlaylist = styled.div`
  padding: 10px 15px 11px;

  @media (max-width: 1200px) {
    align-self: center;
    padding: 9px;
  }
  @media (max-width: 766px) {
    align-self: flex-start;
  }
`
const ItemNamePlaylist = styled(DescrPlaylist)`
  margin-bottom: 2px;
  font-weight: 500;
  line-height: 100%;
  color: var(--color-mirage);

  @media (max-width: 1200px) {
    margin-bottom: 4px;
  }
  @media (max-width: 425px) {
    margin-bottom: 6px;
  }
`
const ItemInfoPlaylist = styled(Span)`
  font-size: 12px;

  @media (max-width: 1200px) {
    line-height: 100%;
  }
  @media (max-width: 766px) {
    font-size: 9px;
  }
`

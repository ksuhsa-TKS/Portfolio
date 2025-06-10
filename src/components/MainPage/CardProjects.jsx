import styled, { css } from 'styled-components'
import { Descr, Link } from '../generic'

export const CardProjects = ({ project, imgBack }) => {
  return (
    <Card $backImg={imgBack}>
      <Prewiew $previewImg={project} className="preview"></Prewiew>

      <TitleCard>{project.title}</TitleCard>

      <Descr>{project.descr}</Descr>

      <Wrap $direction="vertical">
        <TitleDescr>Что реализовано:</TitleDescr>
        <List $direction="vertical">
          {project.realized.map((el, i) => (
            <li key={i}>
              <Descr>{el}</Descr>
            </li>
          ))}
        </List>
      </Wrap>

      {project.feature.length > 0 && (
        <Wrap>
          <TitleDescr>Особенности:</TitleDescr>
          <List $direction="horizontal">
            {project.feature.map((el, i) => (
              <li key={i}>
                <SpanDescr>{el}</SpanDescr>
              </li>
            ))}
          </List>
        </Wrap>
      )}

      {project.development !== '' && (
        <Wrap>
          <TitleDescr>В разработке:</TitleDescr>
          <Descr>{project.development}</Descr>
        </Wrap>
      )}

      <Wrap>
        <TitleDescr>Стек:</TitleDescr>
        <List $direction="horizontal">
          {project.stek.map((el, i) => (
            <li key={i}>
              <SpanDescr>{el}</SpanDescr>
            </li>
          ))}
        </List>
      </Wrap>

      <WrapLink>
        <Link href={project.link} target="_blank">
          Demo
        </Link>
        <Link href={project.git} target="_blank">
          GitHab
        </Link>
      </WrapLink>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(12px, 2vw, 20px);
  margin: 0 auto;
  padding: 15px clamp(30px, 10vw, 140px);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s linear;
  width: 100%;
  height: 520px;
  background: no-repeat center / cover;
  background-image: ${({ $backImg }) => `url(${$backImg})`};

  &:hover .preview {
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
`
const Prewiew = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: no-repeat top / 100%;
  background-image: ${({ $previewImg }) => `url(${$previewImg.imgDesktop})`};
  transition: all 0.3s ease-in-out;
  opacity: 1;
  visibility: visible;

  @media (max-width: 950px) {
    background-image: ${({ $previewImg }) => `url(${$previewImg.imgTablet})`};
  }
  @media (max-width: 540px) {
    background-image: ${({ $previewImg }) => `url(${$previewImg.imgMobile})`};
  }
`
const TitleCard = styled.h3`
  align-self: center;
  flex-shrink: 0;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.2;
  text-align: center;
  white-space: pre-wrap;
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;

  ${({ $direction }) =>
    $direction === 'vertical' &&
    css`
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: start;
    `}
`
const List = styled.ul`
  display: flex;
  gap: 6px;

  ${({ $direction }) =>
    $direction === 'vertical'
      ? css`
          flex-direction: column;
          padding-left: 25px;

          & li {
            list-style-type: '❖ ';
          }
        `
      : css`
          flex-wrap: wrap;
        `}
`
const TitleDescr = styled(Descr)`
  font-weight: 400;
`
const SpanDescr = styled.span`
  display: flex;
  align-items: center;
  padding: 3px 6px 2px;
  border: 1px solid rgb(100 100 100);
  border-radius: 2px;
  background: rgb(150 150 150 / 40%);
  font-family: monospace;
  font-size: clamp(12px, 2vw, 16px);
  line-height: 1;
  color: #fff;
`
const WrapLink = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 36px;
  padding-top: 10px;

  & a {
    padding: 0 10px 2px;
    border-bottom: 1px solid currentColor;
  }
`

// old style

const Item = styled.div`
  position: relative;
  display: flex;
  gap: clamp(6px, 2vw, 20px);
  padding: 20px;
  padding-right: 40px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s linear;
  width: 100%;
  height: clamp(235px, 49vw, 578px);
  background: no-repeat ${(props) => `url(${props.$backImg})`} center / cover;

  &:hover .preview {
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 940px) {
    flex-flow: column;
    justify-content: center;
    padding: 20px;
  }

  @media (max-width: 576px) {
    height: clamp(400px, 90vw, 440px);
  }
`

const Title = styled.h3`
  align-self: center;
  flex-shrink: 0;
  width: 130px;
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.2;
  text-align: center;
  white-space: pre-wrap;

  @media (max-width: 940px) {
    width: 100%;
  }
`

const WrapDescr = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 12px;

  @media (max-width: 940px) {
    gap: 6px;
  }
`

import db from '../../../portfolio.json'
import styled from 'styled-components'
import { Container, Descr, Title } from '../generic'
import { useWidthDesktop } from '../../hooks/useWidthDesktop'
import { Anchor } from 'antd'
import BasicInfo from './BasicInfo'
import ListProjects from './ListProjects'
import ListStack from './ListStack'
import SupportInfo from './SupportInfo'
import Learning from './Learning'

const MainPage = () => {
  const { screenWidth } = useWidthDesktop()

  return (
    <Main>
      {screenWidth > 768 && (
        <CastomAnchor
          affix={true}
          offsetTop={60}
          getContainer={() => document.getElementById('root')}
          targetOffset={60}
          items={[
            { key: '#about-me', href: '#about-me', title: 'Обо мне' },
            { key: '#my-projects', href: '#my-projects', title: 'Мои проекты' },
            { key: '#my-stack', href: '#my-stack', title: 'Мой стек' },
            { key: '#p.s.', href: '#p.s.', title: 'P.S.' },
          ]}
        />
      )}

      <MainContainer>
        <Container id="about-me">
          <BasicInfo />
        </Container>

        <Container id="my-projects">
          <WrapTitle>
            <Title>Теперь подробнее о моих проектах</Title>
            <Descr>
              Что бы узнать подробнее о проектах наведитесь или кликните если смотрите с телефона на
              изображение
            </Descr>
          </WrapTitle>

          <ListProjects db={db} />
        </Container>

        <Container id="my-stack">
          <Title>Кратко о моем стеке, что и почему использую</Title>
          <ListStack db={db} />
        </Container>

        <Container>
          <TitleChapter>Что сейчас изучаю</TitleChapter>
          <Learning db={db} />
        </Container>

        <Container id="p.s.">
          <SupportInfo />
        </Container>
      </MainContainer>
    </Main>
  )
}

export default MainPage

const Main = styled.section`
  position: relative;
  display: flex;
  flex-flow: row-reverse;
  gap: clamp(16px, 3vw, 40px);
  margin: 0 auto;
  padding: clamp(16px, 5vw, 60px);
  max-width: 1920px;

  & > div {
    height: min-content;
  }
`
const CastomAnchor = styled(Anchor)`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 20px;
  line-height: 1.2;
`
const MainContainer = styled.article`
  display: flex;
  flex-flow: column;
  gap: clamp(20px, 5vw, 60px);
  width: clamp(365px, 76vw, 900px);
  height: auto;

  @media (max-width: 768px) {
    width: clamp(365px, 90vw, 680px);
  }
`
const WrapTitle = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`
const TitleChapter = styled.h4`
  font-size: clamp(18px, 2vw, 22px);
`

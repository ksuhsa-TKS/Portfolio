import styled from 'styled-components'
import { AnimationElement, AnimationWrap, Container, Title } from '../src/generic.jsx'
import { observer } from 'mobx-react'
import { lazy, Suspense } from 'react'
import ButtonAdd from './ButtonAdd.jsx'
import Form from './Form.jsx'
import WindowDelete from './WindowDelete.jsx'
import Window from '../storage/Window.jsx'

const LazyTableHeader = lazy(() => import('./TableHeader.jsx'))

const Main = () => {
  return (
    <main>
      <MainContainer>
        <MainTitle>Клиенты</MainTitle>

        <WrapMainContent>
          <Suspense
            fallback={
              <AnimationWrap>
                <AnimationElement></AnimationElement>
              </AnimationWrap>
            }>
            <LazyTableHeader />
          </Suspense>
        </WrapMainContent>

        <ButtonAdd />
      </MainContainer>

      {Window.windowForm && <Form />}
      {Window.windowDelete && <WindowDelete />}
    </main>
  )
}

export default observer(Main)

const MainContainer = styled.section`
  ${Container}
`
const MainTitle = styled.h1`
  ${Title}
  font-weight: 700;

  @media (max-width: 577px) {
    font-size: 18px;
    margin-bottom: 0;
  }
`
const WrapMainContent = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 940px) {
    width: 100%;
    overflow-y: hidden;
  }
`

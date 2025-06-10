import './src/style.css'
import styled from 'styled-components'
import { Descr } from '../../generic'
import { lazy, Suspense } from 'react'
import { MainLoading } from '../../MainLoading.jsx'

const LazyHeader = lazy(() => import('./Header.jsx'))
const LazyMain = lazy(() => import('./Main.jsx'))
const LazyFooter = lazy(() => import('./Footer.jsx'))

const Lagoona = () => {
  return (
    <Suspense fallback={<MainLoading />}>
      <Container>
        <MessageWrap>
          <Message>На этом проекте не продусмотрен размер менее 1220px</Message>
        </MessageWrap>

        <LazyHeader />

        <LazyMain />

        <LazyFooter />
      </Container>
    </Suspense>
  )
}

export default Lagoona

const Container = styled.div`
  position: relative;
  min-width: 1200px;
  font-family: 'Muller', sans-serif;
  background-color: #f1f1f1;
  color: #000;
`
const MessageWrap = styled.div`
  display: none;

  @media (max-width: 1220px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    height: 100vh;
    width: 100vw;
    background: #000000a8;
    text-align: center;
  }
`
const Message = styled(Descr)`
  font-size: clamp(20px, 3vw, 30px);
  color: #fff;
`

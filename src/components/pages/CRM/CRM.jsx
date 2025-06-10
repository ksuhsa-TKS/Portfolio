import './src/style.css'
import styled from 'styled-components'
import { AnimationElement, AnimationWrap } from './src/generic.jsx'
import { lazy, Suspense, useEffect } from 'react'
import Storage from './storage/Storage.jsx'
import Window from './storage/Window.jsx'

const LazyHeader = lazy(() => import('./ui/Header.jsx'))
const LazyMain = lazy(() => import('./ui/Main.jsx'))

const CRM = () => {
  Storage.requestClients()
  useEffect(() => {
    Window.checkLocation()
  }, [window.location.hash])

  return (
    <Container>
      <Suspense
        fallback={
          <AnimationWrap>
            <AnimationElement></AnimationElement>
          </AnimationWrap>
        }>
        <LazyHeader />
        <LazyMain />
      </Suspense>
    </Container>
  )
}

export default CRM

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: var(--grey);
  font-family: 'Open Sans', sans-serif;
  color: var(--black);
`

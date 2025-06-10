import { lazy, Suspense } from 'react'
import { MainLoading } from '../../MainLoading'
import './src/style.css'
import styled from 'styled-components'

const LazyHeader = lazy(() => import('./Header.jsx'))
const LazyMain = lazy(() => import('./Main.jsx'))
const LazyFooter = lazy(() => import('./Footer.jsx'))

const WaveRadio = () => {
  return (
    <Suspense fallback={<MainLoading />}>
      <Container>
        <LazyHeader />

        <LazyMain />

        <LazyFooter />
      </Container>
    </Suspense>
  )
}

export default WaveRadio

const Container = styled.div`
  min-width: 320px;
  background-color: #fff;
  font-family: 'Muller', sans-serif;
  color: var(--color-mirage);
`

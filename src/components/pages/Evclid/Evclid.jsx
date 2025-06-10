import { lazy, Suspense } from 'react'
import './src/style.css'
import styled from 'styled-components'
import { MainLoading } from '../../MainLoading.jsx'

const LazyHeader = lazy(() => import('./Header.jsx'))
const LazyMain = lazy(() => import('./Main.jsx'))
const LazyFooter = lazy(() => import('./Footer.jsx'))

const Evclid = () => {
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

export default Evclid

const Container = styled.div`
  min-width: 320px;
  background-color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
  color: #000;
`

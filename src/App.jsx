import styled from 'styled-components'
import { Route, Routes, useLocation } from 'react-router'
import { lazy, Suspense } from 'react'
import Loading from './assets/loading.svg?react'
import MenuPage from './components/MenuPage/MenuPage'

const LazyMain = lazy(() => import('./components/MainPage/MainPage'))
const LazyCollectionMystery = lazy(() => import('./components/pages/CollectionMystery/CollectionMystery'))
const LazyCRM = lazy(() => import('./components/pages/CRM/CRM'))
const LazyWaveRadio = lazy(() => import('./components/pages/W-WaveRadio/WaveRadio'))
const LazyEvclid = lazy(() => import('./components/pages/Evclid/Evclid'))
const LazyLagoona = lazy(() => import('./components/pages/Lagoona/Lagoona'))

function App() {
  const location = useLocation()

  return (
    <Suspense
      fallback={
        <WrapAnimationLoader>
          <IconAnimation />
          <DescrAnomation>Портфолио загружается...</DescrAnomation>
        </WrapAnimationLoader>
      }>
      {location.pathname !== '/' && <MenuPage />}

      <Routes>
        <Route path="/" element={<LazyMain />} />
        <Route path="/collection-mystery" element={<LazyCollectionMystery />} />
        <Route path="/crm" element={<LazyCRM />} />
        <Route path="/w-wave" element={<LazyWaveRadio />} />
        <Route path="/evclid" element={<LazyEvclid />} />
        <Route path="/lagoona" element={<LazyLagoona />} />
      </Routes>
    </Suspense>
  )
}

export default App

const WrapAnimationLoader = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const IconAnimation = styled(Loading)`
  height: 90px;
  width: auto;
  animation: main-loading 1.5s linear infinite;
`
const DescrAnomation = styled.p`
  animation: main-loading-descr 1.5s linear infinite;
`

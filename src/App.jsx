import { Link, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import Loading from './assets/loading.svg?react'

const LazyCardsList = lazy(() => import('./CardsList/CardsList'))
const LazyCollectionMystery = lazy(() => import('./pages/CollectionMystery'))
const LazyCRM = lazy(() => import('./pages/CRM'))
const LazyWaveRadio = lazy(() => import('./pages/WaveRadio'))
const LazyEvclid = lazy(() => import('./pages/Evclid'))
const LazyLagoona = lazy(() => import('./pages/Lagoona'))

function App() {

  return (
    <Suspense fallback={
      <div className='descr main-loading'>
        <Loading className='main-loading__svg' />
        <p className="descr main-loading__descr">Портфолио загружается...</p>
      </div>
    }>
        <header className="flex-main header-main">
          <span className="flex-main header-main__wrap">
            <Link to='/' className="header-main__link">Портфолио</Link>
            <a className='header-main__link header-main__link--min' href="https://github.com/ksuhsa-TKS" target='_blank'>GitHab</a>
            <a href='../public/assets/main/ТрахачеваКсения_Резюме.pdf' download='ТрахачеваКсения_Резюме.pdf'>Резюме</a>
          </span>

          <Nav />
        </header>

        <Routes>
          <Route path='/*' element={<LazyCardsList />} />

          <Route path='/collection-mystery' element={<LazyCollectionMystery />} />
          <Route path='/crm' element={<LazyCRM />} />
          <Route path='/w-wave' element={<LazyWaveRadio />} />
          <Route path='/evclid' element={<LazyEvclid />} />
          <Route path='/lagoona' element={<LazyLagoona />} />
        </Routes>

        <footer className="flex-main footer-main">
          <span className="flex-main footer-main__wrap">
            <span className="flex-main">
              <Link to='/' className="footer-main__link">Главняя</Link>
              <a className="footer-main__link" href="https://github.com/ksuhsa-TKS" target='_blank'>GitHab</a>
              <a className="footer-main__link" href="https://docs.google.com/document/d/1F8iEedeIHyYR8IO-mQ2l2vW9S4WiShhk/edit" download='Резюме Трахачева Ксения' target='_blank'>Резюме</a>
            </span>
          </span>

          <span className="flex-main footer-main__wrap">
            <span className="footer-main__descr">Контакты:</span>

            <a className="footer-main__descr" href='https://t.me/Ksenia_TKS/' target='_blank'>@Ksenia_TKS</a>
            <a className="footer-main__descr" href='mailto:ksuhsa293@gmail.com' target='_blank'>ksuhsa293@gmail.com</a>
          </span>

          <Nav min={true} />
        </footer>
    </Suspense >
  )
}

export default App

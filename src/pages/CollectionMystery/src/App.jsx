import { lazy } from 'react'
import { Suspense } from 'react'
import './App.css'
import Loading from './assets/loading.svg?react'
import StorageCollection from './Storage/StorageCollection.jsx'
import StorageCounter from './Storage/StorageCounter.jsx'
import StoragePartInventory from './Storage/StoragePartInventory.jsx'

const LazyHeader = lazy(() => import('./Header/Header.jsx'))
const LazyMain = lazy(() => import('./Main/Main.jsx'))
const LazyFooter = lazy(() => import('./Footer/Footer.jsx'))

const App = () => {
  StorageCollection.requestCollection
  StoragePartInventory.requestGenreList
  StoragePartInventory.requestPublisherList
  StoragePartInventory.requestAuthorList
  StorageCounter.getData

  StorageCollection.sortSortNameRating

  return (
    <Suspense fallback={
      <div className='descr loading'>
        <Loading className='loading__svg' />
        <p className="descr loading__descr">magic loading</p>
      </div>
    }>
      <LazyHeader />

      <LazyMain />

      <LazyFooter />
    </Suspense>
  )
}

export default App

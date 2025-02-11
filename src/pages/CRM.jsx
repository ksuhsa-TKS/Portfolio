import { lazy, Suspense, useEffect } from 'react'
import './CRM/css/normalize.css'
import './CRM/css/style.css'
import './CRM/css/media.css'
import Storage from './CRM/storage/Storage.jsx'
import Window from './CRM/storage/Window.jsx'

const LazyHeader = lazy(() => import('./CRM/ui/Header.jsx'))
const LazyMain = lazy(() => import('./CRM/ui/Main.jsx'))

const CRM = () => {
  Storage.requestClients()
  useEffect(() => { Window.checkLocation() }, [window.location.hash])

  return (
    <div className='crm'>
      <Suspense fallback={<div className="crm-anima-main"><span className="crm-anima-element"></span></div>}>
        <LazyHeader />
        <LazyMain />
      </Suspense>
    </div >
  )
}

export default CRM

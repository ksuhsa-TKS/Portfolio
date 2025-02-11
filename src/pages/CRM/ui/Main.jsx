import { observer } from 'mobx-react'
import { lazy, Suspense } from 'react'
import ButtonAdd from './ButtonAdd.jsx'
import Form from './Form.jsx'
import WindowDelete from './WindowDelete.jsx'
import Window from '../storage/Window.jsx'

const LazyTableHeader = lazy(() => import('./TableHeader.jsx'))

const Main = () => {
  return (
    <main className="crm-main">
      <section className="crm-container">
        <h1 className="crm-title crm-main__title">Клиенты</h1>

        <div className="crm-block">
          <Suspense fallback={<div className="crm-anima-wrap"><span className="crm-anima-element"></span></div>}>
            <LazyTableHeader />
          </Suspense>
        </div>

        <ButtonAdd />
      </section >

      {Window.windowForm && <Form />}
      {Window.windowDelete && <WindowDelete />}
    </main >
  )
}

export default observer(Main)

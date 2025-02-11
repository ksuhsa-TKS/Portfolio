import Close from '../img/close-big.svg?react'
import Window from '../storage/Window'
import Storage from '../storage/Storage'

const WindowDelete = () => {

  const activateClose = (el = false) => {
    if (!el) { return Window.updateWindowDelete() };
    if (el.target.tagName === 'ARTICLE') { return Window.updateWindowDelete() };
  };

  const activateDelete = (id) => { Storage.deleteClient(id); Window.updateWindowDelete() };

  return (
    <article className="crm-window" onClick={(el) => { activateClose(el) }}>
      <div className="crm-window__wrap crm-removal__wrap" id='removal'>
        <h3 className="crm-title crm-removal__title">Удалить клиента</h3>
        <p className="crm-removal__descr">Вы действительно хотите удалить данного клиента?</p>

        <button className="crm-btn crm-window__edit crm-removal__btn-delete"
          onClick={() => { activateDelete(Window.clientId) }}>Удалить</button>

        <button className="crm-btn crm-window__cancel crm-removal__btn-cancel"
          onClick={() => { activateClose() }}>Отмена</button>

        <button className="crm-btn crm-window__close crm-removal__btn-close"
          onClick={() => { activateClose() }}><Close /></button>
      </div>
    </article>
  )
}

export default WindowDelete

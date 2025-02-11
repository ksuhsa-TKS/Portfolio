import Add from '../img/humen-plus.svg?react'
import Window from '../storage/Window'

const ButtonAdd = () => {
  return (
    <div className="crm-btn-wrap">
      <button className="crm-btn crm-btn__add-client" id="add-client" onClick={() => { Window.updateWindowForm('Создать') }}>
        Добавить клиента <Add />
      </button>
    </div>
  )
}

export default ButtonAdd

import { observer } from "mobx-react";
import "./BtnCreatingCard.css"
import Create from '../assets/create.svg?react'
import StorageModal from "../Storage/StorageModal";

const BtnCreatingCard = () => {
  return (
    <button className="btn flex create__btn" type="button" onClick={() => { StorageModal.addPosition('create') }} >
      Создать тайну <Create className="svg" />
    </button>
  )
}

export default observer(BtnCreatingCard)

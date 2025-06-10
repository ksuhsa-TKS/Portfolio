import './SearchButton.css'
import { observer } from "mobx-react"
import StorageCollection from '../Storage/StorageCollection'


const SearchButton = () => {
  const btnStatusGame = () => {
    switch (StorageCollection.status) {
      case "Статус игры":
        return (<button className="btn search__btn search__btn--status" onClick={() => {
          StorageCollection.addStatusGame('Играли'); StorageCollection.checkFilling('sortStatus'); StorageCollection.sortStatusGameCollection
        }}>Статус игры</button>)
      case "Играли":
        return (<button className="btn search__btn search__btn--status" onClick={() => {
          StorageCollection.addStatusGame('Не играли'); StorageCollection.checkFilling('sortStatus'); StorageCollection.sortStatusGameCollection
        }}>Играли</button>)
      case "Не играли":
        return (<button className="btn search__btn search__btn--status" onClick={() => {
          StorageCollection.addStatusGame('Статус игры'); StorageCollection.checkFilling('sortStatus'); StorageCollection.sortStatusGameCollection
        }}>Не играли</button>)
    }
  }

  const btnPNP = () => {
    switch (StorageCollection.pnp) {
      case 'all':
        return (<button className="btn search__btn search__btn--del" onClick={() => {
          StorageCollection.addPnp('pnp'), StorageCollection.checkFilling('sortPnp'), StorageCollection.sortPnpCollection
        }}>KIK</button>)
      case 'pnp':
        return (<button className="btn search__btn" onClick={() => {
          StorageCollection.addPnp('all'), StorageCollection.checkFilling('sortPnp'), StorageCollection.sortPnpCollection
        }}>KIK</button>)
    }
  }

  return (
    <>
      {btnStatusGame()}
      {btnPNP()}
    </>
  )
}

export default observer(SearchButton)

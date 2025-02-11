import Storage from "../storage/Storage"
import Window from "../storage/Window"

const Header = () => {
  const searchInput = (value) => {
    Window.editLoading('table', true)
    setTimeout(() => {
      Storage.searchClients(value.trim())
      Window.editLoading('table', false)
    }, 300)
  }

  return (
    <header className="crm-header">
      <div className="crm-container crm-header__container">
        <a className="crm-link crm-link__logo" href="#">
          <img className="crm-img crm-logotip" src="assets/crm/logotip.png" alt="Логотип компании skb" />
        </a>

        <form className="crm-form" action="#" method="get">
          <input className="crm-input crm-form__input crm-form__input--header" id="header-input" type="search"
            placeholder="Введите запрос" onChange={(el) => { searchInput(el.target.value) }} />
        </form>
      </div>
    </header>
  )
}

export default Header

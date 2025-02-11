import { observer } from 'mobx-react'
import './Header.css'
import logo from '../assets/Logo.svg'
import CounterMystery from '../CounterMystery/CounterMystery'
import BtnCreatingCard from '../BtnCreatingCard/BtnCreatingCard'

const Header = () => {
  return (
    <header className="header">
      <a className='flex title header__link' href={window.location.href} >
        <img className='logo' src={logo} alt="Магический шар коллекции тайн" />
        Коллекция тайн
      </a>

      <CounterMystery />

      <BtnCreatingCard />
    </header>
  )
}

export default observer(Header)

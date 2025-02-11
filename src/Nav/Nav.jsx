import { Link } from "react-router"
import './Nav.css'

const Nav = ({ min = false }) => {
  return (
    <nav className="flex-main nav-main">
      <Link to='/collection-mystery' className={`nav-main__link ${min && 'nav-main__link--min'}`}>Collection Mystery</Link>
      <Link to='/crm' className={`nav-main__link ${min && 'nav-main__link--min'}`}>CRM</Link>
      <Link to='/w-wave' className={`nav-main__link ${min && 'nav-main__link--min'}`}>W-WaveRadio</Link>
      <Link to='/evclid' className={`nav-main__link ${min && 'nav-main__link--min'}`}>Evclid</Link>
      <Link to='/lagoona' className={`nav-main__link ${min && 'nav-main__link--min'}`}>Lagoona</Link>
    </nav>
  )
}

export default Nav

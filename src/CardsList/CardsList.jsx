import './CardsList.css'
import Card from "../Card/Card"
import cards from "../../portfolio.json"

const CardsList = () => {
  return (
    <ul className='flex-main cards-main'>
      {cards.map((card) => (
        <li className='cards-main__item' key={card.title}>
            <Card card={card} />
        </li>
      ))}
    </ul>
  )
}

export default CardsList

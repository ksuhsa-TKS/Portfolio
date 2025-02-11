import { Link } from 'react-router'
import './Card.css'

const Card = ({ card }) => {
  return (
    <div className='flex-main card-main'>
      <span className='flex-main card-main__block'>
        <Link className='card-main__title' to={card.link}>{card.title}</Link>
        <p className='card-main__descr'>{card.descr}</p>

        <span className='flex-main card-main__span'>
          <Link className='card-main__link' to={card.link}>Сайт</Link>
          <span>|</span>
          <a className='card-main__link' href={card.git ? card.git : '#'} target='_blank'>GitHab</a>
        </span>
      </span>

      <span className='flex-main card-main__wrap'>
        {card.img.map((img, i) => (<img className='card-main__img' src={img} alt={card.title + " " + i} key={i} />))}
      </span>
    </div>
  )
}

export default Card

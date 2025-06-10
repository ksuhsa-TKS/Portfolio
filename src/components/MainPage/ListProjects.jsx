import { Carousel } from 'antd'
import styled from 'styled-components'
import { CardProjects } from './CardProjects'

const ListProjects = ({ db }) => {
  const { projects, imageBackground } = db

  return (
    <CastomCarousel arrows effect="fade" adaptiveHeight={true} infinite={false}>
      {projects.map((el, i) => (
        <CardProjects project={el} imgBack={imageBackground[i]} key={i} />
      ))}
    </CastomCarousel>
  )
}

export default ListProjects

const CastomCarousel = styled(Carousel)`
  height: 550px;

  & .slick-arrow {
    top: 99%;
  }
  & .slick-arrow::after {
    border-inline-start-width: 3px;
    border-block-start-width: 3px;
  }
`

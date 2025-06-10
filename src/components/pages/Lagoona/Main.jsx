import styled from 'styled-components'
import { Offer } from './Main/Offer'
import { AboutUs } from './Main/AboutUs'
import { Services } from './Main/Services'
import { Benefit } from './Main/Benefit'
import { Space } from './Main/Space'
import { Booking } from './Main/Booking'
import { Contacts } from './Main/Contacts'

const Main = () => {
  return (
    <MainContainer>
      <Offer />

      <AboutUs />

      <Services />

      <Benefit />

      <Space />

      <Booking />

      <Contacts />
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin: 0 auto;
  padding: 0 15px;
  width: 1200px;
`

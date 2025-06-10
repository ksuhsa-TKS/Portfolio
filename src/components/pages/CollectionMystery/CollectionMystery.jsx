import './src/index.css'
import styled from 'styled-components'
import App from './src/App'

const CollectionMystery = () => {
  return (
    <Section id="collection">
      <Wrap>
        <App />
      </Wrap>
    </Section>
  )
}

export default CollectionMystery

const Section = styled.div`
  color: #d1ceca;
  background-color: #242424;
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
`
const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: clamp(20px, 3vw, 35px);
  margin: 0 auto;
  padding: 0 clamp(10px, 2vw, 35px);
  max-width: 1750px;
`

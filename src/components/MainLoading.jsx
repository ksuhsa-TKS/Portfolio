import styled from 'styled-components'
import Loading from '../assets/loading.svg?react'

export const MainLoading = () => {
  return (
    <WrapAnimationLoader>
      <IconAnimation />
      <DescrAnomation>Страница загружается...</DescrAnomation>
    </WrapAnimationLoader>
  )
}
const WrapAnimationLoader = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const IconAnimation = styled(Loading)`
  height: 90px;
  width: auto;
  animation: main-loading 1.5s linear infinite;
`
const DescrAnomation = styled.p`
  animation: main-loading-descr 1.5s linear infinite;
`

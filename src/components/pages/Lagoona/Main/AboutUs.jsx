import styled from 'styled-components'
import { Descr } from '../src/generic'

export const AboutUs = () => {
  return (
    <Section id="info">
      <Title>О&nbsp;нас</Title>

      <Descr>
        Идейные соображения высшего порядка, а&nbsp;также сложившаяся структура организации влечёт
        за&nbsp;собой процесс внедрения и&nbsp;модернизации системы обучения кадров, соответствует насущным
        потребностям. Идейные интересный эксперимент проверки системы обучения кадров, соответствует насущным
        потребностям. Равным образом сложившаяся структура организации требуют определения и&nbsp;уточнения
        существенных финансовых и&nbsp;административных условий.
      </Descr>
    </Section>
  )
}

const Section = styled.article`
  min-height: 190px;
  width: 888px;
`
const Title = styled.h1`
  margin: 0 auto 20px 40px;
  font-weight: 400;
  font-size: 40px;
`

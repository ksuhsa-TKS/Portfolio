import styled from 'styled-components'
import { Descr, List, Title } from '../src/generic'

export const Benefit = () => {
  return (
    <section id="benefit">
      <Title>Преимущества</Title>

      <ListBenefit>
        <Item $imgBack={1}>
          <Descr>Идейные соображения высшего порядка, а&nbsp;также постоянный количественный рост</Descr>
        </Item>

        <Item $imgBack={2}>
          <Descr>Значимость этих проблем настолько очевидна, что вопрос остаётся открытым</Descr>
        </Item>

        <Item $imgBack={3}>
          <Descr>Таким образом реализация плановых заданий играет важную роль для понимания</Descr>
        </Item>

        <Item $imgBack={4}>
          <Descr>Повседневная практика показывает, что сложившаяся структура организации</Descr>
        </Item>

        <Item $imgBack={5}>
          <Descr>Равным образом рамки и&nbsp;место обучения кадров способствует подготовки сотрудника</Descr>
        </Item>

        <Item $imgBack={6}>
          <Descr>
            Консультация с&nbsp;активом влечёт за&nbsp;собой процесс внедрения услуг нашего сервиса
          </Descr>
        </Item>

        <Item $imgBack={7}>
          <Descr>Повседневная практика показывает, что дальнейшее развитие различных</Descr>
        </Item>

        <Item $imgBack={8}>
          <Descr>Значимость этого настолько очевидна, что консультация наших экспертов помогает</Descr>
        </Item>
      </ListBenefit>
    </section>
  )
}

const ItemImgBack = {
  1: 'url(assets/lagoona/illustration-1.svg)',
  2: 'url(assets/lagoona/illustration-2.svg)',
  3: 'url(assets/lagoona/illustration-3.svg)',
  4: 'url(assets/lagoona/illustration-4.svg)',
  5: 'url(assets/lagoona/illustration-5.svg)',
  6: 'url(assets/lagoona/illustration-6.svg)',
  7: 'url(assets/lagoona/illustration-7.svg)',
  8: 'url(assets/lagoona/illustration-8.svg)',
}

const ListBenefit = styled(List)`
  gap: 22px;
`
const Item = styled.li`
  padding: 116px 42px 32px 45px;
  border-radius: 15px;
  min-height: 276px;
  width: 276px;
  background: no-repeat var(--white-color) ${({ $imgBack }) => ItemImgBack[$imgBack]} 45px 40px / 66px 66px;
`

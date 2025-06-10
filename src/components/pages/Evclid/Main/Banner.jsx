import styled from 'styled-components'
import { Btn, Chapter, Container } from '../src/generic'

export const Banner = () => {
  return (
    <ContainerBanner>
      <WrapBanner>
        <WrapContent>
          <TitleContent>Проектные решения любой сложности</TitleContent>

          <TextContent>
            Есть над чем задуматься: базовые сценарии поведения пользователей и&nbsp;по&nbsp;сей день остаются
            уделом проектантов
          </TextContent>
          <BtnContent>Заказать расчёт</BtnContent>
        </WrapContent>
      </WrapBanner>
    </ContainerBanner>
  )
}

const ContainerBanner = styled(Container)`
  position: relative;
  margin-bottom: 53px;
  min-height: 620px;

  @media (max-width: 1360px) {
    margin-bottom: 35px;
  }
  @media (max-width: 992px) {
    margin-bottom: 38px;
  }
  @media (max-width: 760px) {
    min-height: 100%;
  }
`
const WrapBanner = styled.div`
  padding: 100px 853px 100px 80px;
  border-radius: var(--radius-max);
  background: no-repeat rgba(0, 140, 200, 0.5) url('assets/evclid/banner.webp') center / cover;

  @media (max-width: 1750px) {
    padding-right: 30%;
  }
  @media (max-width: 1360px) {
    padding: 160px 77px;
    background-image: url('assets/evclid/banner-tablett.webp');
  }
  @media (max-width: 992px) {
    padding: 160px 40px;
    border-radius: var(--radius-phone);
    background-image: url('assets/evclid/banner-phone.webp');
  }
  @media (max-width: 760px) {
    padding: 60px 22px;
    text-align: center;
  }
  @media (max-width: 520px) {
    border-radius: var(--radius-min);
    background-image: url('assets/evclid/banner-phone-min.webp');
  }
`
const WrapContent = styled.div`
  width: 100%;
  min-height: 420px;

  @media (max-width: 1360px) {
    min-height: auto;
  }
`
const TitleContent = styled.h3`
  margin-bottom: 24px;
  font-size: 70px;
  font-weight: 800;
  line-height: 122%;
  letter-spacing: -0.3px;
  color: var(--color-white);

  @media (max-width: 1360px) {
    margin-bottom: 18px;
    font-size: 60px;
  }
  @media (max-width: 992px) {
    margin-bottom: 17px;
    font-size: 50px;
  }
  @media (max-width: 520px) {
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 800;
  }
`
const TextContent = styled(Chapter)`
  margin-bottom: 89px;
  line-height: 121%;
  letter-spacing: 0.05px;
  color: var(--color-white);

  @media (max-width: 1360px) {
    margin-bottom: 58px;
    font-size: 20px;
  }
  @media (max-width: 992px) {
    margin-bottom: 60px;
    font-size: 18px;
  }
  @media (max-width: 520px) {
    margin-bottom: 35px;
    font-size: 12px;
    font-weight: 700;
  }
`
const BtnContent = styled(Btn)`
  padding: 26px 38px;
  font-size: 23px;
  font-weight: 700;
  color: var(--color-white);

  @media (max-width: 520px) {
    padding: 13px 28px;
    font-size: 12px;
  }
`

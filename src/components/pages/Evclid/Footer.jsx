import styled, { css } from 'styled-components'
import { Btn, Descr, Link, List, Title } from './src/generic'
import Classmates from './src/img/icon-ok.svg?react'
import Vk from './src/img/icon-vk.svg?react'

const Footer = () => {
  return (
    <ContainerFooter>
      <WrapFooter>
        <LeftPart>
          <LinkLeftPart href="#">
            <picture>
              <source srcSet="assets/evclid/Logo-foot-phone-min.png" media="(max-width: 520px)" />
              <img src="assets/evclid/Logo-foot.png" alt="Логотип компании" />
            </picture>
          </LinkLeftPart>

          <NavLeftPart>
            <ListLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">О&nbsp;нас</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Проекты</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Отзывы</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Договор оферты</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Договор подряда</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Конфиденциальность</LinkItemLeftPart>
              </ItemLeftPart>
              <ItemLeftPart>
                <LinkItemLeftPart href="#">Партнёрское соглашение</LinkItemLeftPart>
              </ItemLeftPart>
            </ListLeftPart>

            <WrapLinkLeftPart>
              <LinkIconLeftPart aria-label="Однокласники" href="#">
                <Classmates />
              </LinkIconLeftPart>

              <LinkIconLeftPart aria-label="ВКонтакте" href="#">
                <Vk />
              </LinkIconLeftPart>
            </WrapLinkLeftPart>
          </NavLeftPart>
        </LeftPart>

        <CenterPart>
          <TetleCenterPart>Оставить заявку</TetleCenterPart>

          <Form action="#" method="post">
            <InputForm type="text" name="Name" placeholder="Фамилия, имя и&nbsp;отчество*" required />
            <InputForm type="email" name="Email" placeholder="Email*" required />
            <TextareaForm rows="4" name="Message" placeholder="Сообщение"></TextareaForm>

            <WrapBtnForm>
              <BtnForm>Отправить данные</BtnForm>

              <LableForm>
                <CheckboxForm type="checkbox" name="approval" />
                <SpanCheckboxForm className="span-checkbox">
                  Согласен на&nbsp;обработку данных
                </SpanCheckboxForm>
              </LableForm>
            </WrapBtnForm>
          </Form>
        </CenterPart>

        <RightPart>
          <DescrRightPart>
            Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством
            простого факта: разбавленное изрядной долей эмпатии, рациональное мышление позволяет оценить
            значение модели развития. Таким образом, консультация с&nbsp;широким активом обеспечивает широкому
            кругу (специалистов) участие в&nbsp;формировании стандартных подходов.
          </DescrRightPart>
        </RightPart>
      </WrapFooter>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.footer`
  margin: 0 auto;
  padding: 0 75px;
  max-width: 100%;
  background-color: var(--color-black);

  @media (max-width: 760px) {
    padding: 0 15px;
  }
`
const WrapFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 51px 0;

  @media (max-width: 1360px) {
    justify-content: space-between;
    column-gap: 128px;
  }
  @media (max-width: 992px) {
    flex-flow: column-reverse wrap;
    row-gap: 48px;
  }
  @media (max-width: 520px) {
    row-gap: 42px;
    padding: 30px 0;
  }
`
const LeftPart = styled.div`
  max-width: 255px;
  margin-right: 348px;

  @media (max-width: 1750px) {
    margin-right: 198px;
  }
  @media (max-width: 1360px) {
    margin-right: 0;
    max-width: 40%;
  }
  @media (max-width: 520px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    row-gap: 13px;
    border-top: 1px var(--color-dark-gray) solid;
    max-width: 100%;
  }
`
const LinkLeftPart = styled(Link)`
  display: block;
  margin-bottom: 24px;
  outline: none;

  @media (max-width: 992px) {
    margin-bottom: 13px;
  }
  @media (max-width: 520px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`
const NavLeftPart = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 99px;
`
const ListLeftPart = styled(List)`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 15px;

  @media (max-width: 992px) {
    display: none;
  }
`
const ItemLeftPart = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`
const LinkItemLeftPart = styled(Link)`
  position: relative;
  color: var(--color-light-gray);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.25px;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--color-yellow);
    outline-offset: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 100%;
    height: 2px;
    background-color: var(--color-yellow);
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }
  &:hover,
  &:hover::before {
    outline: none;
    transform: scaleX(1);
    color: var(--color-yellow);
  }
  &:active {
    color: var(--color-orange);
    outline: none;
  }
`
const WrapLinkLeftPart = styled.div`
  display: flex;
  column-gap: 25px;

  @media (max-width: 520px) {
    flex-wrap: wrap;
    align-self: center;
    column-gap: 16px;
  }
`
const LinkIconLeftPart = styled(Link)`
  display: block;
  fill: var(--color-gray);
  transition: all 0.3s ease-in-out;

  & svg {
    width: 60px;
    height: 60px;
  }
  &:focus-visible {
    outline: 2px solid var(--color-yellow);
    outline-offset: 5px;
  }
  &:hover {
    outline: none;
    fill: var(--color-yellow);
  }
  &:active {
    outline: none;
    fill: var(--color-orange);
  }

  @media (max-width: 520px) {
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`
const CenterPart = styled.div`
  flex-flow: column nowrap;
  row-gap: 25px;
  margin-right: 236px;
  max-width: 570px;

  @media (max-width: 1750px) {
    margin-right: 136px;
  }
  @media (max-width: 1360px) {
    margin-right: 0;
  }
`
const TetleCenterPart = styled.h3`
  ${Title}
  margin-bottom: 27px;
  letter-spacing: 0.2px;
  color: var(--color-light-gray);

  @media (max-width: 1360px) {
    margin-top: 3px;
  }
  @media (max-width: 992px) {
    margin-bottom: 26px;
  }
`
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 25px;
  max-height: 410px;
`
const FormField = css`
  padding: 14px 24px;
  border: none;
  border-radius: var(--radius-min);
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-light-gray);
  background-color: var(--color-dark-gray);

  &:focus-visible {
    outline: none;
    background-color: var(--color-gray);
  }
  &:active {
    outline: none;
    background-color: var(--color-gray);
  }
  &:active {
    outline: none;
    background-color: var(--color-gray);
  }

  @media (max-width: 992px) {
    max-width: 540px;
  }
  @media (max-width: 520px) {
    padding: 16px 19px;
  }
`
const InputForm = styled.input`
  ${FormField}
  max-width: 570px;
  max-height: 60px;
  transition: background-color 0.3s ease-in-out;
`
const TextareaForm = styled.textarea`
  ${FormField}
  max-height: 150px;
  box-sizing: border-box;
  resize: none;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 520px) {
    min-height: 149px;
  }
`
const WrapBtnForm = styled.div`
  display: flex;
  align-items: center;
  column-gap: 22px;
  margin-top: 9px;

  @media (max-width: 1360px) {
    column-gap: 24px;
  }
  @media (max-width: 520px) {
    flex-flow: column wrap;
    row-gap: 14px;
    margin-top: 0;
  }
`
const BtnForm = styled(Btn)`
  padding: 19px 52px;
  font-weight: 700;
  color: var(--color-white);

  @media (max-width: 1360px) {
    padding: 20px 36px;
  }
  @media (max-width: 520px) {
    padding: 13px 19px;
  }
`
const LableForm = styled.label`
  position: relative;
  user-select: none;
  cursor: pointer;

  @media (max-width: 520px) {
    text-align: center;
  }
`
const CheckboxForm = styled.input`
  position: absolute;
  appearance: none;

  &:focus-visible {
    position: absolute;
    top: 0;
    right: -5px;
    bottom: 0;
    left: -5px;
    outline: 2px solid var(--color-yellow);
    background-color: transparent;
  }
  &:checked + .span-checkbox::after {
    opacity: 1;
  }
`
const SpanCheckboxForm = styled.span`
  position: relative;
  padding-left: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-light-gray);

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 12px;
    height: 12px;
    border: 1px var(--color-light-gray) solid;
  }
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 0px;
    width: 13px;
    height: 13px;
    background: no-repeat url('assets/evclid/check-mark.svg') center;
    opacity: 0;
  }

  @media (max-width: 520px) {
    padding-left: 16px;
    font-size: 16px;
  }
`
const RightPart = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1360px) {
    display: none;
  }
`
const DescrRightPart = styled(Descr)`
  max-width: 363px;
  line-height: 32px;
  color: var(--color-light-gray);
`

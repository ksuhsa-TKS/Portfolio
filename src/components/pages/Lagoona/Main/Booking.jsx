import styled, { css } from 'styled-components'
import { Btn, Title } from '../src/generic'

export const Booking = () => {
  return (
    <Contain>
      <TitleBooking>Хочу тур</TitleBooking>

      <Form action="https://postman-echo.com/post" method="post">
        <Lable>
          Город вылета
          <Select name="city">
            <option defaultValue="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Москва">Москва</option>
            <option value="Нижний Новгород">Нижний Новгород</option>
          </Select>
        </Lable>

        <Lable>
          Страна
          <Select name="country">
            <option defaultValue="Австалия">Австралия</option>
            <option value="Испания">Испания</option>
          </Select>
        </Lable>

        <Lable>
          Дата прибытия
          <Input $isDate={true} type="date" name="date" />
        </Lable>

        <Lable>
          Ночей
          <Input type="number" name="night" />
        </Lable>

        <Lable>
          Туристы
          <Input type="number" name="tourists" required />
        </Lable>

        <BtnForm type="submit">Найти</BtnForm>
      </Form>
    </Contain>
  )
}

const Contain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;
  padding: 45px 45px 45px 40px;
  background-color: var(--line-color);
  border-radius: 15px;
`
const TitleBooking = styled(Title)`
  margin: 0 0 20px;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 32px 28px;
  min-height: 106px;
  width: 1080px;
  background-color: var(--white-color);
  border-radius: 15px;
`
const Lable = styled.label`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: space-around;
  gap: 15px;
  font-weight: 400;
  font-size: 12px;
`
const FormField = css`
  margin: 0;
  min-height: 16px;
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  color: #000;
  background-color: inherit;
  cursor: pointer;

  &:focus-visible {
    border-radius: 2%;
    outline: 1px var(--border-color) solid;
    color: #000;
    outline-offset: 9px;
  }
`
const Select = styled.select`
  ${FormField}
  width: 170px;
`
const Input = styled.input`
  ${FormField}
  width: 120px;
  border-bottom: 1px solid var(--line-color);

  ${({ $isDate }) =>
    $isDate &&
    css`
      border: none;
      outline: none;
    `}
`
const BtnForm = styled(Btn)`
  padding: 13px 30px;
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
`

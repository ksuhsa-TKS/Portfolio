import styled, { css } from 'styled-components'
import { AnimationElement, AnimationFormWrap, Btn, Title } from '../src/generic'
import { observer } from 'mobx-react'
import Close from '../src/img/close-big.svg?react'
import FormContacts from './FormContacts'
import Window from '../storage/Window'
import Storage from '../storage/Storage'

const Form = () => {
  const title = Window.titleForm
  const btn = Window.btnForm

  const activateClose = (el = false) => {
    if (!el) {
      return Window.updateWindowForm()
    }
    if (el === 'Удалить клиента') {
      return Storage.deleteClient(Window.client.id), Window.updateWindowForm()
    }
    if (el.target.tagName === 'ARTICLE') {
      return Window.updateWindowForm()
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    Window.editLoading('form', true)

    Window.checkData()
    if (Window.listError.length !== 0) {
      return Window.editLoading('form', false)
    }

    title === 'Новый клиент' ? Window.updateData('create') : Window.updateData('edit')
  }

  const errorElements = () => {
    return Window.listError.map((el, i) => {
      if (typeof el === 'string') {
        return Window.getErrors(el, i)
      }
      if (typeof el === 'number') {
        return Window.contactsClient.map((e) => e.id === el && Window.getErrors(e.contact.type, i))
      }
    })
  }

  return (
    <WrapWindow
      onClick={(el) => {
        activateClose(el)
      }}>
      <FormWrap
        id="modal"
        onSubmit={(e) => {
          onSubmit(e)
        }}>
        {Window.loadingForm && (
          <AnimationFormWrap>
            <AnimationElement></AnimationElement>
          </AnimationFormWrap>
        )}

        <WrapTitle>
          <TitleForm>{title}</TitleForm>

          {Window.client.id && <IdForm>ID: {Window.client.id}</IdForm>}
        </WrapTitle>

        <WrapFieldForm>
          <Lable>
            <Input
              $isError={Window.listError.includes('Surname')}
              type="text"
              name="Surname"
              defaultValue={Window.client.surname && Window.client.surname}
              placeholder=""
              onChange={(el) => {
                Window.checkDataClient('Surname', el.target.value), Window.checkData('Surname')
              }}
            />

            <DescrInput>
              Фамилия<span>*</span>
            </DescrInput>
          </Lable>

          <Lable>
            <Input
              $isError={Window.listError.includes('Name')}
              type="text"
              name="Name"
              defaultValue={Window.client.name && Window.client.name}
              placeholder=""
              onChange={(el) => {
                Window.checkDataClient('Name', el.target.value), Window.checkData('Name')
              }}
            />

            <DescrInput>
              Имя<span>*</span>
            </DescrInput>
          </Lable>

          <Lable>
            <Input
              $isError={Window.listError.includes('LastName')}
              type="text"
              name="LastName"
              defaultValue={Window.client.lastName && Window.client.lastName}
              placeholder=""
              onChange={(el) => {
                Window.checkDataClient('LastName', el.target.value), Window.checkData('LastName')
              }}
            />

            <DescrInput>Отчество</DescrInput>
          </Lable>
        </WrapFieldForm>

        <FormContacts />

        <WrapErrorElement $isError={Window.listError.length > 0}>
          {Window.listError.length > 0 && errorElements()}
        </WrapErrorElement>

        <BtnForm $valueElement="save" type="submit">
          Сохранить
        </BtnForm>

        <BtnForm
          $valueElement="close"
          type="button"
          onClick={() => {
            btn === 'Удалить клиента' ? activateClose('Удалить клиента') : activateClose()
          }}>
          {btn}
        </BtnForm>

        <BtnForm
          $valueElement="close-icon"
          type="button"
          onClick={() => {
            activateClose()
          }}>
          <Close />
        </BtnForm>
      </FormWrap>
    </WrapWindow>
  )
}

export default observer(Form)

const WrapWindow = styled.article`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--black-opacity);
  animation: crm-open-window-fon 0.25s linear;
`
const FormWrap = styled.form`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 24px 30px;
  max-width: 450px;
  background-color: var(--white);
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.15);
  animation: crm-open-window 0.25s linear;

  @media (max-width: 577px) {
    padding: 24px 15px;
    max-width: 300px;
  }
`
const Wrap = css`
  display: flex;
  flex-flow: row wrap;
  gap: 9px;
  align-items: flex-end;
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  border: none;
`
const WrapTitle = styled.div`
  ${Wrap}
`
const TitleForm = styled.h2`
  ${Title}
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 139%;
`
const IdForm = styled.span`
  padding-bottom: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  color: var(--txt-grey);
`
const WrapFieldForm = styled.fieldset`
  ${Wrap}
  gap: 31px;
  margin-bottom: 25px;
`
const Lable = styled.label`
  position: relative;
  width: 100%;

  & input:not(:placeholder-shown) ~ span,
  & input:focus ~ span {
    transform: translateY(-14px);
    font-size: 10px;
  }
`
const Input = styled.input`
  padding: 2px 2px 4px 0;
  border: none;
  border-bottom: 1px solid var(--grey-lilac);
  outline: none;
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 135%;
  color: var(--black);

  &::placeholder {
    color: var(--txt-grey);
  }

  ${({ $isError }) =>
    $isError &&
    css`
      border-bottom: 1px solid var(--red);
      color: var(--red);
    `}
`
const DescrInput = styled.span`
  position: absolute;
  left: 0;
  padding-bottom: 2px;
  color: var(--txt-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 133%;
  cursor: text;
  transform: translateY(3px);
  transition: all 0.2s ease-in-out;

  & span {
    color: var(--firm);
  }
`
const WrapErrorElement = styled.div`
  ${Wrap}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 13px 0;

  ${({ $isError }) =>
    $isError &&
    css`
      margin: 8px 0 9px;
    `}
`
const BtnForm = styled(Btn)`
  gap: 5px;
  align-items: center;
  align-self: center;

  ${({ $valueElement }) => {
    switch ($valueElement) {
      case 'save':
        return css`
          margin-bottom: 6px;
          padding: 13px 35px;
          outline: 2px solid var(--firm);
          outline-offset: -2px;
          font-weight: 600;
          color: var(--white);
          background-color: var(--firm);
          transition: all 0.2s ease-in-out;

          &:focus-visible {
            outline: 2px solid var(--firm);
            color: var(--firm);
            background-color: var(--white);
          }
          &:hover {
            outline: 2px solid var(--firm-lighter);
            color: var(--white);
            background-color: var(--firm-lighter);
          }
          &:active {
            outline: 2px solid var(--firm-darker);
            color: var(--white);
            background-color: var(--firm-darker);
          }
        `
      case 'close':
        return css`
          border-bottom: 1px solid var(--black);
          font-size: 12px;
          line-height: 100%;
          transition: all 0.2s ease-in-out;

          &:focus-visible {
            border-bottom: 1px solid var(--firm-lighter);
          }
          &:hover {
            border-bottom: 1px solid var(--firm);
          }
          &:active {
            border-bottom: 1px solid var(--firm-darker);
          }
        `
      case 'close-icon':
        return css`
          position: absolute;
          top: 15px;
          right: 15px;

          &:focus-visible svg {
            outline: 2px solid var(--black-transparent);
          }
          &:hover svg {
            opacity: 0.8;
          }
          &:active svg {
            opacity: 1;
          }
        `
    }
  }}
`

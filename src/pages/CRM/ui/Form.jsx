import { observer } from 'mobx-react';
import Close from '../img/close-big.svg?react'
import FormContacts from './FormContacts'
import Window from '../storage/Window'
import Storage from '../storage/Storage';

const Form = () => {
  const title = Window.titleForm;
  const btn = Window.btnForm;

  const activateClose = (el = false) => {
    if (!el) { return Window.updateWindowForm() };
    if (el === 'Удалить клиента') { return Storage.deleteClient(Window.client.id), Window.updateWindowForm() }
    if (el.target.tagName === 'ARTICLE') { return Window.updateWindowForm() };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Window.editLoading('form', true);

    Window.checkData(); if (Window.listError.length !== 0) { return Window.editLoading('form', false) };

    title === 'Новый клиент' ? Window.updateData('create') : Window.updateData('edit');
  }

  const errorElements = () => {
    return Window.listError.map((el, i) => {
      if (typeof el === 'string') { return Window.getErrors(el, i) };
      if (typeof el === 'number') { return Window.contactsClient.map(e => e.id === el && Window.getErrors(e.contact.type, i)) };
    })
  }

  return (
    <article className="crm-window" onClick={(el) => { activateClose(el) }} >
      <form className="crm-window__wrap crm-modal__form" id='modal' onSubmit={(e) => { onSubmit(e) }}>

        {Window.loadingForm && <div className='crm-anima-wrap crm-anima-wrap-form'><span className='crm-anima-element'></span></div>}

        <div className="crm-modal__wrap">
          <h2 className="crm-title crm-modal__title">{title}</h2>

          {Window.client.id && <span className='crm-modal__span'>ID: {Window.client.id}</span>}
        </div>

        <fieldset className="crm-modal__wrap crm-modal__wrap--fullName">
          <label className="crm-modal__label">
            <input className={`crm-input crm-modal__input ${Window.listError.includes('Surname') ? 'crm-input__bug' : ''}`}
              type='text' name='Surname' defaultValue={Window.client.surname && Window.client.surname} placeholder=''
              onChange={(el) => { Window.checkDataClient('Surname', el.target.value), Window.checkData('Surname') }} />

            <span className="crm-modal__span crm-modal__span--fio">
              Фамилия<span className="crm-star">*</span>
            </span>
          </label>

          <label className="crm-modal__label">
            <input className={`crm-input crm-modal__input ${Window.listError.includes('Name') ? 'crm-input__bug' : ''}`}
              type='text' name='Name' defaultValue={Window.client.name && Window.client.name} placeholder=''
              onChange={(el) => { Window.checkDataClient('Name', el.target.value), Window.checkData('Name') }} />

            <span className="crm-modal__span crm-modal__span--fio">
              Имя<span className="crm-star">*</span>
            </span>
          </label>

          <label className="crm-modal__label">
            <input className={`crm-input crm-modal__input ${Window.listError.includes('LastName') ? 'crm-input__bug' : ''}`}
              type='text' name='LastName' defaultValue={Window.client.lastName && Window.client.lastName} placeholder=''
              onChange={(el) => { Window.checkDataClient('LastName', el.target.value), Window.checkData('LastName') }} />

            <span className="crm-modal__span crm-modal__span--fio">Отчество</span>
          </label>
        </fieldset>

        <FormContacts />

        <div className={`crm-modal__wrap crm-modal__bug ${Window.listError.length > 0 ? 'crm-modal__bug--contain' : ''}`}>
          {Window.listError.length > 0 && errorElements()}
        </div>

        <button className="crm-btn crm-window__edit crm-modal__btn crm-modal__btn--save" type='submit'>Сохранить</button>

        <button className="crm-btn crm-window__cancel crm-modal__btn crm-modal__btn--close" type='button'
          onClick={() => { btn === 'Удалить клиента' ? activateClose('Удалить клиента') : activateClose() }}>{btn}</button>

        <button className="crm-btn crm-window__close crm-modal__close" type='button'
          onClick={() => { activateClose() }}><Close /></button>
      </form>
    </article >
  )
}

export default observer(Form)

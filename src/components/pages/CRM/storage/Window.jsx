import { action, makeObservable, observable } from 'mobx'
import Storage from './Storage'
import { getFullName } from '../utils/getFullName'
import { editName } from '../utils/editName'
import styled from 'styled-components'

class Window {
  windowDelete = false
  windowForm = false
  titleForm = ''
  btnForm = ''
  clientId = null
  client = {
    surname: '',
    name: '',
    lastName: '',
    contacts: [],
  }
  contactsClient = []
  listError = []
  data
  loadingTable = false
  loadingForm = false

  constructor() {
    makeObservable(this, {
      windowDelete: observable,
      windowForm: observable,
      titleForm: observable,
      btnForm: observable,
      clientId: observable,
      client: observable,
      contactsClient: observable,
      listError: observable,
      data: observable,
      loadingTable: observable,
      loadingForm: observable,

      editLoading: action.bound,
      updateWindowForm: action.bound,
      updateWindowDelete: action.bound,
      updateContactsClient: action.bound,
      deleteContactClient: action.bound,
      updatePickContact: action.bound,
      updateValueContact: action.bound,
      checkData: action.bound,
      checkDataClient: action.bound,
      getErrors: action.bound,
      updateData: action.bound,
      checkLocation: action.bound,
    })
  }

  editLoading = (name, value) => {
    if (name === 'table') {
      return (this.loadingTable = value)
    }
    if (name === 'form') {
      return (this.loadingForm = value)
    }
  }

  checkLocation = () => {
    if (window.location.hash !== '') {
      const id = window.location.hash.slice(1)
      this.updateWindowForm('Изменить', id)
      this.windowForm = true
    }
  }

  updateWindowForm = (value = null, id = null) => {
    if (value === null) {
      return (this.windowForm = !this.windowForm)
    }

    if (value === 'Изменить') {
      this.editLoading('form', true)
      this.listError = []
      this.contactsClient = []
      this.titleForm = 'Изменить данные'
      this.btnForm = 'Удалить клиента'
      this.client = Storage.searchClientId(id)
      this.contactsClient = this.client.contacts.map((el, i) => {
        return { id: Date.now() + i, contact: el }
      })
      this.windowForm = !this.windowForm
      this.editLoading('form', false)
    }

    if (value === 'Создать') {
      this.editLoading('form', true)
      this.listError = []
      this.contactsClient = []
      this.titleForm = 'Новый клиент'
      this.btnForm = 'Отмена'
      this.client = {
        surname: '',
        name: '',
        lastName: '',
        contacts: [],
      }
      this.windowForm = !this.windowForm
      this.editLoading('form', false)
    }
  }

  updateWindowDelete = (id = null) => {
    id === null
      ? ((this.clientId = null), (this.windowDelete = !this.windowDelete))
      : ((this.clientId = id), (this.windowDelete = !this.windowDelete))
  }

  updateContactsClient = (value) => {
    this.contactsClient.push(value)
  }

  deleteContactClient = (id) => {
    const i = this.contactsClient.findIndex((el) => el.id === id)
    this.contactsClient.splice(i, 1)
    this.listError = this.listError.filter((el) => el !== id)
  }

  updatePickContact = (id, value) => {
    this.contactsClient.map((el) => {
      if (el.id === id) {
        el.contact.type = value
        el.contact.type === 'Телефон' && (el.contact.value = isNaN(el.contact.value) && false)
      }
    })
  }

  updateValueContact = (id, value) => {
    this.contactsClient.map((el) => {
      if (el.id === id) {
        if (el.contact.type === 'Телефон') {
          el.contact.value = value.trim() !== '' && !isNaN(value.trim()) ? value : false
        } else {
          el.contact.value = value.trim() !== '' && isNaN(value.trim()) ? value : false
        }
      }
    })
  }

  checkDataClient = (name, value) => {
    switch (name) {
      case 'Surname':
        return (this.client.surname = value.trim() !== '' && isNaN(value.trim()) ? value : '')
      case 'Name':
        return (this.client.name = value.trim() !== '' && isNaN(value.trim()) ? value : '')
      case 'LastName':
        if (value.trim() !== '') {
          return (this.client.lastName = isNaN(value.trim()) ? value : false)
        } else {
          return (this.client.lastName = '')
        }
    }
  }

  checkData = (element = null) => {
    if (element === 'Surname') {
      this.client.surname !== '' && (this.listError = this.listError.filter((el) => el !== 'Surname'))
    }
    if (element === 'Name') {
      this.client.name !== '' && (this.listError = this.listError.filter((el) => el !== 'Name'))
    }
    if (element === 'LastName') {
      this.client.lastName === '' && (this.listError = this.listError.filter((el) => el !== 'LastName'))
    }
    if (typeof element === 'number') {
      const i = this.contactsClient.findIndex((el) => el.id === element)
      this.contactsClient[i].contact.value !== '' &&
        this.contactsClient[i].contact.value !== false &&
        (this.listError = this.listError.filter((el) => el !== element))
    }

    if (element === null) {
      this.client.surname === '' && !this.listError.includes('Surname') && this.listError.push('Surname')

      this.client.name === '' && !this.listError.includes('Name') && this.listError.push('Name')

      this.client.lastName === false &&
        !this.listError.includes('LastName') &&
        this.listError.push('LastName')

      this.contactsClient.map((el) => {
        ;(el.contact.value === '' || el.contact.value === false) &&
          !this.listError.includes(el.id) &&
          this.listError.push(el.id)
      })
    }
  }

  getErrors = (value, i) => {
    switch (value) {
      case 'Surname':
        return <DescrError key={i}>Введи корректную Фамилию</DescrError>

      case 'Name':
        return <DescrError key={i}>Введи корректное Имя</DescrError>

      case 'LastName':
        return <DescrError key={i}>Введи корректное Отчество</DescrError>

      case 'Телефон':
        return <DescrError key={i}>Введи корректный номер Телефона</DescrError>

      case 'Email':
        return <DescrError key={i}>Введи корректный Email</DescrError>

      case 'Facebook':
        return <DescrError key={i}>Введи корректное id Facebook</DescrError>

      case 'Vk':
        return <DescrError key={i}>Введи корректное id Vk</DescrError>

      case 'Другое':
        return <DescrError key={i}>Введи корректные данные</DescrError>
    }
  }

  updateData = (value) => {
    const contacts = this.contactsClient.map((el) => el.contact)

    this.client.surname = editName(this.client.surname)
    this.client.name = editName(this.client.name)
    this.client.lastName !== '' && (this.client.lastName = editName(this.client.lastName))
    const fullName = getFullName(this.client)

    this.client.contacts = contacts
    this.client.fullName = fullName

    this.windowForm = !this.windowForm
    this.editLoading('form', false)

    if (value === 'create') {
      return Storage.createClient(this.client)
    }
    if (value === 'edit') {
      return Storage.editClient(this.client)
    }
  }
}

export default new Window()

const DescrError = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 140%;
  color: var(--red);
`

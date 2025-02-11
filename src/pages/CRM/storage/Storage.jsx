import { action, makeObservable, observable } from 'mobx';
import db from '../db.json'

class Storage {
  clientsList = [];
  copyClientsList = null;
  elementSort = 'id';
  prevElement = '';
  directionSort = true;

  constructor() {
    makeObservable(this, {
      clientsList: observable,
      copyClientsList: observable,
      elementSort: observable,
      directionSort: observable,

      requestClients: action.bound,
      getClients: action.bound,
      createClient: action.bound,
      searchClientId: action.bound,
      editClient: action.bound,
      deleteClient: action.bound,
      searchClients: action.bound,
      updateSort: action.bound,
      sortClients: action.bound,
    })
  }

  saveClients = (element) => {
    localStorage.setItem('clients', JSON.stringify(element));
    this.clientsList = element;
  };

  requestClients = () => {
    let list = localStorage.getItem('clients');

    if (typeof list === 'string' && list.length === 2 || !list) {
      this.saveClients(db);
      this.requestClients();
    } else {
      list = JSON.parse(list);
      this.clientsList = list;
      return this.copyClientsList = this.clientsList
    };
  };

  getClients = () => {
    return this.copyClientsList = this.copyClientsList === null ? this.clientsList : this.copyClientsList;
  };

  createClient = (data) => {
    const client = data;
    client.id = String(Date.now());
    client.updatedAt = new Date();
    client.createdAt = new Date();

    this.clientsList.push(client);
    this.saveClients(this.clientsList);
  };

  editClient = (data) => {
    const client = data;
    client.id = String(Date.now());
    client.updatedAt = new Date();

    const i = this.clientsList.findIndex(el => el.id === data.id);
    this.clientsList.splice(i, 1, client);
    this.saveClients(this.clientsList);
  };

  searchClientId = (id) => {
    let client = this.clientsList;
    return client = client.find((el) => { return el.id === id });
  };

  deleteClient = (id) => {
    location.hash = ''

    let i = this.clientsList.findIndex(el => el.id === id);

    this.clientsList.splice(i, 1);
    this.saveClients(this.clientsList);
  };

  searchClients = (search) => {
    return this.copyClientsList = this.clientsList.filter((el) => {
      return el.fullName.toLowerCase().includes(search.toLowerCase().trim())
    });
  };

  updateSort = (value) => {
    this.elementSort === value ? (this.directionSort = !this.directionSort) :
      (this.elementSort = value, this.directionSort = true)
  }

  sortClients = () => {
    this.copyClientsList = this.clientsList

    if (this.directionSort) {
      return this.copyClientsList = this.copyClientsList.sort((a, b) => {
        return a[this.elementSort] < b[this.elementSort] ? 1 : a[this.elementSort] > b[this.elementSort] ? -1 : 0
      })
    }

    if (!this.directionSort) {
      return this.copyClientsList = this.copyClientsList.sort((a, b) => {
        return a[this.elementSort] < b[this.elementSort] ? -1 : a[this.elementSort] > b[this.elementSort] ? 1 : 0
      })
    }
  }
}

export default new Storage()

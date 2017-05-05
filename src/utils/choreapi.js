import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

class ChoreApi {
  constructor() {
    this.path = '/chores';
  }

  async getChores() {
    console.log('Inside chore api utils');
    try {
      const { data } = await axios.get(`${this.path}`);
      return data;
    } catch (e) {
      return e;
    }
  }

  async getChoreById(args) {
    console.log('Inside chore api utils');
    try {
      const { data } = await axios.get(`${this.path}/${args}`);
      return data;
    } catch (e) {
      return e;
    }
  }

}

export const Chore = new ChoreApi();

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

class UserApi {
  constructor() {
    this.path = '/user';
  }

  async login(args) {
    console.log("Inside api utils");
    try {
      const { data } = await axios.post(`${this.path}/login`, args);
      return data;
    } catch (e) {
      return e;
    }
  }

  async signup(args) {
    try {
      const { data } = await axios.post(`${this.path}/signup`, args);

      return data;
    } catch (e) {
      return e;
    }
  }
}

export const User = new UserApi();

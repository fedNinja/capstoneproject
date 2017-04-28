import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

class ChildApi {
  constructor() {
    this.path = '/kids';
  }

  async getChildren(args) {
    console.log("Inside child api utils");
    console.log(args);
    try {
      const { data } = await axios.get(`${this.path}/${args}`);
      return data;
    } catch (e) {
      return e;
    }
  }

/* newly added function */
  async addChild(args) {
    console.log("Inside child api utils");
    console.log(args);
    try {
      const { data } = await axios.post(`${this.path}`, args);
      return data;
    } catch (e) {
      return e;
    }
  }

}

export const Child = new ChildApi();

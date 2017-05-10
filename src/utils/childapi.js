import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

class ChildApi {
  constructor() {
    this.path = '/kids';
  }

  async getChildren(args) {
    console.log('Inside child api utils');
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
    console.log('Inside child api utils');
    console.log(args);
    try {
      const { data } = await axios.post(`${this.path}`, args);
      return data;
    } catch (e) {
      return e;
    }
  }

  async getAssignedChores(args) {
    console.log('Inside get chores api utils');
    console.log(args);
    const path = '/child';
    try {
      const { data } = await axios.get(`${path}/${args}`);
      return data;
    } catch (e) {
      return e;
    }
  }

  async completeChoresRequest(args) {
    console.log('Inside complete chore utils');
    console.log(args);
    try {
      const { data } = await axios.put('/chorestoapprove', args);
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteAssignedChore(args) {
    console.log('Inside chore api utils');
    try {
      const id = args.childId;
      const choreId = args.choreId;
      const { data } = await axios.delete(`/deleteChore/${id}/${choreId}`);
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteChoreforApproval(args) {
    console.log('Inside delete chore for approval');
    try {
      const id = args.childId;
      const choreId = args.choreId;
      const { data } = await axios.delete(`/deleteChoreForApproval/${id}/${choreId}`);
      return data;
    } catch (e) {
      return e;
    }
  }

  async getChoresForApproval(args) {
    console.log('Getting chores for approval');
    try {
      const { data } = await axios.get(`/getChoresForApproval/${args}`);
      return data;
    } catch (e) {
      return e;
    }
  }

  async updateAllowance(args) {
    console.log('Updating the allowance of a child');
    try {
      const { data } = await axios.put('/updateAllowance', args);
      return data;
    } catch (e) {
      return e;
    }
  }

}


export const Child = new ChildApi();

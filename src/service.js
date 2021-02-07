import axios from 'axios';

export default {
  fetchUserData(userName) {
    return axios.get(`https://api.github.com/users/${userName}`);
  },
};
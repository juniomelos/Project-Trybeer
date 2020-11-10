import axios from 'axios';

class UserService {
  // constructor({ url = 'http://localhost:3000/login', timeout = 30000 }) {
  constructor({
    url = 'https://my-json-server.typicode.com/pedrotpo/trybeer-mockapi/users ',
    timeout = 30000,
  }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async user(email, password) {
    const params = {
      email,
      password,
    };

    return this.http.get('/', { params });
  }
}

export default UserService;

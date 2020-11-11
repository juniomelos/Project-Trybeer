import axios from 'axios';

class UserService {
  constructor() {
    const url =
      'https://my-json-server.typicode.com/pedrotpo/trybeer-mockapi/users';
    const timeout = 30000;

    this.http = axios.create({
      baseURL: url,
      timeout,
    });

    // Define os handlers para tratamento de erro e sucesso
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess = (response) => {
    console.log(response);
    return response;
  };

  handleError = (error) => {
    switch (error.response.status) {
      case 500:
        throw new {
          error: { message: 'User not found or wrong password', code: 500 },
        }();
        break;

      default:
        break;
    }
  };

  async userLogin(email, password) {
    const body = {
      email,
      password,
    };

    // Trocar para post - login seguro
    return this.http.post('/', { body });
  }
}

export default new UserService();

import axios from 'axios';

class UserService {
  constructor() {
    const url =
      'http://localhost:3001/login';
    const timeout = 30000;

    this.http = axios.create({
      baseURL: url,
      timeout,
    });

    // Define os handlers para tratamento de erro e sucesso
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess = (response) => {
    return response;
  };

  handleError = (error) => {
    let errorMsg;

    switch (error.response.status) {
      case 500:
        errorMsg = {
          error: { message: 'User not found or wrong password', code: 500 },
        };
        break;

      default:
        break;
    }

    throw new errorMsg();
  };

  async userLogin(email, password) {
    const body = {
      email,
      password,
    };

    // Trocar para post - login seguro
    return this.http.post('/', { email, password });
  }
}

export default new UserService();

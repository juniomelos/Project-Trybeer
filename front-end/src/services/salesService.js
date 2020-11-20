import axios from 'axios';

class UserService {
  constructor() {
    const url = 'http://localhost:3001';
    const timeout = 30000;

    this.http = axios.create({
      baseURL: url,
      timeout,
    });

    // Define os handlers para tratamento de erro e sucesso
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    let errorMsg;
    switch (error.response.status) {
      case 500:
        errorMsg = {
          error: { message: 'Error getting sales details.', code: 500 },
        };
        break;

      default:
        break;
    }

    throw errorMsg;
  };

  /** Get sales */
  getSales = async () => this.http.get('/sales');
}
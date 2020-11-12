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

  /** User login */
  userLogin = async (body) => this.http.post('/login', body);

  /** User signup */
  userSignup = async (userData) => {
    const { email, name, password, admin } = userData;

    const body = {
      email,
      name,
      password,
      role: admin ? 'admin' : 'user',
    };

    return this.http.post('/signup', body)
  }

  async userNameUpdate(email, name) {
    console.log('inside trybeerAPI userNameUpdate');
    const body = {
      email,
      name,
    };

    return this.http.put('/', { body });
  }
}

export default new UserService();

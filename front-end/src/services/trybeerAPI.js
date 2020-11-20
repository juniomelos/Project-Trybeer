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
    console.log('inside handleSuccess', response);
       return response;
  }

  handleError = (error) => {
    console.log('inside handleError', error, error.response);
    let errorMsg;
    switch (error.response.status) {
      case 500:
        errorMsg = {
          error: { message: 'E-mail already in database.', code: 500 },
        };
        break;
      default:
        errorMsg = {
          error: {
            message: error.response.statusText,
            code: error.response.status,
          },
        };

        break;
    }

    throw errorMsg;
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
      role: admin ? 'administrator' : 'client',
    };

    return this.http.post('/register', body);
  };
  /** User Name Update */

  async userNameUpdate(email, name) {
    console.log('inside trybeerAPI userNameUpdate');
    const body = {
      email,
      name,
    };

    return this.http.put('/', { body });
  }

  /** Get all products */
  getProducts = async () => this.http.get('/products');

  /** Post one order */
  postOrder = async (payload, token) => {
    return this.http.post(
      '/sales',

      {
        ...payload,
      },
      {
        headers: {
          Authorization: token,
        },
      },
      {
        body: {},
      },
    );
  };
}

export default new UserService();

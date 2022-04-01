import api from './api';

export const createUser = (params) => api.post(
  'api/users/register',
  params,
).then((response) => response).catch((err) => {
  console.log(err.response.data);
  console.log(err.response.status);
  console.log(err.response.headers);
});

export const login = (credentials) => api.post(
  'api/login',
  credentials,
).then((response) => response).catch((err) => {
  console.log(err.response.data);
  console.log(err.response.status);
  console.log(err.response.headers);
});

export const getUser = (token) => api.get(
  'api/users/me',
  {
    headers: {
      'auth-token': token,
    },
  },
).then((response) => response).catch((err) => {
  console.log(err.response.data);
  console.log(err.response.status);
  console.log(err.response.headers);
});

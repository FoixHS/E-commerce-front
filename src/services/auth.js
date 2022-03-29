import api from './api';

const createUser = (params) => api.post(
  'api/users/register',
  params,
).then((response) => response).catch((err) => {
  console.log(err.response.data);
  console.log(err.response.status);
  console.log(err.response.headers);
});

export default createUser;

import { toast } from 'react-toastify';
import api from './api';
import 'react-toastify/dist/ReactToastify.css';

export const createUser = (params) => api.post(
  'api/users/register',
  params,
).then((response) => response).catch(() => {
  const message = 'Algo salió mal 😱';
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
});

export const login = (credentials) => api.post(
  'api/login',
  credentials,
).then((response) => response).catch(() => {
  const message = 'Algo salió mal 😱';
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
});

export const getUser = (token) => api.get(
  'api/users/me',
  {
    headers: {
      'auth-token': token,
    },
  },
).then((response) => response).catch(() => {
  const message = 'Algo salió mal 😱';
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
});

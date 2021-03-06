import { toast } from 'react-toastify';
import api from './api';
import 'react-toastify/dist/ReactToastify.css';

export const getProducts = (params) => api.get(
  '/api/products',
  { params },
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

export const getProductDetail = (id) => api.get(`/api/products/${id}`).then((response) => response).catch(() => {
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

export const editProduct = (id, params, token) => api.put(
  `/api/products/${id}`,
  params,
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

export const createProduct = (params, token) => api.post(
  '/api/products',
  params,
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

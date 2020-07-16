import axios from 'axios';
import qs from 'qs';

const authenticityToken = () => {
  const token = document.querySelector('meta[name="csrf-token"]');
  return token ? token.content : null;
};

const headers = () => {
  return {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'X-CSRF-Token': authenticityToken(),
    'X-Requested-With': 'XMLHttpRequest',
  };
};

axios.defaults.headers.get = headers();
axios.defaults.headers.post = headers();
axios.defaults.headers.delete = headers();
axios.defaults.headers.put = headers();
axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    // location.replace(AppRoutes.signInPath());
    // Do something
  }

  if (error.response.status === 422) {
    // Do something
  }

  if (error.response.status === 500) {
    return Promise.reject(new Error('Something went wrong, please retry again'));
  }

  return Promise.reject(error);
});

export const useSafePeriodicFetch = (func, interval) => {
  const fetchFunc = () => {
    func().catch(() => {});
  };
  return setInterval(fetchFunc, interval);
};

export default {
  get(url, params = {}) {
    return axios
      .get(url, {
        params,
        paramsSerializer: (parameters) => qs.stringify(parameters, { encode: false, arrayFormat: 'brackets' }),
      });
  },
};

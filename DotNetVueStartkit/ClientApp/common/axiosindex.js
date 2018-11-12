import Axios from 'axios';
import store from '../store';

const http = Axios.create({
  // for cors
  withCredentials: true,
});
http.interceptors.response.use((response) => {
  const res = response;
  return res;
}, (error) => {
  // 認証エラー時の処理
  if (error.response.status === 401) {
    store.dispatch('notification/setMessage', { message: error.response.status, messageState: false });
  // システムエラー時の処理
  } else if (error.response.status === 500) {
    store.dispatch('notification/setMessage', { message: error.response.status, messageState: false });
  }
  return Promise.reject(error);
});

export default http;

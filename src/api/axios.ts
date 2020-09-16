import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/cookies'

let axiosInstance: any;

const initialHeader: any = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

export function setUpAxios() {
  axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
  })

  axiosInstance.interceptors.response.use(
    (response: any) => response.data,
    (error: any) => {
      if (error.response && error.response.data.status === 401 && error.response.data.name === "TOKEN_EXPIRED") {
        store.dispatch('auth/forceLogout')
      }
      return Promise.reject(error);
    }
    // if (status === 498) {
    //   if (!isRefreshing) {
    //     isRefreshing = true;
    //     refreshAccessToken()
    //       .then(newToken => {
    //         isRefreshing = false;
    //         onRrefreshed(newToken);
    //       });
    //   }

    //   const retryOrigReq = new Promise((resolve, reject) => {
    //     subscribeTokenRefresh(token => {
    //       // replace the expired token and retry
    //       originalRequest.headers['Authorization'] = 'Bearer ' + token;
    //       resolve(axios(originalRequest));
    //     });
    //   });
    //   return retryOrigReq;
    // } else {
    //   return Promise.reject(error);
    // }
  )
}

export default function Axios(config: any) {
  const headers = {
    ...initialHeader,
  }
  const token = getToken();
  headers.Authorization = `${token}`
  const header = {
    ...config,
    headers
  }
  return axiosInstance.request(header);
}
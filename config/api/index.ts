import axios, {AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: CallAPIProps) {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCoockies = Cookies.get('token');

    if (tokenCoockies) {
      const jwtToken = atob(tokenCoockies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    method,
    data,
    url,
    headers,
  }).catch((err) => err.response);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const {length} = Object.keys(response.data);
  const res = {
    error: false,
    message: 'Success',
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}

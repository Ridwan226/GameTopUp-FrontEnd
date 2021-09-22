import callAPI from '../config/api';
import {LoginTypes} from './datatypes';
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const setSignUp = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  // const response = await axios
  //   .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);

  // const axiosResponse = response.data;
  // if (axiosResponse.error === 1) {
  //   return axiosResponse;
  // }
  // return axiosResponse.data;

  return callAPI({url, method: 'POST', data});
};

export const setLogIn = async (data: LoginTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  // const response = await axios
  //   .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);
  // console.log('data Response', response);
  // if (response.status > 300) {
  //   const res = {
  //     error: true,
  //     message: response.data.message,
  //     data: null,
  //   };
  //   return res;
  // }
  // const res = {
  //   error: false,
  //   message: 'Success',
  //   data: response.data.data,
  // };

  return callAPI({url, method: 'POST', data});
};

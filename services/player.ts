import axios from 'axios';
import callAPI from '../config/api';
import {CheckoutTypes} from './datatypes';
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeatureGame = async () => {
  const URL = 'players/landingpage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const getDetailVoucher = async (id: string) => {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const getGameCategory = async () => {
  const URL = 'players/category';
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export async function setCheckOut(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callAPI({url, method: 'POST', data, token: true});
}

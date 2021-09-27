const ROOT_API = process.env.NEXT_PUBLIC_API;
import callAPI from '../config/api';
const API_VERSION = 'api/v1';

export async function getMemberTransaction(valueParams) {
  let params = '';

  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

  return callAPI({url, method: 'GET', token: true});
}

export async function setMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({url, method: 'GET', token: true});
}

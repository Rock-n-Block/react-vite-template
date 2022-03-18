import { URL } from 'appConstants';
import { LoginReq } from 'types';

import ajax from './ajax';

export const baseApi = {
  metamaskLogin(data: LoginReq) {
    return ajax({
      method: 'post',
      url: URL.metamaskLogin,
      data,
    });
  },
  getSelfInfo() {
    return ajax({
      method: 'get',
      url: URL.getSelfInfo,
    });
  },
};

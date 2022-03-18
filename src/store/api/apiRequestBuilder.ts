import { URL } from 'appConstants';
import { LoginReq } from 'types';

import ajax from './ajax';

export const baseApi = {
  // getMetamaskMessage() {
  //   return ajax({
  //     method: 'get',
  //     url: URL.getMetamaskMessage,
  //   });
  // },
  metamaskLogin(data: LoginReq) {
    return ajax({
      method: 'post',
      url: URL.metamaskLogin,
      data,
    });
  },
  // getProfileInfo(params: { id: string | number }) {
  //   return ajax({
  //     method: 'get',
  //     url: URL.getProfileInfo(params.id),
  //   });
  // },
  getSelfInfo() {
    return ajax({
      method: 'get',
      url: URL.getSelfInfo,
    });
  },
};

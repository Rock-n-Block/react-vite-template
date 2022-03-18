import { createAction } from '@reduxjs/toolkit';

import { GetTokenBalanceReq, UpdateUserInfoReq } from 'types/requests';

import actionTypes from './actionTypes';

export const getTokenBalance = createAction<GetTokenBalanceReq>(actionTypes.GET_TOKEN_BALANCE);
export const updateUserInfo = createAction<UpdateUserInfoReq>(actionTypes.UPDATE_USER_INFO);

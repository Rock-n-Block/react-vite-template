import { createAction } from '@reduxjs/toolkit';

import actionTypes from './actionTypes';

export const getMaxBet = createAction<number>(actionTypes.GET_MAX_BET);

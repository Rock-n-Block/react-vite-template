import { createAction } from '@reduxjs/toolkit';

import actionTypes from './actionTypes';

export const tokenAction = createAction(actionTypes.GET_DECIMALS);

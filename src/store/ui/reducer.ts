import userActionTypes from 'store/user/actionTypes';
import profileActionsTypes from 'store/profile/actionTypes';
import { UIState } from 'types';
import { RequestStatus } from 'types/store';
import { getUIReducer } from '.';

const initialState: UIState = {
  [userActionTypes.GET_TOKEN_BALANCE]: RequestStatus.INIT,
  // [nftsActionTypes.BID]: RequestStatus.INIT,
  // [nftsActionTypes.BUY]: RequestStatus.INIT,
  // [nftsActionTypes.CHANGE_PRICE]: RequestStatus.INIT,
  // [nftsActionTypes.GET_DETAILED_NFT]: RequestStatus.INIT,
  // [nftsActionTypes.GET_NFTS]: RequestStatus.INIT,
  // [nftsActionTypes.LIKE]: RequestStatus.INIT,
  // [nftsActionTypes.REMOVE_FROM_SALE]: RequestStatus.INIT,
  [profileActionsTypes.GET_PROFILE_INFO]: RequestStatus.INIT,
};

const uiReducer = getUIReducer(initialState);

export default uiReducer;

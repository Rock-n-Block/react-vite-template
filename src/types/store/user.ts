export type UserState = {
  address: string;
  balance: string | number;
  key: string;
  provider: string;
};

export type LoginReq = {
  address: string;
  msg: string;
  signed_msg: string;
};

// eslint-disable-next-line no-shadow
export enum Modals {
  ApprovePending = 'ApprovePending',
  ApproveRejected = 'ApproveRejected',
  SendPending = 'SendPending',
  SendRejected = 'SendRejected',
  SendSuccess = 'SendSuccess',
  BidSuccess = 'BidSuccess',
  CreatedLotSuccess = 'CreatedLotSuccess',
  CreatedLotError = 'CreatedLotError',
  none = '',
}

export interface ModalState {
  activeModal: Modals;
  txHash: string;
  open: boolean;
}

export type ModalsInitialState = {
  modalState: ModalState;
};

// eslint-disable-next-line
import { Modal } from 'components/Modal';
import { useCallback, useMemo, VFC } from 'react';

import clsx from 'clsx';
import userSelector from 'store/user/selectors';

import { Modals, ModalsInitialState, State, UserState } from 'types/store';
import modalsSelector from 'store/modals/selectors';
import { useDispatch } from 'react-redux';
import { setActiveModal } from 'store/modals/reducer';
import { useShallowSelector } from 'hooks';
import { Button } from 'components';
import styles from './styles.module.scss';

import { modalData } from './NotificationModal.helper';

export interface NotificationModalProps {
  className?: string;
}

export const NotificationModal: VFC<NotificationModalProps> = ({ className, ...props }) => {
  const dispatch = useDispatch();

  const { modalState } = useShallowSelector<State, ModalsInitialState>(modalsSelector.getModals);
  const { chainType } = useShallowSelector<State, UserState>(userSelector.getUser);

  const closeModal = useCallback(() => {
    dispatch(
      setActiveModal({
        activeModal: Modals.init,
        txHash: '',
        open: false,
      }),
    );
  }, [dispatch]);

  const data = modalData[modalState.activeModal];

  const scanerLink = useMemo(
    () => (chainType === 'mainnet' ? `https://bscscan.com/tx/${modalState.txHash}` : `https://testnet.bscscan.com/tx/${modalState.txHash}`),
    [chainType, modalState.txHash],
  );

  return (
    <Modal isOpen={modalState.open} onClose={closeModal} className={clsx(styles.root, className)} {...props}>
      <div>
        <div className={clsx(styles.title, 'modalTitle')}>
          {data?.title1} <span>{data?.title2}</span>
        </div>
        <div>{data?.icon && <data.icon className={styles.error} />}</div>
        {modalState.activeModal === Modals.SendRejected ? (
          <div className={clsx(styles.text, 's')}>{data?.title5}</div>
        ) : (
          <>
            <div className={styles.subtitle}>{data?.title3}</div>
            <div className={clsx(styles.text, 'caption')}>{data?.title4}</div>
          </>
        )}
        {modalState.activeModal === Modals.ApproveRejected && (
          <div>
            <Button>Approve again</Button>
          </div>
        )}

        {modalState.activeModal === Modals.SendSuccess && <div className="">{scanerLink}</div>}
      </div>
    </Modal>
  );
};

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect } from 'react';

import cn from 'clsx';
import { Card } from 'components/Card';
import { CloseIcon } from 'assets/icons/icons/components';
import { Text } from 'components/Typography';
import styles from './styles.module.scss';

type ModalSize = {
  width?: string;
  height?: string;
};
export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: (props: unknown) => void;
  isBackground?: boolean;
  isDisabledScroll?: boolean;
  size?: ModalSize
  title?: string;

}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  isBackground = true,
  isDisabledScroll = true,
  title,
  onClose,
  size,
}) => {
  useEffect(() => {
    const { body } = document;
    const modalCard = document.getElementsByClassName('modalCard')[0];
    isDisabledScroll && isOpen ? body.style.setProperty('overflow', 'hidden') : body.style.setProperty('overflow', 'visible');
    isOpen && size ? modalCard.setAttribute('style', `width:${size.width} !important; height:${size.height} !important`) : '';
  }, [isDisabledScroll, isOpen, size]);
  return (
    <>
      <div
        className={cn(
          styles.modalOutside,
          { [styles.closed]: !isOpen },
          { [styles.backgroundColor]: isBackground },
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          styles.modal,
          className,
          { [styles.closed]: !isOpen },
        )}
      >
        <Card className={cn(styles.modalContent, 'modalCard')}>
          <div
            className={styles.modalHeader}
          >
            <Text size="l">
              {title}
            </Text>
            <div className={styles.closeButton} onClick={onClose}>
              <CloseIcon />

            </div>
          </div>

          <div className={styles.modalBody}>
            {children}
          </div>
        </Card>
      </div>
    </>

  );
};

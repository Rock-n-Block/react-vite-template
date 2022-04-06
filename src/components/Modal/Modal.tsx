import { FC, ReactNode, useMemo } from 'react';

import clsx from 'clsx';
import { omit } from 'lodash';
import DialogWrap, { DialogProps } from 'rc-dialog';
import s from './styles.module.scss';

export interface ModalProps extends DialogProps {
  customTitle?: string | ReactNode;
  size?: 'sm' | 'md' | 'lg';
  open: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ children, customTitle = ' ', ...props }) => {
  const jsxTitle = useMemo(() => {
    if (typeof customTitle === 'string') {
      return <div className={clsx(s.title, 'l')}>{customTitle}</div>;
    }

    return customTitle;
  }, [customTitle]);

  return (
    <DialogWrap {...omit(props, 'customTitle')}>
      <div className={s.modalTitle}>{customTitle && jsxTitle}</div>
      {children}
    </DialogWrap>
  );
};

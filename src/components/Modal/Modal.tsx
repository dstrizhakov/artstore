import React, { FC } from 'react';
import { Modal as MuiModal, Paper } from '@mui/material';
import styles from './Modal.module.scss';

type ModalPropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const Modal: FC<ModalPropsType> = ({ isOpen, setIsOpen, children }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <MuiModal open={isOpen} onClose={handleClose} className={styles.modal}>
      <Paper className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </Paper>
    </MuiModal>
  );
};

export default Modal;

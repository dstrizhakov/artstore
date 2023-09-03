import React, { FC } from 'react';
import { IconButton, Modal as MuiModal, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
        <IconButton className={styles.close} onClick={handleClose} aria-label="close" size="medium">
          <CloseIcon fontSize="medium" />
        </IconButton>
        {children}
      </Paper>
    </MuiModal>
  );
};

export default Modal;

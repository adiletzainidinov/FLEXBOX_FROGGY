import * as React from 'react';
import Box from '@mui/material/Box';
import Modal, { ModalProps } from '@mui/material/Modal';

interface CustomModalProps extends ModalProps {
  modalTitle?: string;
  modalContent?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  ...modalProps
}) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...modalProps} //
    >
      <Box className="Box" sx={modalStyle}>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#2c3e50',
  boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
  border: 'none',
  borderRadius: '10px',
  color: 'white',
  padding: '30px 20px'
};

import React from 'react';
import { Box, Modal, Stack } from '@mui/material';
import Button from '../ListItem/Button';

type ImageModalProps = {
  open: boolean;
  onClose:()=>void
  imgURL: string | null;
}

const ImageModal = ({open, onClose, imgURL}:ImageModalProps) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };

  return (
    <Modal open={open} onClose={onClose} sx={{border:"09x"}}>
      <Stack sx={style} gap={2} maxWidth={"50%vh"}>
        <Button value={"Back"} onClick={onClose}/>
        {imgURL && <img src={imgURL} alt={imgURL} />}
      </Stack>
    </Modal>
  );
};

export default ImageModal;

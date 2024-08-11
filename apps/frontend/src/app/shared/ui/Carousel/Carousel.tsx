import React, { useCallback, useState } from 'react';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useCounter } from 'react-use';
import ImageModal from '../ImageModal/ImageModal';
import { isNil } from 'lodash';

type CarouselProps = {
  imageUrls: string[]
}


const Carousel = ({ imageUrls }: CarouselProps) => {
  const maxNumberOfImagesIndex = imageUrls.length - 1;

  const [counter, { inc, dec, reset, set }] = useCounter(0, maxNumberOfImagesIndex, 0);
  const [modalImageURL, setModalImageURL] = useState<string | null>(null);
  const isModalOpen = !isNil(modalImageURL);

  const handleOpenModal = useCallback((imageURL:string)=>()=>setModalImageURL(imageURL),[])

  const handleCloseModal = useCallback(()=>setModalImageURL(null),[])


  const handleNextImage = useCallback(() => {
    if (maxNumberOfImagesIndex === counter) {
      reset();
      return;
    }
    inc();
  }, [counter, inc, maxNumberOfImagesIndex, reset]);

  const handleLastImage = useCallback(() => {
    if (counter === 0) {
      set(maxNumberOfImagesIndex);
      return;
    }
    dec();
  }, [counter, dec, maxNumberOfImagesIndex, set]);

  return (
    <>
    <Box display={'flex'} alignContent={'center'} height={'25vh'} justifyContent={'space-between'}>
      <Box display={"flex"} alignItems={"center"}>
      <IconButton onClick={handleLastImage} sx={{borderRadius:"25px", width: "50px", height: "50px"}}>
        <KeyboardDoubleArrowLeft />
      </IconButton>
      </Box>
      {imageUrls.map((img, index) => {
        if (index === counter) {
          return <img
            onClick={handleOpenModal(img)}
            key={img}
            src={img}
            alt={img}
            style={{ maxWidth: '25vw', maxHeight: '25vh', cursor:"pointer" }}
          />;
        }
        return null;
      })}
      <Box display={"flex"} alignItems={"center"}>
      <IconButton onClick={handleNextImage} sx={{borderRadius:"25px", width: "50px", height: "50px"}}>
        <KeyboardDoubleArrowRight />
      </IconButton>
      </Box>
    </Box>
      <ImageModal open={isModalOpen} onClose={handleCloseModal} imgURL={modalImageURL}/>
    </>
  );
};

export default Carousel;

import React, { useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import Photos from "../../Components/Photos/Photos";
import PhotoModal from '../../Components/PhotoModal/PhotoModal'


export default function Gallery({ addToCart }) {

  const [photoModal, setPhotoModal] = useState(false);
  const [photoModalContent, setPhotoModalContent] = useState({});

  function handlePhotoModal(photo){
      setPhotoModal(!photoModal);
      setPhotoModalContent(photo);
  }

  function closePhotoModal() {
      setPhotoModal(!photoModal);
      setPhotoModalContent({});
    }

  return (
    <>
      <Helmet>
        <title>Sergey Kazakov Photography Gallery</title>
        <meta
          name="description"
          content="This is the gallery page for Sergey Kazakov's Photography Portfoilio"
        />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <main>
        <Photos addToCart={addToCart} handlePhotoModal={handlePhotoModal}/>
        {photoModal && <PhotoModal photoModalContent={photoModalContent} closePhotoModal={closePhotoModal}/>} 
      </main>
    </>
  );
}

    
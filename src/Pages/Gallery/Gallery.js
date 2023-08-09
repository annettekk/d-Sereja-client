import React, { useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import Photos from "../../Components/Photos/Photos";
import PhotoModal from '../../Components/PhotoModal/PhotoModal'


export default function Gallery({ addToCart }) {

  const [photoModal, setPhotoModal] = useState(false);
  const [photoModalContent, setPhotoModalContent] = useState({});

  function handlePhotoModal(photo){
      console.log(`displaying larger photo of ${photo.title}`)
      console.log(photoModal)
      setPhotoModal(!photoModal);
      console.log(photoModal)
      setPhotoModalContent(photo);
  }

  function closePhotoModal() {
      setPhotoModal(!photoModal);
      setPhotoModalContent({});
    }

  return (
    <>
      <Helmet>
        <title>Jaga Galganek Photography Gallery</title>
        <meta
          name="description"
          content="This is the gallery page for Jaga Galganek's Photography Portfoilio"
        />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <main>
        <h2>Gallery</h2>
        <Photos addToCart={addToCart} handlePhotoModal={handlePhotoModal}/>
        {/* <PhotoModal /> */}
         {/* <PhotoModal closePhotoModal={closePhotoModal} photoModalContent={photoModalContent} />  */}
         {photoModal && <PhotoModal photoModalContent={photoModalContent} closePhotoModal={closePhotoModal}/>} 
      </main>
    </>
  );
}

    
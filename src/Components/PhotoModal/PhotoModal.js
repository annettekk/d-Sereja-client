import React from "react";
import "./PhotoModal.css";

export default function photoModal({ photoModalContent, closePhotoModal }) {
  console.log(photoModalContent.photoSrc)
  console.log(photoModalContent.title)
  return (
    <>
      <div className="selected-photo">
      <div className="sp-container">
         <img className='selectedPhoto' src={require(`../../${photoModalContent.photoSrc}`)} alt={photoModalContent.title} />
        
        <span className="cross" onClick={closePhotoModal}>
          X
        </span>
      </div>
      </div>
    </>
  )
}

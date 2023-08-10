import React from "react";
import "./PhotoModal.css";

export default function photoModal({ photoModalContent, closePhotoModal }) {
  console.log(photoModalContent.photoSrc)
  console.log(photoModalContent.title)
  return (
    <>
      <div className="selectedPhotoContainer">
      <span className="closeButton" onClick={closePhotoModal}>
        X
        </span>
        <img className='selectedPhoto' src={require(`../../${photoModalContent.photoSrc}`)} alt={photoModalContent.title} />
      </div>
    </>
  )
}

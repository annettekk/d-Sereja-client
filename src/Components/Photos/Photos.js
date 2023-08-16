import React, { useEffect, useState } from "react";
import "./Photos.css";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { BsFillCartPlusFill } from "react-icons/bs";


export default function Photos({handlePhotoModal}) {
    const[photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos()
    }, [])

    async function getPhotos(){
        try{
            let API = 'https://analogue-film.onrender.com/photos'
            const result = await axios.get(API)
            setPhotos([])
            setPhotos(result.data)
        }catch(error){
            console.log(error)
        }
    }
  

    const updatePhoto = async(photo) => {
        photo.liked = photo.liked + 1
        await axios.put(`https://analogue-film.onrender.com/photos/${photo._id}`, photo)
        getPhotos()
    }

    function addToCart(photo){
        const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"))

        if(shoppingCart){
          let updateCart = []
          updateCart = shoppingCart
          updateCart.push(photo)
          localStorage.setItem('shoppingCart', JSON.stringify(updateCart))
        }else{
          localStorage.setItem('shoppingCart', JSON.stringify([photo]))
        }
    }

  return (
    <>
      <div className="gallery">
        {photos.map((photo, _id) => (
            <div key={_id} className='photoDiv'>
                <h3 className=''>{photo.title}</h3>
                <img className='photo' src={require(`../../${photo.photoSrc}`)} alt={photo.title} onClick={() => handlePhotoModal(photo)}></img> 
                <button className="niceButton" onClick={() => updatePhoto(photo)}><FcLike /></button>
                <button className="niceButton" onClick={() => addToCart(photo)}><BsFillCartPlusFill/></button>
            </div>
        ))}
      </div>
    </>
  );
}

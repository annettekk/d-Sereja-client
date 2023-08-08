import React, { useEffect, useState } from 'react'
import "./Photos.css"
import axios from "axios"
import { FcLike } from "react-icons/fc";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Photos() {
    const[photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos()
    })

    async function getPhotos(){
        try{
            let API = 'http://localhost:9080/photos'
            const result = await axios.get(API)
            setPhotos([])
            setPhotos(result.data)
        }catch(error){
            console.log(error)
        }
    }

    function likePhoto(photo){
        console.log(`photo with id ${photo._id} has been liked`)
    }

    const updatePhoto = async(photo) => {
        photo.liked = photo.liked + 1
        await axios.put(`http://localhost:9080/photos/${photo._id}`, photo)
    }

    function addToCart(photo){
        console.log(`Photo ${photo.title} has been added to cart`)
    }

    function handlePhotoModal(photo){
        console.log(`displaying larger photo of ${photo.title}`)
        
    }

  return (
    <>
        <div>Photos</div>
        {photos.map((photo, _id) => (
            <div key={_id} className='photoDiv'>
                <h3 className=''>{photo.title}</h3>
                <img className='photo' src={require(`../../${photo.photoSrc}`)} alt={photo.title} onClick={() => handlePhotoModal(photo)}></img>
                <button onClick={() => likePhoto(photo)}><FcLike /></button>
                <button onClick={() => updatePhoto(photo)}><FcLike /> Liked {photo.liked} times</button>
                <button onClick={() => addToCart(photo)}><BsFillCartPlusFill/></button>
            </div>
        ))}
    </>
  )
}

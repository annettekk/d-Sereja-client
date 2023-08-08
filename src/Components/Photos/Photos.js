import React, { useEffect, useState } from 'react'
import "./Photos.css"
import axios from "axios"

import "../.././"

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


  return (
    <>
        <div>Photos</div>
        {photos.map((photo, _id) => (
            <div key={_id} className='photoDiv'>
                <h3 className=''>{photo.title}</h3>
                <img className='photo' src={require(`../../${photo.photoSrc}`)} alt={photo.title}></img>
            </div>
        ))}
    </>
  )
}

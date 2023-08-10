import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    photoSrc: "",
    model: "",
    desciption: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    try {
      let API = "https://analogue-film.onrender.com/photos";
      const result = await axios.get(API);
      setPhotos([]);
      setPhotos(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletePhoto = async (photo) => {
    await axios.delete(`https://analogue-film.onrender.com/photos/${photo._id}`);
    getPhotos();
  };

  const submit = (event) => {
    event.preventDefault();
    handleAddPhoto(formData);
  };

  const handleAddPhoto = async (newPhoto) => {
    try {
      let API = `https://analogue-film.onrender.com/photos`;
      const result = await axios.post(API, newPhoto);
      setPhotos([...photos, result.data]);
      setFormData({
        title: "",
        photoSrc: "",
        model: "",
        desciption: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const makeFave = async (photo) => {
    photo.faved = !photo.faved;
    await axios.put(`https://analogue-film.onrender.com/photos/${photo._id}`, photo);
    getPhotos();
  };

  const unFave = async (photo) => {
    photo.faved = !photo.faved;
    await axios.put(`https://analogue-film.onrender.com/photos/${photo._id}`, photo);
    getPhotos();
  };

  return (
    <>
      <Helmet>
        <title>Jaga Galganek Photography Admin Page</title>
        <meta
          name="description"
          content="This is the admin page for Jaga Galganek's Photography Portfoilio"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main>
        
        <h3>Add Photo</h3>
        <form onSubmit={submit}>
          <label className="labelText">Title</label>
          <input
            className="inputForm"
            name="title"
            placeholder="Please enter title of photo"
            onChange={handleChanges}
            value={formData.title}
          ></input>
          <label className="labelText">PhotoSrc</label>
          <input
            className="inputForm"
            name="photoSrc"
            placeholder="Please enter src of photo"
            onChange={handleChanges}
            value={formData.photoSrc}
          ></input>
          <label className="labelText">Model</label>
          <input
            className="inputForm"
            name="model"
            placeholder="Please enter names of the model/s"
            onChange={handleChanges}
            value={formData.model}
          ></input>
          <label className="labelText">Description</label>
          <input
            className="inputForm"
            name="desciption"
            placeholder="Please enter a description of the photo"
            onChange={handleChanges}
            value={formData.desciption}
          ></input>
          <button className="submitButton" type="submit">
            submit
          </button>
        </form>
        <details className="deletePhotos">
          <summary>Photos</summary>
          <div className="displayPhotos">
            {photos.map((photo, _id) => (
              <div key={_id} className="photoToDelete">
                <h3 className="">{photo.title}</h3>
                <img
                  className="photoDelete"
                  src={require(`../../${photo.photoSrc}`)}
                  alt={photo.title}
                ></img>
                {photo.faved && (
                  <button onClick={() => unFave(photo)}>
                    <MdFavorite />
                  </button>
                )}
                {!photo.faved && (
                  <button onClick={() => makeFave(photo)}>
                    <MdOutlineFavoriteBorder />
                  </button>
                )}
                <button
                  className="deleteButton"
                  onClick={() => deletePhoto(photo)}
                >
                  <AiFillDelete />
                </button>
                <p className="liked"> <FcLike /> {photo.liked}</p>
              </div>
            ))}
          </div>
        </details>
      </main>
    </>
  );
}

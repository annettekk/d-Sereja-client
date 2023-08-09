import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Profile from "../../Components/Profile/Profile";


export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    photoSrc: "",
    model: "",
    desciption: "",
  });

  const handleChanges = (e) => {
    console.log("changing" + e);
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    try {
      let API = "http://localhost:9080/photos";
      const result = await axios.get(API);
      setPhotos([]);
      setPhotos(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletePhoto = async (photo) => {
    console.log(`${photo} bring deleted`);
    await axios.delete(`http://localhost:9080/photos/${photo._id}`);
    getPhotos();
  };

  const submit = (event) => {
    event.preventDefault();
    console.log("Add Photo");
    handleAddPhoto(formData);
  };

  const handleAddPhoto = async (newPhoto) => {
    try {
      let API = `http://localhost:9080/photos`;
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
    console.log(`${photo.title} bring wll be faved`);
    photo.faved = !photo.faved;
    await axios.put(`http://localhost:9080/photos/${photo._id}`, photo);
    getPhotos();
  };

  const unFave = async (photo) => {
    console.log(`${photo.title} bring wll be unfaved`);
    photo.faved = !photo.faved;
    await axios.put(`http://localhost:9080/photos/${photo._id}`, photo);
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
        
        <h2>Admin Page</h2>
        <h3>Add Photo</h3>
        <form onSubmit={submit}>
          <legend>Photo Details</legend>
          <label>Title</label>
          <input
            name="title"
            placeholder="Please enter title of photo"
            onChange={handleChanges}
            value={formData.title}
          ></input>
          <label>PhotoSrc</label>
          <input
            name="photoSrc"
            placeholder="Please enter src of photo"
            onChange={handleChanges}
            value={formData.photoSrc}
          ></input>
          <label>Model</label>
          <input
            name="model"
            placeholder="Please enter names of the model/s"
            onChange={handleChanges}
            value={formData.model}
          ></input>
          <label>Description</label>
          <input
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

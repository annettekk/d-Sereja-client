import React from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import Photos from "../../Components/Photos/Photos";

export default function Gallery({ addToCart }) {
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
        <Photos addToCart={addToCart} />
      </main>
    </>
  );
}

import React from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Jaga Galganek Photography Gallery</title>
        <meta
        name="description"
        content="This is the gallery page for Jaga Galganek's Photography Portfoilio"/>
        <link rel="canonical" href="/gallery"/>
      </Helmet>
      <div>Gallery</div>
    </>
  )
}


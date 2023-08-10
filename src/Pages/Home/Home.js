import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet-async";
import Carousel from "../../Components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Helmet>
        <head className="title">Jaga Galganek Photography Home Page</head>
        <meta
          name="description"
          content="This is the home page for Jaga Galganek's Photography Portfoilio"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <Carousel />
      </main>
    </>
  );
}

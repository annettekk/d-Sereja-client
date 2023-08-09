import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet-async";
import HeroHome from "../../Images/HeroHome.jpg";

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
        <h2>Home Page</h2>
        <img className="hero-image" src={HeroHome} alt="Hero Image" />
      </main>
    </>
  );
}

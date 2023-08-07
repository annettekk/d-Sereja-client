import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Jaga Galganek Photography Home Page</title>
      <meta
      name="description"
      content="This is the home page for Jaga Galganek's Photography Portfoilio"/>
      <link rel="canonical" href="/"/>
    </Helmet>
      <main>
        <h2>Home Page</h2>
      </main>
    </>
  )
}

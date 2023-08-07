import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Jaga Galganek Photography About Page</title>
        <meta
        name="description"
        content="This is the about page for Jaga Galganek's Photography Portfoilio"/>
        <link rel="canonical" href="/about"/>
      </Helmet>
      <div>About</div>
    </>
  )
}

import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Yaga Portfolio About Page</title>
        <meta
        name="description"
        content="This is the about page for Yaga's Photography Portfoilio"/>
        <link rel="canonical" href="/about"/>
      </Helmet>
      <div>About</div>
    </>
  )
}

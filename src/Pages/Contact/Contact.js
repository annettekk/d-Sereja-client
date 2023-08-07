import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>    
      <Helmet>
        <title>Jaga Galganek Photography Contact Page</title>
        <meta
        name="description"
        content="This is the contact page for Jaga Galganek's Photography Portfoilio"/>
        <link rel="canonical" href="/contact"/>
      </Helmet>
      <div>Contact</div>
    </>
  )
}

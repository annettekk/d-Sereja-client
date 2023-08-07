import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>    
      <Helmet>
        <title>Yaga Portfolio Contact Page</title>
        <meta
        name="description"
        content="This is the contact page for Yaga's Photography Portfoilio"/>
        <link rel="canonical" href="/contact"/>
      </Helmet>
      <div>Contact</div>
    </>
  )
}

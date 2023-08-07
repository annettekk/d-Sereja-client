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
          content="This is the about page for Jaga Galganek's Photography Portfoilio"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <h2 className="about-header">About</h2>
        <p>
          Polish film photographer, based in Suffolk, UK. She shoots film since
          her teenage years. Her first camera was soviet Zenit-E. At the moment
          she uses 35mm - Pentax ME super and medium format - Pentax 6x7. Her
          interest is focused around portrait where she can express herself.
          Main motif of her photography is expression of melancholy. Models on
          her photos are strong and vulnerable at the same of time. Yaga is
          experimenting with double exposures as well as with cyanotype print
          techniques in her work.
        </p>
      </div>
    </>
  );
}

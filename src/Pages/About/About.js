import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";
import aboutPhoto2 from "../../Images/aboutPhoto2.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sergey Kazakov Photography About Page</title>
        <meta
          name="description"
          content="This is the about page for Sergey Kazakov's Photography Portfoilio"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="container">
          <div className="about-container">
            <img className="about-photo" src={aboutPhoto2} alt="Photographer" />
            <p className="aboutP">
              Sergey is a Russian-American digital photographer, based in Batavia, IL. He
              shoots film since his teenage years. His first camera was soviet
              Zenit-E. At the moment he uses 35mm - Pentax ME super and medium
              format - Pentax 6x7. He perceives his photography as a rich
              tapestry of contradictions and ambivalence. A central objective
              for him is to seamlessly integrate his
              perspective into his work, embracing the complexity inhisent in
              both. While his models may exude an apparent fragility and
              vulnerability, it is their profound sensitivity that becomes their
              ultimate strength. Their power and confidence emanate from a
              beauty that transcends mere physical appearance, instead rooted in
              the depth of their personal experiences. Additionally, the
              landscapes he captures serve as a profound reflection of his own
              inner self. Echoes of that sombreness can be discerned within his
              landscapes - a touch of ethereality, an evocation of suspended
              realms between dreams and reality. Occasionally, even a subtle
              element may emerge, subtly unsettling the viewer, perhaps even
              evoking a sense of foreboding.
            </p>
          </div>
          <h3 className="equipment">Equipment</h3>
          <p className="equipmentP">
            Navigating the realms of digital photography, Sergey wields the Pentax ME
            Super and Pentax 6x7 as her creative companions. With the ME Super,
            she dances between hues, capturing life in vivid colors while honing
            her focus with its seamless blend of manual finesse and automatic
            ease. The 6x7 elevates her art further, embracing medium format
            grandeur for unmatched clarity and range. Through this gear, grain
            becomes her symphony, adding depth to each frame. In a digital age,
            his devotion to film crafts timeless tales, each click an ode to
            enduring artistry.
          </p>
          <h3>Featured in</h3>
          <ul className="featuredUl">
            <li className="featuredLi">
              <a href="https://www.vogue.com/photovogue/photographers/207945">
                National Geographics
              </a>
            </li>
            <li className="featuredLi">
              <a href="https://www.lomography.com/magazine/">
                Lomography Interview
              </a>
            </li>
            <li className="featuredLi">
              <a href="https://www.instagram.com/international.film.swap.group/?hl=en">
                International Film Swap
              </a>
            </li>
          </ul>
          <h3 className="contact">Contact</h3>
          <p className="email">skazakov2007@gmail.com</p>
        </div>
      </main>
    </>
  );
}

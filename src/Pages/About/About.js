import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";
import aboutPhoto2 from "../../Images/aboutPhoto2.jpg";
import { Link } from "react-router-dom";

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
        <main>
          <h2 className="about-header">About</h2>
          <img className="about-photo" src={aboutPhoto2} alt="Photographer" />
          <p className="aboutP">
            Jaga is a Polish film photographer, based in Suffolk, UK. She shoots
            film since her teenage years. Her first camera was soviet Zenit-E.
            At the moment she uses 35mm - Pentax ME super and medium format -
            Pentax 6x7. She perceives her photography as a rich tapestry of
            contradictions and ambivalence. A central objective for her is to
            seamlessly integrate her feminine and feministic perspective into
            her work, embracing the complexity inherent in both. While her
            models may exude an apparent fragility and vulnerability, it is
            their profound sensitivity that becomes their ultimate strength.
            Their power and confidence emanate from a beauty that transcends
            mere physical appearance, instead rooted in the depth of heir
            personal experiences. Additionally, the portraits she captures serve
            as a profound reflection of her own inner self, from times when she
            suffered depression several years ago. Echoes of that sombreness can
            be discerned within her portraits - a touch of ethereality, an
            evocation of suspended realms between dreams and reality.
            Occasionally, even a subtle element may emerge, subtly unsettling
            the viewer, perhaps even evoking a sense of foreboding.
          </p>
          <h3 className="equipment">Equipment</h3>
          <p className="equipmentP">
            Navigating the realms of film, Jaga wields the Pentax ME Super and
            Pentax 6x7 as her creative companions. With the ME Super, she dances
            between hues, capturing life in vivid colors while honing her focus
            with its seamless blend of manual finesse and automatic ease. The
            6x7 elevates her art further, embracing medium format grandeur for
            unmatched clarity and range. Through this gear, grain becomes her
            symphony, adding depth to each frame. In a digital age, her devotion
            to film crafts timeless tales, each click an ode to enduring
            artistry
          </p>

          <h3>Featured in:</h3>
          <ul className="featuredUl">
            <li className="featuredLi">
              <Link to="https://www.vogue.com/photovogue/photographers/207945">
                Vogue
              </Link>
            </li>
            <li className="featuredLi">
              <Link to="https://www.lomography.com/magazine/">
                Lomography Interview
              </Link>
            </li>
            <li className="featuredLi">
              <Link to="https://www.instagram.com/international.film.swap.group/?hl=en">
                International Film Swap
              </Link>
            </li>
          </ul>
        <h3 className="contact">Contact</h3>
        <p className="email">jagagalganek@gmail.com</p>
      </main>
    </>
  );
}

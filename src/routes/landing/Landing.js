import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroVideo from '../../assets/images/landing-images/hero-video.mp4'
import "./landing.css"
import { ResetLocation } from "../../helpers/ResetLocation";

const Landing = ({ changeCategory }) => {
  useEffect(() => {
    document.title = "Lady Luxe";
  }, []);
  return (
    <main className="landing">
      <article className="hero">
        <h2>Building a better <span>you!</span></h2>
        <video autoPlay loop muted playsInline>
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </article>
      <article className="grid">
        <section className="grid-one">
          <Link
            to={`/store/Crop Top`}
            className="custom-btn grid-button"
            onClick={() => {
              changeCategory("Crop Top");
              ResetLocation();
            }}
          >
            <span>Crop Tops</span>
          </Link>
        </section>
        <section to="" className="grid-two">
          <Link
            to={`/store/jeans`}
            onClick={() => {
              changeCategory("jeans");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span> Jeans</span>
          </Link>
        </section>
        <section to="" className="grid-three">
          <Link
            to={`/store/shoes`}
            onClick={() => {
              changeCategory("shoes");
              ResetLocation();
            }}
            className=" custom-btn grid-button"
          >
            <span> Shoes</span>
          </Link>
        </section>
        <section to="" className="grid-four">
          <Link
            to={`/store/Western Wear`}
            onClick={() => {
              changeCategory("Western Wear");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span>Western Wears</span>
          </Link>
        </section>
        <section to="" className="grid-five">
          <Link
            to={`/store/Wedding suits`}
            onClick={() => {
              changeCategory("Wedding suits");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span>Wedding Suits</span>
          </Link>
        </section>
        <section className="grid-six">
          <Link
            to={`/store/all`}
            onClick={() => {
              changeCategory("all");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span>Store</span>
          </Link>
        </section>
      </article>
    </main>
  );
}


export default Landing;
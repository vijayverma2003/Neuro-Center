import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gallery(props) {
  useEffect(() => {
    gsap.fromTo(
      ".gallery--photo",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "Power3.easeOut",
        scrollTrigger: { trigger: ".gallery", start: "-90%" },
      }
    );

    gsap.fromTo(
      ".gallery--heading",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "Power3.easeOut",
        scrollTrigger: { trigger: ".gallery", start: "-90%" },
      }
    );
  });
  return (
    <section className="gallery">
      <h1 className="gallery--heading">GALLERY</h1>
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&1"
        className="gallery--photo gallery--photo--1"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&2"
        className="gallery--photo gallery--photo--2"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&3"
        className="gallery--photo gallery--photo--3"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&4"
        className="gallery--photo gallery--photo--4"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&5"
        className="gallery--photo gallery--photo--5"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&6"
        className="gallery--photo gallery--photo--6"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&7"
        className="gallery--photo gallery--photo--7"
      />
      <img
        loading="lazy"
        src="https://source.unsplash.com/random/&8"
        className="gallery--photo gallery--photo--8"
      />
    </section>
  );
}

export default Gallery;

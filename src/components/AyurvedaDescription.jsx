import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AyurvedaDescription(props) {
  useEffect(() => {
    gsap.fromTo(
      ".highlight",
      { color: "rgba(0, 0, 0, .4)" },
      {
        color: "#e85a4f",
        stagger: 1,
        scrollTrigger: {
          trigger: ".ayurveda--description--container",
          scrub: true,
          start: "-60%",
          end: "50%",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(".highlight", {
      color: "rgba(0, 0, 0, .4)",
      stagger: 1,
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: ".ayurveda--description--container",
        scrub: true,
        start: "-30%",
        end: "70%",
      },
    });
  }, []);

  return (
    <section className="container ayurveda--description--container">
      <h2 className="ayurveda--description">
        <span className="highlight">
          Ayurveda, a natural system of medicine,{" "}
        </span>{" "}
        <span className="highlight">
          originated in India more than 3,000 years ago.
        </span>
        <span className="highlight">
          Ayurvedic therapies include herbal medicines, special diets,{" "}
        </span>{" "}
        <span className="highlight">
          meditation, yoga, massage, laxatives, enemas, and medical oils.
        </span>
        <span className="highlight">
          Unlike, Allopathy which is a temporary solution for diseases,
        </span>{" "}
        <span className="highlight">
          Ayurveda provides a better solution for diagnosing diseases without
          any side-effects.
        </span>
      </h2>
    </section>
  );
}

export default AyurvedaDescription;

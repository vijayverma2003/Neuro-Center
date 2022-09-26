import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MeetTheDoctor(props) {
  useEffect(() => {
    gsap.fromTo(
      ["header"],
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".doctor--page",
          start: "-60%",
        },
      }
    );

    gsap.set(".doctor--image", { transformOrigin: "center" });

    gsap.fromTo(
      ".doctor--image",
      { scale: 0.8 },
      {
        scale: 1,
        duration: 1.4,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger: ".doctor--page",
          start: "-60%",
        },
      }
    );

    gsap.fromTo(
      ".doctor--description",
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger: ".doctor--page",
          start: "-60%",
        },
      }
    );
  }, []);

  return (
    <section className="block container doctor--page">
      <header>
        <h1>Meet the Doctor</h1>
      </header>
      <div className="doctor--page--content">
        <img className="doctor--image" src="" alt="" />
        <div className="doctor--description">
          <h3 className="doctor--name">Dr. Janak Raj</h3>
          <p className="doctor--qualification">
            <i>BAMS, MD</i>
          </p>
          <p className="doctor--views">
            "Hospitals have been making healthcare accessible to one and all and
            Dukh Bhanjan Ayurvedic Neuro Centre in Dasuya, Hoshiarpur is one
            such reliable hospital that is committed to providing expert medical
            care. Having established a firm presence as a trusted name in
            Hospitals, it is renowned for offering specialised services and
            treatments."
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetTheDoctor;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Specialities(props) {
  useEffect(() => {
    gsap.fromTo(
      [".specialities--heading", ".specialities--description"],
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".specialities--page",
          start: "-60%",
        },
      }
    );

    gsap.set(".speciality", { transformOrigin: "center" });

    gsap.fromTo(
      ".speciality",
      { scale: 0.8, y: 200, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger: ".specialities--page",
          start: "-60%",
        },
      }
    );
  }, []);

  return (
    <section className="block container specialities--page">
      <h1 className="specialities--heading">Our Specialities</h1>
      <p className="specialities--description">
        If your problem is not listed below, Contact us for more details{" "}
      </p>
      <div className="specialities">
        <div className="speciality">
          <img
            className="speciality--image"
            src={require("../images/slip.webp")}
            alt=""
          />
          <p className="speciality--name">Slip Disc</p>
        </div>
        <div className="speciality">
          <img
            className="speciality--image"
            src={require("../images/joint.jpeg")}
            alt=""
          />
          <p className="speciality--name">Joint Pain</p>
        </div>
        <div className="speciality">
          <img
            className="speciality--image"
            src={require("../images/knee.jpeg")}
            alt=""
          />
          <p className="speciality--name">Knee Problems</p>
        </div>
        <div className="speciality">
          <img
            className="speciality--image"
            src={require("../images/panchakarma.jpeg")}
            alt=""
          />
          <p className="speciality--name">Panchakarma</p>
        </div>
      </div>
    </section>
  );
}

export default Specialities;

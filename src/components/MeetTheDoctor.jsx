import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MeetTheDoctor(props) {
  // useEffect(() => {
  //   gsap.set(".doctor--image", { transformOrigin: "center" });

  //   gsap.fromTo(
  //     ".doctor--image",
  //     { scale: 0.8 },
  //     {
  //       scale: 1,
  //       duration: 1.4,
  //       ease: "Power3.easeOut",
  //       scrollTrigger: {
  //         trigger: ".doctor--page",
  //         start: "-60%",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     ".doctor--description",
  //     { x: 400, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.4,
  //       ease: "Power3.easeOut",
  //       scrollTrigger: {
  //         trigger: ".doctor--page",
  //         start: "-60%",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section className="container doctor--page">
      <header className="doctor--header">
        <h1 className="doctor--heading">Meet Ved Janak Raj</h1>
        <p>B.A.M.S, M.D</p>
        <p></p>
      </header>
      <div className="doctor--content">
        <img className="doctor--image" src="" alt="" />
        <p className="doctor--description">
          Hospitals have been making healthcare accessible to one and all and
          Dukh Bhanjan Ayurvedic Neuro Centre in Dasuya, Hoshiarpur is one such
          reliable hospital that is committed to providing expert medical care.
          Having established a firm presence as a trusted name in Hospitals, it
          is renowned for offering specialised services and treatments.
        </p>
      </div>
    </section>
  );
}

export default MeetTheDoctor;

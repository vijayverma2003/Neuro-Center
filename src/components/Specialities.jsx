import React from "react";

function Specialities(props) {
  return (
    <section className="block container specialities--page">
      <h2 className="specialities--heading">Our Specialities</h2>
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

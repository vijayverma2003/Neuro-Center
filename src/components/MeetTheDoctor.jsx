import React from "react";

function MeetTheDoctor(props) {
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
            <i>BAMS</i>
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

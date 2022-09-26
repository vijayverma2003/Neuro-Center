import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer(props) {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: ".contact", start: "-60%" },
    });

    timeline.fromTo(
      [".large--contact--text", ".contact--left", ".contact--right"],
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.4, ease: "Power3.easeOut" }
    );
  }, []);

  return (
    <footer className="block contact">
      <h1 className="large--contact--text">CONTACT</h1>
      <div className="contact--left">
        <h1 className="contact--heading">Contact Us</h1>
        <p className="contact--description">
          Feel free to contact us and we will get <br />
          back to you as soon as we can.
        </p>
        <form className="contact--form">
          <input type="text" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="E-Mail" />
          <textarea
            rows={10}
            type="text"
            placeholder="Write your message here..."
          />
          <button className="form--button btn--secondary">Send</button>
        </form>
      </div>
      <div className="contact--right">
        <h3>Address</h3>
        <p>
          Shri Guru Ram Das Market, Near Basra Hospital, Miani Road, Dasuya,
          Distt. Hoshiarpur 144205
        </p>
        <h3>Contact Information</h3>
        <p>Email: vedjanakraj@gmail.com</p>
        <p>Phone: 94172-46603, 98144-29107</p>
        <h3>Opening Hours</h3>
        <div className="opening--hours">
          <div className="days">
            <p>Monday</p> <p>Tuesday</p> <p>Wednesday</p> <p>Thursday</p>
            <p>Friday</p> <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className="hours">
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
            <p> 8:00AM - 6:00PM</p>
          </div>
        </div>
        <p className="copyright">
          &copy; Copyright by Ved Janak Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

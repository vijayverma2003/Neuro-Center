import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact(props) {
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
    <footer className="container contact">
      <div className="contact--left">
        <h1>Contact Us</h1>
        <p>
          Feel free to contact us and we will get <br />
          back to you as soon as we can.
        </p>
        <div className="contact--box">
          <h4>Address</h4>
          <p>
            Shri Guru Ram Das Market, Near Basra Hospital, Miani Road, Dasuya,
            Distt. Hoshiarpur 144205
          </p>
        </div>
        <div className="contact--box">
          <h4>Contact Information</h4>
          <p>Email: vedjanakraj@gmail.com</p>
          <p>Phone: 94172-46603, 98144-29107</p>
        </div>
      </div>
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
    </footer>
  );
}

export default Contact;

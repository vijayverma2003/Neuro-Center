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
          <div className="social--media">
            <a
              target="blank"
              href="https://www.facebook.com/dukhbhanjanayurvedicneurocentre/"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91968 17.5029C2.9205 20.9757 4.15995 24.3342 6.41525 26.975C8.67055 29.6158 11.7938 31.3655 15.2236 31.9098V21.7175H11.5238V17.5029H15.228V14.2946C15.1462 13.5437 15.2308 12.7839 15.4757 12.0694C15.7206 11.3548 16.1198 10.703 16.645 10.1601C17.1702 9.61721 17.8085 9.19663 18.5145 8.92823C19.2206 8.65982 19.9771 8.55017 20.7303 8.60707C21.8241 8.62457 22.9178 8.72228 23.997 8.89874V12.4848H22.1536C21.8403 12.4437 21.5218 12.4736 21.2216 12.5722C20.9215 12.6709 20.6473 12.8357 20.4193 13.0545C20.1914 13.2733 20.0156 13.5406 19.9048 13.8365C19.7941 14.1324 19.7512 14.4494 19.7795 14.7642V17.5029H23.8205L23.1745 21.7189H19.7795V31.9098C22.5323 31.4747 25.1027 30.26 27.1866 28.4094C29.2704 26.5589 30.7804 24.1499 31.5377 21.4678C32.2949 18.7858 32.2678 15.9428 31.4595 13.2757C30.6513 10.6085 29.0956 8.22882 26.9769 6.41832C24.8581 4.60782 22.265 3.44234 19.5044 3.05987C16.7438 2.6774 13.9314 3.09395 11.4003 4.26022C8.86907 5.42649 6.72508 7.29362 5.2221 9.64056C3.71913 11.9875 2.92012 14.716 2.91968 17.5029V17.5029Z"
                  fill="#E85A4F"
                />
              </svg>
            </a>
          </div>
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

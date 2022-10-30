import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reviews(props) {
  useEffect(() => {
    gsap.fromTo(
      [".reviews--main"],
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "Power3.easeOut",
        scrollTrigger: { trigger: ".reviews--page", start: "-80%" },
      }
    );

    gsap.set(".review", { transformOrigin: "center" });

    gsap.fromTo(
      [".review"],
      { scaleX: 0.5, scaleY: 0.6 },
      {
        scaleX: window.innerWidth <= 768 ? 1.0 : 0.7,
        scaleY: window.innerWidth <= 768 ? 1.0 : 0.8,
        duration: 1.4,
        ease: "Power3.easeOut",
        scrollTrigger: { trigger: ".reviews--page", start: "-80%" },
      }
    );
  }, []);

  return (
    <section className="reviews--page">
      <div className="reviews--main">
        <h1 className="reviews--heading">Reviews</h1>
        <p className="reviews--description">What people say about us?</p>
      </div>
      <div className="reviews">
        <div className="review">
          <p className="review--content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            itaque? Debitis dolore ducimus dolorum, quae temporibus laborum
            impedit. Unde maxime quis obcaecati! Quas distinctio soluta
            praesentium. Numquam corporis dolorum necessitatibus autem esse
            nesciunt, dicta perferendis, culpa quod quae, error molestiae
            nostrum accusamus recusandae quo reprehenderit maxime nulla! Numquam
            corporis officiis, sed incidunt nisi praesentium voluptate nemo ab
            porro eligendi eius quae laborum eum iure molestias nostrum iusto,
            vitae, commodi neque dolores tempora unde reprehenderit earum.
            Aliquid labore, quaerat similique laboriosam in cupiditate accusamus
            velit quos sequi eos ex quibusdam laborum sit nobis enim assumenda
            suscipit quis quas deserunt aut. Harum doloremque quis voluptates
            necessitatibus maxime eos dolorum architecto provident sint eum
            porro nam vero cupiditate neque, modi quidem officia, nihil,
            sapiente sit alias nobis corporis velit? Molestiae, perspiciatis qui
            blanditiis, error beatae repudiandae unde veniam nemo
            exercitationem, mollitia est! Reiciendis deserunt soluta commodi
            fugit molestiae in aliquam esse velit. Facere?
          </p>
          <p className="review--by">
            <i>~ Vijay Verma</i>
          </p>
        </div>
        <div className="review"></div>
        <div className="review"></div>
        <div className="review"></div>
      </div>
    </section>
  );
}

export default Reviews;

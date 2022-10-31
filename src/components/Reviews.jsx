import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reviews from "../services/reviews.json";

console.log(reviews);

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
    <section className="reviews--page container">
      <h1 className="reviews--heading">What people say about us?</h1>
      <div className="reviews">
        {reviews["reviews"].map((review) => (
          <div className="review">
            <header className="review--header">
              <img
                className="review--image"
                src={require(`../images/${review.image}`)}
                alt=""
              />
              <div>
                <h4>{review.name}</h4>
                <p>{review.from}</p>
              </div>
            </header>
            <div>
              {review.problems.map((problem) => (
                <span className="review--problem">{problem}</span>
              ))}
            </div>
            <p className="review--content">{review.description}</p>
          </div>
        ))}

        <div className="review">
          <p className="review--content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            unde dicta qui vitae suscipit ea natus. Quis dolor odit optio.
          </p>
        </div>
        <div className="review">
          <p className="review--content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            unde dicta qui vitae suscipit ea natus. Quis dolor odit optio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

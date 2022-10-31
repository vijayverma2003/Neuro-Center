import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reviews from "../services/reviews.json";

gsap.registerPlugin(ScrollTrigger);

function Reviews(props) {
  useEffect(() => {
    gsap.set(".review", { transformOrigin: "center" });

    gsap.fromTo(
      ".reviews--heading",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "Power3.easeOut",
        duration: 1.2,
        scrollTrigger: { trigger: ".reviews--page", start: "-80%" },
      }
    );

    gsap.fromTo(
      [".review"],
      { scale: 0.6, opacity: 0 },
      {
        scale: window.innerWidth >= 768 ? 1.0 : 0.7,
        opacity: 1,
        duration: 1.2,
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
          <div key={review.id} className="review">
            <header className="review--header">
              <img
                className="review--image"
                src={require(`../images/${review.image}`)}
                alt=""
              />
              <div>
                <h4 className="review--writer">{review.name}</h4>
                <p className="review--writer--age">Age: {review.age}</p>
              </div>
            </header>
            <div>
              {review.problems.map((problem) => (
                <span key={problem} className="review--problem">
                  {problem}
                </span>
              ))}
            </div>
            <p className="review--description">{review.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;

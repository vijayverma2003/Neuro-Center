import React from "react";

function Reviews(props) {
  return (
    <section className="block reviews--page">
      <div className="reviews--main">
        <h1 className="reviews--heading">Reviews</h1>
        <p className="reviews--description">What people say about us?</p>
        <button className="btn--secondary">Add Your Review</button>
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

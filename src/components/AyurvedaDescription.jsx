import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AyurvedaDescription(props) {
  useEffect(() => {
    gsap.fromTo(
      ".highlight",
      { color: "rgba(0, 0, 0, .4)" },
      {
        color: "black",
        stagger: 1,
        scrollTrigger: {
          trigger: ".ayurveda--description--container",
          scrub: true,
          start: "-30%",
          end: "50%",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(".highlight", {
      color: "rgba(0, 0, 0, .4)",
      duration: 0.4,
      stagger: 1,
      scrollTrigger: {
        trigger: ".ayurveda--description--container",
        scrub: true,
        start: "-5%",
        end: "70%",
      },
    });
  }, []);

  return (
    <section className="ayurveda--description--container">
      <div className="ayurveda--description block">
        <h2 className="ayurveda--description--text">
          <span className="highlight">
            Ayurveda, a natural system of medicine, originated in India more
            than 3,000 years ago.
          </span>{" "}
          <span className="highlight">
            Ayurvedic therapies include herbal medicines, special diets,
            meditation, yoga, massage, laxatives, enemas, and medical oils.
          </span>{" "}
          <span className="highlight">
            Unlike, Allopathy which is a temporary solution for diseases,
            Ayurveda provides a better for diagnosing diseases without any
            side-effects.
          </span>
        </h2>
      </div>
      <div className="blobs">
        <svg
          width="1418"
          height="1007"
          viewBox="0 0 1418 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M294.518 9.46337C334.72 21.5596 372.141 41.7461 401.507 70.1626C431.215 98.9102 455.61 134.048 463.835 173.306C471.853 211.574 455.636 249.595 447.099 287.764C438.903 324.413 436.091 362.924 414.395 394.375C392.468 426.159 359.011 449.357 323.351 467.149C288.165 484.706 248.971 491.281 209.51 496.602C167.896 502.214 125.189 510.837 84.9945 499.289C43.8574 487.47 9.8284 460.373 -19.4296 430.824C-48.788 401.174 -72.1222 366.506 -84.7645 327.841C-97.4351 289.09 -109.876 245.021 -92.2905 207.991C-74.4703 170.467 -16.4956 165.016 8.56625 131.316C33.5236 97.7574 16.6157 42.8569 50.0672 16.5691C82.2863 -8.75019 131.594 2.8207 173.633 1.5987C214.518 0.410245 255.573 -2.25436 294.518 9.46337Z"
            fill="#B6FC5C"
            fill-opacity="0.3"
          />
          <path
            d="M868.289 614.556C914.045 627.09 941.323 655.824 967.188 681.917C990.918 705.855 1004.28 732.484 1012.44 759.972C1020.25 786.293 1016.15 812.485 1013.85 839.192C1011.24 869.485 1022.21 902.016 997.909 928.533C973.234 955.463 926.38 972.674 880.008 985.265C834.629 997.586 784.303 997.663 734.73 999.991C683.034 1002.42 626.179 1014.87 581.13 999.3C535.6 983.566 533.123 943.698 500.237 918.957C468.084 894.769 411.623 883.811 390.129 855.61C367.998 826.571 365.745 791.867 379.888 761.048C393.805 730.724 428.502 704.902 468.5 684.836C505.22 666.414 555.246 663.57 598.465 651.39C640.043 639.673 674.826 620.192 719.556 614.085C768.537 607.399 822.533 602.023 868.289 614.556Z"
            fill="#FBFF29"
            fill-opacity="0.3"
          />
          <path
            d="M1354.85 137.703C1388.72 156.088 1422.72 172.223 1453.23 195.199C1489 222.129 1536.43 243.553 1550 284.65C1563.48 325.502 1539.88 368.919 1523.77 408.926C1509.01 445.591 1487.49 478.935 1459.93 508.388C1433.24 536.904 1398.36 555.441 1365.7 577.834C1327.46 604.061 1297.04 647.067 1250 652.345C1203.33 657.582 1158.74 630.456 1120.06 605.395C1084.08 582.077 1057.16 548.96 1035.47 513.331C1015.6 480.694 1008.12 443.936 999.428 407.246C990.83 370.961 984.722 335.201 984.446 298.031C984.121 254.151 966.02 200.947 997.662 168.631C1030.15 135.453 1092.1 157.903 1137.09 142.135C1176.7 128.246 1202.47 82.8754 1244.75 82.0148C1286.97 81.1557 1318.31 117.862 1354.85 137.703Z"
            fill="#CEFF7D"
            fill-opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}

export default AyurvedaDescription;

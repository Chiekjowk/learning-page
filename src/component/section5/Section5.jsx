import { useState } from "react";
import Card from "../../utilit/Card";
import "./Section5.css";
const Section5 = () => {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    if (next < 1020) {
      setNext((prev) => prev + 340);
    }
  };
  const handlePrev = () => {
    if (next > 0) {
      setNext((prev) => prev - 340);
    }
  };
  return (
    <div className="bg-m">
      <div className="cards">
        <svg
          className="next"
          onClick={() => handleNext()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentcolor"
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>

        <svg
          className="before"
          onClick={() => handlePrev()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentcolor"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>

        <Card right={next} />
        <Card right={next} />
        <Card right={next} />
        <Card right={next} />
      </div>
    </div>
  );
};

export default Section5;

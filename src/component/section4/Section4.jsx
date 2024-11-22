import lady from "../../assets/Office_lady.png";
import gent from "../../assets/Office_gentleman.png";

import "./Section4.css";
export default function Section4() {
  return (
    <>
      {/* Best Education Platform */}
      <section className="section4-1 grid grid-cols-2 gap-12 p-12">
        <img src={lady} alt="Teacher" className="ladyImg" />
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold">Best Education platform</h2>
          <p className="mb-6 text-gray-600">
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options.
          </p>
          <button className="primary-btn">Read more</button>
        </div>
      </section>
      <section className="section4-1 grid grid-cols-2 gap-12 p-12">
        <div className="relative">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Best Education platform</h2>
            <p className="mb-6 text-gray-600">
              Looking for top quality education? We offer a diverse range of
              courses, expert instructors, and flexible learning options.
            </p>
            <button className="primary-btn">Read more</button>
          </div>
          <img src={gent} alt="Teacher" className="gentImg" />
        </div>
      </section>
    </>
  );
}

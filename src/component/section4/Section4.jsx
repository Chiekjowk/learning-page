import "./Section4.css";
export default function Section4() {
  return (
    <>
      {/* Best Education Platform */}
      <section className="grid grid-cols-2 gap-12 p-12">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold">Best Education platform</h2>
          <p className="mb-6 text-gray-600">
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options.
          </p>
          <button className="self-start px-6 py-3 bg-yellow-400 rounded-md">
            Read more
          </button>
        </div>
        <img src="" alt="Teacher" className="rounded-lg" />
      </section>
      <section className="grid grid-cols-2 gap-12 p-12">
        <div className="relative">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Best Education platform</h2>
            <p className="mb-6 text-gray-600">
              Looking for top quality education? We offer a diverse range of
              courses, expert instructors, and flexible learning options.
            </p>
            <button className="self-start px-6 py-3 bg-yellow-400 rounded-md">
              Read more
            </button>
          </div>
          <img src="" alt="Teacher" className="rounded-lg" />
        </div>
      </section>
    </>
  );
}

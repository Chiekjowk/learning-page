import lady from "../../assets/Office_lady.png";
import gent from "../../assets/Office_gentleman.png";
import teacherAvatar from "../../assets/teacher-avatar.jpg"; // Add your avatar image
import "./Section4.css";

export default function Section4() {
  return (
    <div className="education-sections">
      {/* First Section - Lady */}
      <section className="education-section lady-section">
        <div className="image-container">
          <div className="background-shape green"></div>
          <img src={lady} alt="Teacher" className="main-image" />
          <div className="info-card lady">
            <h4>Train Teachers</h4>
            <div className="avatar-group"></div>
          </div>
        </div>
        <div className="content">
          <h2>Best Education platform</h2>
          <p>
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options. Whether
            you're a beginner or advanced learner, we've got you covered.
          </p>
          <button className="primary-btn">Read more</button>
        </div>
      </section>

      {/* Second Section - Gentleman */}
      <section className="education-section gent-section reverse">
        <div className="image-container">
          <div className="background-shape yellow"></div>
          <img src={gent} alt="Teacher" className="main-image" />
          <div className="info-card gent">
            <img src={teacherAvatar} alt="Teacher" className="avatar" />
            <h2>8K+</h2>
            <h4>Teachers</h4>
            <div className="avatar-group">
              <img src={teacherAvatar} alt="Teacher" className="avatar" />
              <img src={teacherAvatar} alt="Teacher" className="avatar" />
              <img src={teacherAvatar} alt="Teacher" className="avatar" />
              <img src={teacherAvatar} alt="Teacher" className="avatar" />
            </div>
          </div>
        </div>
        <div className="content">
          <h2>Best Education platform</h2>
          <p>
            Looking for top quality education? We offer a diverse range of
            courses, expert instructors, and flexible learning options. Whether
            you're a beginner or advanced learner, we've got you covered.
          </p>
          <button className="primary-btn">Read more</button>
        </div>
      </section>
    </div>
  );
}

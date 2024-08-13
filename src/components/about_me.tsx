import "./about_me.css";
import me from "../assets/new.png";

const About: React.FC = () => {
  return (
    <>
      <div id="about">
        <div className="text">
          <h2>About me</h2>
          <p>
            Hello! I'm Oreoluwa, I am a web developer seeking to improve his
            skills with every oppurtunity. A highly motivated student of
            Covenant University pursuing a Bachelor's Degree in Information and
            Communication Engineering and currently on a first class. I have an
            intermediate foundation in the application of programming languages
            JavaScript and Python with a basic knowledge in the use of the MERN
            stack. And a proven ability to analyze complex data and manage
            projects through the course work, academic and extracurricular
            projects. I work well with teams as well, ensuring to contribute my
            best.
          </p>
        </div>
        <div className="me">
          <img src={me} alt="me" />
        </div>
      </div>
      <div className="underline"></div>
    </>
  );
};

export default About;

import "./about_me.css";
import me from "../assets/new.png";

const About: React.FC = () => {
  return (
    <>
      <div id="about">
        <div className="text">
          <h2>About me</h2>
          <p>
            Hello! I'm Oreoluwa, a recent first-class graduate of Information and Communication Engineering with a strong foundation in JavaScript, Python, and the MERN stack (MongoDB, Express.js, React, Node.js). Experienced in network troubleshooting, full-stack application development, and hardware-software integration through practical coursework and industry internships. I am driven by continuous learning and eager to apply engineering and software development skills in a full-time role.
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

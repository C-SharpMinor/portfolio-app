import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Details() {
  return (
    <>
      <section id="details">
        <h2>My details</h2>
        <h3>GitHub account</h3>
        <a href="https://github.com/C-SharpMinor" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <h3>Gmail account</h3>
        <p id="gmail">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          oreoluwaonabajomail@gmail.com
        </p>
        <h3>LinkedIn account</h3>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/oreoluwa-onabajo-8458aa284"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </section>
    </>
  );
}
export default Details;

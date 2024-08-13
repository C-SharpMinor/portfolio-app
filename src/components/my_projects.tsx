import "./projects.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <h2>My Projects</h2>
        <div>
          <div className="project_item">
            <h3 className="project_title">Calculator</h3>
            <p>
              <br />
              Developed a calculator webpage with Javascript, HTML and CSS
            </p>
          </div>
          <div className="project_item">
            <h3 className="project_title">Task Manager</h3>
            <p>
              <br />
              Developed a locally hosted task manager with the use of Node js,
              Express js and Mongodb
            </p>
          </div>
          <div className="project_item">
            <h3 className="project_title">Store Shelf</h3>
            <p>
              <br />
              In this project using Node js, Mongodb, and Express js. It
              involves a site for storing items in a store within the database
              with an id for each item so it could be retrieved later.
            </p>
          </div>
          <div className="project_item">
            <h3 className="project_title">Authenticator</h3>
            <p>
              <br />
              Developed a small, locally hosted username and password
              authenticator. The user first signs up with the username and
              password to access some infromation in the webpage. Subsequently,
              the user can log in when that username and password is saved in
              the database. JWT was used to generate the token for the password
              passed into the webpage. The user sees a short message on the site
              after signing in. Node js, Mongodb and Express js were used
            </p>
          </div>
        </div>
      </section>
      <div className="underline"></div>
    </>
  );
}
export default Projects;

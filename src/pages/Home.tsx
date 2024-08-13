import Header from "../components/header";
import Projects from "../components/my_projects";
import About from "../components/about_me";
import Details from "../components/details";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <Projects />
      <Details />
    </div>
  );
}

export default Home;

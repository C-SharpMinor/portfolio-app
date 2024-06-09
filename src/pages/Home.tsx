import Header from "../components/header";
import Projects from "../components/my_projects";
import About from "../components/about_me";
import Details from "../components/details";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Details />
    </>
  );
}

export default Home;

import "./header.css";

function Header() {
  return (
    <>
      <header>
        <h1>My Portfolio App</h1>
        <nav>
          <ul id="links">
            <li id="list_item">
              <a href="#about">About Me</a>
            </li>
            <li id="list_item">
              <a href="#projects">My Projects</a>
            </li>
            <li id="list_item">
              <a href="#details">Let's Talk</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;

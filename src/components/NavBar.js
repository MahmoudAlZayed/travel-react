// Styles
import "../style/all.css";
import "../style/normalize.css";

export default function NavBar() {
  return (
    <>
      <div class="nav-container">
        <a href="index.html" class="logo">
          BHROMAON
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Who We Are</a>
            </li>
            <li>
              <a href="/">What We Do</a>
            </li>
            <li>
              <a href="/">Travel With Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

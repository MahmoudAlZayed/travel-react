// Hooks

// Components
import MainFirstSection from "./MainFirstSection";
import MainSecondSection from "./MainSecondSection";
import MainThirdSection from "./MainThirdSection";
import MainFourthSection from "./MainFourthSection.";

// Style

import "../style/all.css";

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

//Images
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image8 from "../images/image8.png";

export default function Main() {
  return (
    <>
      <MainFirstSection>
        <div className="main-section1" id="main-first-section">
          <div className="paragraph-button">
            <h2>Why Choose Us</h2>
            <p>
              Tion and dislike men who are so beguiled and demoralized by desire
              by the charms of pleasure of the moment, so blinded by desire,
              that they cannot foresee
              <span>
                Ddislike men who are so beguiled and demoralized by the charms
                of pleasure of the moment, so blinded by desire, that
              </span>
            </p>
            <button>Explore Places</button>
          </div>
          <div className="main-section1-images">
            <img
              className="image3"
              src={image3}
              alt="Lake House"
              title="Lake House"
            />
            <img
              className="image4"
              src={image4}
              alt="mountain"
              title="mountain"
            />
          </div>
          <div className="main-section-1-footer">
            <a href="/">
              <IoSearchOutline className="searchIcon" />
              Search Places
            </a>
            <a href="/">
              <FaRegCheckCircle className="checkIcon" />
              Select Places
            </a>
            <a href="/">
              <AiOutlineLike className="likeIcon" />
              Book & Enjoy
            </a>
          </div>
        </div>
      </MainFirstSection>

      <MainSecondSection>
        <div className="main-section2">
          <div className="main-section2-paragraph1">
            <h2>Spain</h2>
            <h3>Grand Spain Madrid</h3>
            <p>
              But I must explain to you how all this mistaken idea of account to
              denouncing pleasure and praising pain was account born and I
              account will give you a complete account of the system
            </p>
            <button>Book Now</button>
          </div>
        </div>
      </MainSecondSection>

      <MainThirdSection>
        <div className="main-section3">
          <div className="main-section3-paragraph1">
            <h2>Spain</h2>
            <h3>Grand Spain Madrid</h3>
            <p>
              But I must explain to you how all this mistaken idea of account to
              denouncing pleasure and praising pain was account born and I
              account will give you a complete account of the system
            </p>
            <button>Book Now</button>
          </div>
        </div>
      </MainThirdSection>

      <MainFourthSection>
        <div className="main-section4">
          <h3>What Our Tourist Say</h3>
          <div className="image-paragraph">
            <img
              src={image8}
              alt="man on a mountain"
              title="man on a mountain"
            />
            <div className="section4-paragraph">
              <h2>Sam Sumon</h2>
              <p>
                But I must explain to you how all this mistaken idea of account
                to denouncinpleasure and praising pain But I must explain to you
                how all this mistaken idea of account to nai denouncing pleasure
                and praising pain was account born and I account will give you a
                complete account of the system was account born and I account
                will give you a nai the complete account of the system
              </p>
            </div>
          </div>
        </div>
      </MainFourthSection>
    </>
  );
}

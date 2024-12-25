// Hooks
import { useState } from "react";

// Components

//Styles
import "../style/all.css";

//Icons
import { FaSearch } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <div className="header">
        <h1>BHROMAON</h1>
        <p>Safe Travel Anywhere</p>
        <form>
          <input
            valur={inputSearch}
            type="text"
            placeholder="Search Your Travel Destination"
            name="search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <button onClick={() => {}}>
            SEARCH
            <FaSearch className="searchIcon" />
          </button>
        </form>

        <div className="scroll-down">
          <a href="#main-first-section">
            Scroll Down
            <FaArrowDown className="scrollDownIcon" />
          </a>
        </div>
      </div>
    </>
  );
}

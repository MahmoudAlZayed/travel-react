// Hooks
import { useRef } from "react";
// Components

// Style

import "../style/all.css";

// Icons
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

export default function MobileOverLayNavigation() {
  const overLayRef = useRef(null);

  const items = [
    { id: 1, name: "Who We Are" },
    { id: 2, name: "What We Do" },
    { id: 3, name: "Travel With Us" },
    { id: 4, name: "Contact Us" },
  ];

  const itemsList = items.map((item) => {
    return (
      <>
        <a className="overLayLinks" href="/" key={item.id}>
          {item.name}
        </a>
      </>
    );
  });

  return (
    <>
      <div ref={overLayRef} className="overLay">
        <IoCloseCircle
          className="closeIcon"
          onClick={() => {
            overLayRef.current.style.height = "0";
          }}
        />
        <div className="overLayContent">{itemsList}</div>
      </div>

      <IoMdMenu
        className="openIcon"
        onClick={() => {
          overLayRef.current.style.height = "100%";
        }}
      />
    </>
  );
}

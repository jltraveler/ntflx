import React, {useEffect, useState} from "react";
// import {useHistory} from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
//   const history = useHistory();

  const transistionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);
    return () => window.removeEventListener("scroll", transistionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
        //   onClick={() => history.pushState("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="ntflx-logo"
        />
        <img
        //   onClick={() => history.push("/")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;

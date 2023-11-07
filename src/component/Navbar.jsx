import { useState } from "react";
import {
  Button,
  Flexcenter,
  // Inputarea,
  Leftbox,
  LogoBox,
  Navbox,
  Rightbox,
  SearchIcon,
} from "../style/NavStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const youClickedMe = () => {
    const element1 = document.querySelector("#Fullbar");
    const element2 = document.querySelector("#Halfbar");
    if (!sidebar) {
      setSidebar(true);
      element2.style.display = "none";
      element1.style.display = "block";
    } else {
      setSidebar(false);
      element2.style.display = "block";
      element1.style.display = "none";
    }
  };

  return (
    <>
      <Navbox>
        <Leftbox>
          <div onClick={youClickedMe} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
          <SearchIcon src={"/search.png"} />
          <LogoBox></LogoBox>
          {/* <Inputarea placeholder="Search Products.." /> */}
        </Leftbox>

        <Rightbox>
          <ul>
            <li>
              <Button>
                <Flexcenter>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
                  </svg>
                  Create new project
                </Flexcenter>
              </Button>
              {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M216,56v60a4,4,0,0,1-4,4H136V44a4,4,0,0,1,4-4h60A16,16,0,0,1,216,56ZM116,40H56A16,16,0,0,0,40,56v60a4,4,0,0,0,4,4h76V44A4,4,0,0,0,116,40Zm96,96H136v76a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V140A4,4,0,0,0,212,136ZM40,140v60a16,16,0,0,0,16,16h60a4,4,0,0,0,4-4V136H44A4,4,0,0,0,40,140Z"></path>
              </svg>
            </li>
          </ul>
        </Rightbox>
      </Navbox>
    </>
  );
};

export default Navbar;

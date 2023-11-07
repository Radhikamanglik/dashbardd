import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import atclogo from "../Assets/atclogo.png";
import henry from "../Assets/henry.png";
import {
  Contentbox,
  Cross,
  Fullcontentbox,
  Fullcontentboxhover,
  Fullsidebox,
  Iconbox,
  Roundbox,
  Sidebox,
  Value,
} from "../style/SideStyle";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const sidebarOff = () => {
    const element = document.querySelector("#Fullbar");
    element.style.display = "none";
  };
  const navigate = useNavigate();
  return (
    <>
      <Sidebox id="Halfbar">
        <Contentbox>
          <img
            src={atclogo}
            alt="logo"
            style={{ width: "50%", objectFit: "contain" }}
          />
        </Contentbox>
        <Contentbox>
          <Avatar />
        </Contentbox>
        <Contentbox style={{ flexDirection: "column", height: "auto" }}>
          <Tooltip
            title="Dashboard"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <Roundbox>
                <i className="ph ph-gauge" style={{ color: "#8f5fe8" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Chat"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                navigate("/home/chat");
              }}
            >
              <Roundbox>
                <i className="ph ph-info" style={{ color: "#faa50b" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Contact Us"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox>
              <Roundbox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0bc557"
                  viewBox="0 0 256 256"
                >
                  <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Login"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                navigate("/home/login");
              }}
            >
              <Roundbox>
                <i className="ph ph-sign-in" style={{ color: "#f34144" }}></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
          <Tooltip
            title="Sign Up"
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
          >
            <Iconbox
              onClick={() => {
                navigate("/home/register");
              }}
            >
              <Roundbox>
                <i
                  className="ph ph-fingerprint"
                  style={{ color: "#faa50b" }}
                ></i>
              </Roundbox>
            </Iconbox>
          </Tooltip>
        </Contentbox>
      </Sidebox>

      <Fullsidebox id="Fullbar" style={{ display: "none" }}>
        <Fullcontentbox
          style={{
            fontSize: "1.5rem",
            color: "white",
            justifyContent: "space-between",
            paddingLeft: "1rem",
          }}
        >
          <img
            style={{ width: "50%", objectFit: "contain" }}
            src={atclogo}
            alt="logo"
          />
          <Cross onClick={sidebarOff}>
            <i className="ph ph-x-circle" style={{ color: "#00d25b" }}></i>
          </Cross>
        </Fullcontentbox>
        <Fullcontentbox
          style={{
            flexDirection: "row",
            color: "white",
            justifyContent: "flex-start",
            padding: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "46px", height: "46px", marginLeft: "50px" }}
              src={henry}
              alt="logo"
            />
          </div>
          <div
            style={{
              color: "transparent",
              fontFamily: "Montserrat-Medium, Helvetica",
              fontSize: "24px",
              fontWeight: 400,
              left: 0,
              letterSpacing: "0",
              lineHeight: "18px",
              position: "relative",
              top: 0,
              padding: "0px 0px 34px 47px  ",
            }}
          >
            <h6
              style={{
                color: " #ffffff",
                fontWeight: "500",
                position: "absolute",
              }}
            >
              Henry Klein
            </h6>
          </div>
        </Fullcontentbox>
        <Fullcontentbox>
          <Value>Navigation</Value>
        </Fullcontentbox>
        <Fullcontentboxhover>
          <Roundbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#8f5fe8"
              viewBox="0 0 256 256"
            >
              <path d="M205.65,82.08A109.26,109.26,0,0,0,128,50h-.39C67.17,50.21,18,100.06,18,161.13V184a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160A109.3,109.3,0,0,0,205.65,82.08ZM226,184a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,186H32a2,2,0,0,1-2-2V161.13A102.36,102.36,0,0,1,30.62,150H56a6,6,0,0,0,0-12H32.71C42.6,96.4,78.53,64.86,122,62.19V88a6,6,0,0,0,12,0V62.19A98.05,98.05,0,0,1,223.53,138H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z"></path>
            </svg>
          </Roundbox>
          <Value>DashBoard</Value>
        </Fullcontentboxhover>
        <Fullcontentboxhover>
          <Roundbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#faa50b"
              viewBox="0 0 256 256"
            >
              <path d="M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"></path>
            </svg>
          </Roundbox>
          <Value>Chat</Value>
        </Fullcontentboxhover>
        <Fullcontentboxhover>
          <Roundbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0bc557"
              viewBox="0 0 256 256"
            >
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
            </svg>
          </Roundbox>
          <Value>Contact Us</Value>
        </Fullcontentboxhover>
        <Fullcontentboxhover>
          <Roundbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#f34144"
              viewBox="0 0 256 256"
            >
              <path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"></path>
            </svg>
          </Roundbox>
          <Value>Login</Value>
        </Fullcontentboxhover>
        <Fullcontentboxhover>
          <Roundbox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#faa50b"
              viewBox="0 0 256 256"
            >
              <path d="M72,128a134.63,134.63,0,0,1-14.16,60.47,8,8,0,1,1-14.32-7.12A118.8,118.8,0,0,0,56,128,71.73,71.73,0,0,1,83,71.8,8,8,0,1,1,93,84.29,55.76,55.76,0,0,0,72,128Zm56-8a8,8,0,0,0-8,8,184.12,184.12,0,0,1-23,89.1,8,8,0,0,0,14,7.76A200.19,200.19,0,0,0,136,128,8,8,0,0,0,128,120Zm0-32a40,40,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09,214.09,0,0,1-20.51,92A8,8,0,1,0,146,226.83,230,230,0,0,0,168,128,40,40,0,0,0,128,88Zm0-64A104.11,104.11,0,0,0,24,128a87.76,87.76,0,0,1-5,29.33,8,8,0,0,0,15.09,5.33A103.9,103.9,0,0,0,40,128a88,88,0,0,1,176,0,282.24,282.24,0,0,1-5.29,54.45,8,8,0,0,0,6.3,9.4,8.22,8.22,0,0,0,1.55.15,8,8,0,0,0,7.84-6.45A298.37,298.37,0,0,0,232,128,104.12,104.12,0,0,0,128,24ZM94.4,152.17A8,8,0,0,0,85,158.42a151,151,0,0,1-17.21,45.44,8,8,0,0,0,13.86,8,166.67,166.67,0,0,0,19-50.25A8,8,0,0,0,94.4,152.17ZM128,56a72.85,72.85,0,0,0-9,.56,8,8,0,0,0,2,15.87A56.08,56.08,0,0,1,184,128a252.12,252.12,0,0,1-1.92,31A8,8,0,0,0,189,168a8.39,8.39,0,0,0,1,.06,8,8,0,0,0,7.92-7,266.48,266.48,0,0,0,2-33A72.08,72.08,0,0,0,128,56Zm57.93,128.25a8,8,0,0,0-9.75,5.75c-1.46,5.69-3.15,11.4-5,17a8,8,0,0,0,5,10.13,7.88,7.88,0,0,0,2.55.42,8,8,0,0,0,7.58-5.46c2-5.92,3.79-12,5.35-18.05A8,8,0,0,0,185.94,184.26Z"></path>
            </svg>
          </Roundbox>
          <Value>Sign Up</Value>
        </Fullcontentboxhover>
      </Fullsidebox>
    </>
  );
};

export default Sidebar;

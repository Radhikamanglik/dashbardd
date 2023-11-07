import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const ZoomedProfileImage = styled.img`
  width: 500px;
`;

const FullScreenImage = ({ imageUrl, onClose }) => {
  return (
    <Overlay className="overlay" onClick={onClose}>
      <ZoomedProfileImage
        className="zoomed-profile"
        src={imageUrl}
        alt="Zoomed Profile Pic"
      />
      {/* <img src={imageUrl} alt="Zoomed Profile Pic" /> */}
    </Overlay>
  );
};

export default FullScreenImage;

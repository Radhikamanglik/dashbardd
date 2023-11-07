import React from "react";
import "./Image.css";
const Image = ({ src, alt, status }) => {
  return (
    <div className="image-container">
      <img className="image" src={src} alt={alt} />;
      {status === "online" ? <span className="active"></span> : null}
    </div>
  );
};
export default Image;

import React, { useState } from "react";
import "./MessageList.css";
import FullScreenImage from "./FullScreenImage";

const MessageList = ({ messageList }) => {
  const [profileZoomViewOpen, setProfileZoomViewOpen] = useState(false);

  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
    setProfileZoomViewOpen(true);
  };

  const handleCloseZoomView = () => {
    setZoomedImage(null);
    setProfileZoomViewOpen(false);
  };
  setTimeout(() => {
    let el = document.getElementById("chat-container");
    if (el && el.scrollHeight) {
      el.scrollTo(0, el.scrollHeight);
    }
  }, 100);
  return (
    <div className="MessageContainer" id="chat-container">
      {messageList?.map((message) => (
        <div
          className={`MessageBubbleContainer ${
            message.senderID === 0 ? "isUsers" : ""
          }`}
          style={{
            alignItems: message.senderID === 0 ? "flex-end" : "flex-start",
          }}
          key={message.id} // Add a unique key for each message
        >
          {message.messageType === "TEXT" ? (
            <div
              className={`MessageBubble ${
                message.senderID === 0 ? "isUsers" : ""
              }`}
            >
              {message.text}
              <div
                className={`MessageTime ${
                  message.senderID === 0 ? "isUsers" : ""
                }`}
              >
                {message.addedOn}
              </div>
              {message.senderID === 0 ? (
                <div className="MsgSeenTick">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                  >
                    <path
                      d="M1 7.74641L5.09603 11.8424L15.9385 1"
                      stroke="#CE5988"
                    />
                    <path
                      d="M5.18311 7.96525L10.9657 2.18262"
                      stroke="#CE5988"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          ) : message.messageType === "IMAGE" ? (
            <div
              className={`MessageBubble ${
                message.senderID === 0 ? "isUsers" : ""
              } hasImage`}
            >
              {message.image.map((image, index) => (
                <img
                  className="msgimage"
                  key={index}
                  src={image}
                  alt={`Message Image ${index}`}
                  controls
                  onError={(e) => {
                    console.error("Image load error:", e);
                  }}
                  onClick={() => handleImageClick(image)}
                />
              ))}
              {profileZoomViewOpen && (
                <FullScreenImage
                  imageUrl={zoomedImage}
                  onClose={handleCloseZoomView}
                />
              )}
              <div
                className={`MessageTime ${
                  message.senderID === 0 ? "isUsers" : ""
                }`}
              >
                {message.addedOn}
              </div>
              {message.senderID === 0 ? (
                <div className="MsgSeenTick">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                  >
                    <path
                      d="M1 7.74641L5.09603 11.8424L15.9385 1"
                      stroke="#CE5988"
                    />
                    <path
                      d="M5.18311 7.96525L10.9657 2.18262"
                      stroke="#CE5988"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          ) : message.messageType === "VIDEO" &&
            Array.isArray(message.video) &&
            message.video.length > 0 ? (
            <div
              className={`MessageBubble ${
                message.senderID === 0 ? "isUsers" : ""
              } hasVideo`}
            >
              {message.video.map((video, index) => (
                <video
                  className="msgvideo"
                  key={index}
                  src={video}
                  alt={`Message Video ${index}`}
                  controls
                />
              ))}
              <div
                className={`MessageTime ${
                  message.senderID === 0 ? "isUsers" : ""
                }`}
              >
                {message.addedOn}
              </div>
              {message.senderID === 0 ? (
                <div className="MsgSeenTick">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                  >
                    <path
                      d="M1 7.74641L5.09603 11.8424L15.9385 1"
                      stroke="#CE5988"
                    />
                    <path
                      d="M5.18311 7.96525L10.9657 2.18262"
                      stroke="#CE5988"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

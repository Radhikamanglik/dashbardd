import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { contactList, messagesList } from "../mockData";
import EmojiPicker from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";
import MessageList from "./MessageList";
import FullScreenImage from "./FullScreenImage";

const GlobalStyle = createGlobalStyle`
  body {
  height: 100vh;
    overflow: hidden;
    background: linear-gradient(180deg, #0A001B 0.03%, #11002C 0.04%, #000 100%);
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  
  }
  /* Define the styles for the scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track (background) of the scrollbar */
  ::-webkit-scrollbar-track {
    background-color: transparent; /* Change this to your desired background color */
  }

  /* Handle (thumb) of the scrollbar */
  ::-webkit-scrollbar-thumb {
   
    border-radius: 6px; /* Rounded corners for the thumb */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Change this to your desired thumb color on hover */
  }

 
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  color: #000;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ProfileHeader = styled.div`
  height: 107px;
  display: flex;
  flex-direction: row;
  background-color: #151515;
  margin-top: 1px;
  padding: 1px;
  margin: 0 50px;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 481px;
  padding: 0px 0 0 20px;

  background-color: #151515;

  color: #000;
  @media (max-width: 750px) {
    width: 100%;

    display: ${({ chatSelected }) => (chatSelected ? "none" : "block")};
  }
`;

const InnerContainer = styled.div`
  background-color: #151515;

  width: 532px;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;

    display: ${({ chatSelected }) => (chatSelected ? "flex" : "none")};
  }
`;
const HeaderContainer = styled.div`
  height: 110px;
  width: 100%;
  padding-top: 20px;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  ${"" /* border-right: 1px solid grey; */}
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;

  align-items: center;
  padding: 1px;
  background-color: #151515;
`;

const IconContainer = styled.div`
  margin-right: 18px;
  display: flex;
  align-items: center;

  gap: 20px;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const Typography = styled.div`
  font-size: 24px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0.48px;
  line-height: 28px;
  color: white;
`;

const Profileinfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const WelcomePage = styled.div`
  display: grid;
  text-align: center;
  margin-top: 30%;
  justify-items: center;
  align-content: stretch;
`;

const ProfilePic = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 10px;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const SelectedProfile = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;
const BottomCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #222222;
  height: 103px;
  padding: 10px;
  align-items: center;
`;

const MessageInput = styled.input`
  border: none;
  outline: none;
  height: 60px;
  width: 791px;
  background-color: #4e4e4e;
  border-radius: 13px;
  margin-left: -20px;
  padding: 10px;
`;

const SendButton = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;
`;

const EmojiImage = styled.img`
  height: 39px;
  width: 39px;
  margin-left: 36px;
  cursor: pointer;
`;

const EmojiPickerContainer = styled.div`
  position: relative;
`;
const PlusBox = styled.div`
  position: relative;
`;
const PlusImage = styled.img`
  width: 99px;
  height: 99px;
  ${"" /* margin-left: 10px; */}

  border-radius: 40%;
  margin-top: 25px;
  cursor: pointer;
`;
const SearchImage = styled.img`
  width: 28px;
  height: 28px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 40%;
  opacity: 0.2;
  cursor: pointer;
`;
const AudioImage = styled.img`
  width: 19px;
  height: 26px;
  flex-shrink: 0;

  margin-left: 24px;
  margin-right: 32px;
  border-radius: 40%;

  cursor: pointer;
`;

const CustomListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 20px 0;
  border-bottom: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #2a2a2a;
  }
`;
const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const ContactName = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.36px;
  line-height: 28px;
  margin-top: 2px;
  color: white;
`;
const LastText = styled.span`
  font-size: 14px;
  padding: 5px 0 0 0;
  color: ${({ isUnread }) => (isUnread ? "white" : "#888")};
  font-weight: 500;
  margin-right: 5px;
  width: 185px;
`;

const LastTextTime = styled.span`
  font-weight: 500;
  padding: 15px 0 0 0;
  margin-right: 24px;
  margin-top: ${({ hasUnread }) => (hasUnread ? "30px" : "10px")};
  font-size: 14px;
  color: #aaa;
`;
const SearchIcon = styled.img`
  cursor: pointer;
`;
const EllipsisIcon = styled.img`
  cursor: pointer;
`;
const UsersIcon = styled.img`
  height: 21px;
  width: 25px;

  cursor: pointer;
`;

const MessagesHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin-top: 6px;
  color: white;
`;
const StatusText = styled.span`
  margin-top: 2px;
  font-size: 15px;
  color: #aaa;
`;
const Profilename = styled.div`
  height: 28px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0.36px;
  line-height: 28px;
`;
const RightIcon = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 38px;
  position: relative;
  ${
    "" /* margin-left: ${({ windowWidth }) => (windowWidth < 750 ? "20%" : "0")}; */
  }
`;
const StrokeImage = styled.img`
  height: 19px;
  position: relative;
  width: 19px;
`;
const VectorImage = styled.img`
  height: 15px;
  position: relative;
  width: 20px;
`;
const SearchI = styled.img`
  height: 22px;
  position: relative;
  width: 22px;
`;

const ContactGreenDot = styled.div`
  background-color: #08ad2c;
  border-radius: 50%;
  top: 34%;
  margin-left: 3%;

  display: block;
  width: 10px;
  height: 10px;
  position: fixed;
  border: 1px solid;
  border-color: #ffffff;
`;
const RightList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const UnreadIcon = styled.div`
  background-color: #ce5988;
  border-radius: 50%;
  height: 26px;
  position: absolute;
  width: 26px;
  display: ${({ hasUnread }) => (hasUnread ? "block" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
`;
const Status = styled.div`
  color: #aaa;
  font-size: 16px;
  font-weight: 400;
`;
const Middle = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;
const LeftCard = styled.div`
  height: calc(100% - 272px);
`;
const ProfileBox = styled.div``;
const ProfileInfoContainer = styled.div`
  height: ${({ profileInfoOpen }) => (profileInfoOpen ? "100%" : "0")};
  ${"" /* display: block; */}
  display: ${({ profileInfoOpen }) => (profileInfoOpen ? "block" : "none")};
  width: ${({ profileInfoOpen, windowWidth }) =>
    profileInfoOpen && windowWidth < 750 ? "100%" : "381px"};
  ${
    "" /* width: ${({ profileInfoOpen }) => (profileInfoOpen ? "381px" : "0")}; */
  }
  background-color: #181818;
  position: relative;
`;
const CloseIcon = styled.img`
  top: 105px;
  left: 39px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const ContactDetails = styled.div`
  height: 982px;
  position: relative;
  width: 281px;
  padding: 100px 61px 64px 39px;
  @media (max-width: 750px) {
    padding-left: 159px;
  }
`;
const Frame = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding: 47px 23px 0 0;
`;

const ContactProfilePic = styled.img`
  height: 140px;
  width: 140px;
`;
const Contactname = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.48px;
`;
const Contactphone = styled.div`
  color: #ffffff;
  font-size: 18px;
  margin-top: -23px;
  font-weight: 400;
  left: 0;

  letter-spacing: 0.36px;
  opacity: 0.55;

  top: 0;
`;
const Line = styled.img`
  padding-top: 9px;
`;
const MiddleFrame = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  width: 280px;
  padding: 37px 23px 0 0;
`;
const Seeall = styled.img`
  margin-left: auto;
`;
const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  flex-direction: row;
  padding: 24px 0 0 0;
`;
const Image1 = styled.img`
  height: 100px;
  width: 82px;
`;
const Image2 = styled.img`
  height: 100px;
  width: 82px;
`;

const LowerFrame = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 37px 23px 0 0;
`;
const StarredMsgHeading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 37px 23px 0 0;
`;
const Image3Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-direction: row;
  position: relative;
`;

const Image3 = styled.img`
  width: 82px;
  height: 100px;
`;

const Imageinside3 = styled.img`
  position: absolute;
  bottom: 43px;
  right: 30px;
  height: 13px;
  width: 27px;
`;
// const FileInfo = styled.div`
//   color: white;
//   align-items: flex-start;
//   display: inline-flex;
//   flex-direction: column;
//   gap: 16px;
//   position: relative;
// `;
const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 0 0 0;
`;

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FileIconContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  height: 42px;
  left: 0;
  position: relative;
  top: 0;
  width: 42px;
`;
const FileIcon = styled.img`
  left: 9px;
  position: absolute;
  padding: 0px;
  top: 7px;
  width: 25px;
  height: 27px;
`;

const FileDetails = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.28px;
  display: flex;

  flex-direction: column;
`;

const Box = styled.img`
  background-color: #f3f1f4;
  border-radius: 12px;
  height: 42px;

  width: 42px;
`;
const FileName = styled.div`
  color: #ffffff;
  letter-spacing: 0.32px;
  font-size: 16px;
  font-weight: 400;
`;

const FileSize = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.28px;
  opacity: 0.5;
`;
const MiddleLeft = styled.div`
  display: flex;
  width: 422px;
  padding: 28px 0 0 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Headdiv = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
`;
const OnlineHeading = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.4px;
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;
const Onlineno = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0;
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;

const SeeallOnline = styled.div`
  font-size: 18px;
  font-weight: 500;
  flex: 0 0 auto;
  position: relative;
  color: white;
`;
const OnlineProfileBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 422px;
  margin-top: 12px;
`;
const LMiddle = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 28px;
  height: 162px;
`;

const BackButton = styled.img`
  background-color: white;

  position: absolute;
  top: 105px;
  left: 39px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const CancelButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const MenuOptions = styled.div`
  top: -73px;
  position: absolute;
  color: white;
  background-color: #333; /* Background color for the menu */
  border-radius: 8px;
  padding: 10px;
  display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
  flex-direction: column;

  button {
    margin-bottom: 8px;
    padding: 8px;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: black; /* Background color on hover */
    }
  }
`;
const ContactListDiv = styled.div`
  max-height: calc(100% - 28px);
  overflow: auto;

  height: calc(100% - 28px);
  @media (max-width: 750px) {
    overflow: auto;
  }
`;
const Profile = styled.div`
  display: flex;
`;
const PlusB = styled.div`
  position: relative;
`;
const ZoomedProfilePic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
`;
const Dashboard = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactList);
  const [pickerVisible, togglePicker] = useState(false);
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState(messagesList);
  const [profileInfoOpen, setProfileInfoOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [profileZoomViewOpen, setProfileZoomViewOpen] = useState(false);
  const [zoomedProfilePic, setZoomedProfilePic] = useState(null);
  const messageContainerRef = useRef(null);
  useEffect(() => {
    // Check if the message container ref is available
    if (messageContainerRef.current) {
      // Scroll to the bottom of the message container
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleBackClick = () => {
    setSelectedContact(null);
  };
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const toggleProfileInfo = () => {
    setProfileInfoOpen(!profileInfoOpen);
    console.log("Profile Info Open:", profileInfoOpen);
  };
  const closeProfileInfo = () => {
    console.log("Close icon clicked");

    setProfileInfoOpen(false);
    console.log(profileInfoOpen);
  };

  const handleSearchInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    const filtered = contactList.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };
  // const handleBackClick = () => {
  //   setSelectedContact(null);
  // };

  const onEmojiClick = (event, emojiObj) => {
    setText(text + emojiObj.emoji);
    togglePicker(false);
  };

  const onEnterPress = async (event) => {
    if (event.key === "Enter") {
      const messages = [...messageList];
      messages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "05:09PM",
      });
      setMessageList(messages);
      setText("");
      setTimeout(() => {
        let el = document.getElementById("chat-container");
        if (el && el.scrollHeight) {
          el.scrollTo(0, el.scrollHeight);
        }
      }, 100);
      // let el = document.getElementById("chat-container");
      // if (el && el.scrollHeight) {
      //   el.scrollTo(0, el.scrollHeight + 50);
      // }
    }
  };
  // Dummy user profile data
  const dummyUserProfile = {
    name: "Kazuraba",
    status: "online",
    profilePic: "/download.png",
  };
  const onlineContacts = contactList.filter(
    (contact) => contact.ShowOnline === "On"
  );
  const handleImageClick = () => {
    // Trigger the file input for image upload
    fileInputRef.current.accept = "image/*"; // Optional: Limit to image files
    fileInputRef.current.click();
    setMenuOpen(false);
  };

  const handleVideoClick = () => {
    // Trigger the file input for video upload
    fileInputRef.current.accept = "video/*"; // Optional: Limit to video files
    fileInputRef.current.click();
    setMenuOpen(false);
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return; // No file selected, do nothing
    }

    const fileType = selectedFile.type.split("/")[0]; // "image" or "video"

    if (fileType === "image") {
      const imageUrl = URL.createObjectURL(selectedFile);
      const newImageMessage = {
        id: messageList.length + 1, // Assign a unique ID based on the length of the current messageList
        messageType: "IMAGE",
        image: [imageUrl],
        senderID: 0,
        addedOn: "05:09PM",
      };
      setMessageList([...messageList, newImageMessage]);
      setTimeout(() => {
        let el = document.getElementById("chat-container");
        if (el && el.scrollHeight) {
          el.scrollTo(0, el.scrollHeight);
        }
      }, 100);
    } else if (fileType === "video") {
      // Handle video upload
      const videoUrl = URL.createObjectURL(selectedFile);
      const newVideoMessage = {
        id: messageList.length + 1, // Assign a unique ID based on the length of the current messageList
        messageType: "VIDEO",
        video: [videoUrl],
        senderID: 0,
        addedOn: "05:09PM",
      };
      setMessageList([...messageList, newVideoMessage]);
      setTimeout(() => {
        let el = document.getElementById("chat-container");
        if (el && el.scrollHeight) {
          el.scrollTo(0, el.scrollHeight);
        }
      }, 100);
    }
    setFileUploaded(true);
    e.target.value = null;
  };
  const openProfileZoomView = (profilePic) => {
    setZoomedProfilePic(profilePic);
    setProfileZoomViewOpen(true);
  };

  const closeProfileZoomView = () => {
    setZoomedProfilePic(null);
    setProfileZoomViewOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container className="container">
        <CardContainer
          className="cardcontainer"
          chatSelected={selectedContact !== null}
        >
          <HeaderContainer>
            {" "}
            <Header className="header">
              <Image
                src={dummyUserProfile.profilePic}
                alt={dummyUserProfile.name}
                status={dummyUserProfile.status}
              />
              <Profileinfo className="profileinfo">
                <Typography>{dummyUserProfile.name}</Typography>
                <StatusText>{dummyUserProfile.status}</StatusText>
              </Profileinfo>
              <IconContainer className="iconcontainer">
                {/* <UsersIcon icon={faUsers} /> */}
                <UsersIcon src={"/3-User.png"} />
                <SearchIcon src={"/search.png"} />
                <EllipsisIcon src={"/dots.png"} />
              </IconContainer>
            </Header>
          </HeaderContainer>
          <LMiddle className="lmiddle">
            <MiddleLeft>
              <Headdiv>
                <OnlineHeading>Online Friends</OnlineHeading>

                <Onlineno>(18)</Onlineno>
              </Headdiv>
              {/* <SeeallOnline src={"SeallOnline.png"} /> */}
              <SeeallOnline>See all</SeeallOnline>
            </MiddleLeft>
            <OnlineProfileBox>
              {onlineContacts.map((profile) => (
                <div key={profile.id}>
                  <Image src={profile.profilePic} status={profile.status} />
                </div>
              ))}
            </OnlineProfileBox>
          </LMiddle>
          <LeftCard className="left-card">
            <MessagesHeading className="message">Messages</MessagesHeading>
            <ContactListDiv className="list-div">
              {filteredContacts.map((contact) => (
                <CustomListItem
                  className="customlist"
                  key={contact.id}
                  onClick={() => handleContactClick(contact)}
                >
                  <ProfileBox className="profilebox">
                    <Image
                      src={contact.profilePic}
                      alt={contact.name}
                      status={contact.status}
                    />
                  </ProfileBox>
                  <ListItemContent className="list-item-content">
                    <ContactName className="contact-name">
                      {contact.name}
                    </ContactName>
                    {contact.seen === "unread" ? (
                      <LastText className="last-text" isUnread>
                        {contact.lastText}
                      </LastText>
                    ) : (
                      <LastText>{contact.lastText}</LastText>
                    )}
                  </ListItemContent>
                  <RightList className="right-list">
                    {contact.seen === "unread" && (
                      <UnreadIcon hasUnread={true}>1</UnreadIcon>
                    )}
                    <LastTextTime hasUnread={contact.seen === "unread"}>
                      {contact.lastTextTime}
                    </LastTextTime>
                  </RightList>
                </CustomListItem>
              ))}
            </ContactListDiv>
          </LeftCard>
        </CardContainer>
        <InnerContainer
          className="innercontainer"
          chatSelected={selectedContact !== null}
          // onClick={toggleProfileInfo}
          style={{
            display: windowWidth < 750 && profileInfoOpen ? "none" : "flex",
          }}
        >
          {windowWidth < 750 && (
            <BackButton
              src="/backbutton.jpg"
              alt="Back"
              onClick={handleBackClick}
            />
          )}
          {selectedContact ? (
            <>
              <ProfileHeader
                className="profile-header"
                onClick={toggleProfileInfo}
              >
                <Profile className="profile-name">
                  <SelectedProfile
                    className="selected-profile"
                    src={selectedContact.profilePic}
                  />
                  <Middle className="middle">
                    <Profilename className="profile-name">
                      {selectedContact.name}
                    </Profilename>
                    {selectedContact.status === "online" && (
                      <Status>Online</Status>
                    )}
                  </Middle>
                </Profile>
                {!profileInfoOpen && (
                  <RightIcon className="right-icon" windowWidth={windowWidth}>
                    <StrokeImage src={"/stroke.png"} />
                    <VectorImage src={"/vector.png"} />
                    <SearchI src={"/search.png"} />
                  </RightIcon>
                )}
              </ProfileHeader>
              <MessageList
                className="message-list"
                messageList={messageList}
                ref={messageContainerRef}
              />

              <BottomCard className="bottom-card">
                <EmojiPickerContainer>
                  {pickerVisible && (
                    <EmojiPicker
                      onEmojiClick={onEmojiClick}
                      pickerStyle={{
                        position: "absolute",
                      }}
                    />
                  )}
                </EmojiPickerContainer>
                <EmojiImage
                  src={"/group-451.png"}
                  onClick={() => togglePicker(!pickerVisible)}
                />
                <PlusB className="plus-B">
                  <PlusImage
                    className="plus-image"
                    src={"/plus.png"}
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu state when PlusImage is clicked
                  />

                  <MenuOptions className="menu-option" menuOpen={menuOpen}>
                    <button onClick={handleImageClick}>Image</button>
                    <button onClick={handleVideoClick}>Video</button>
                  </MenuOptions>
                </PlusB>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                <MessageInput
                  placeholder="Write a message ..."
                  value={text}
                  onKeyDown={onEnterPress}
                  onChange={(e) => setText(e.target.value)}
                />
                <AudioImage src={"/audio.png"} />
              </BottomCard>
            </>
          ) : (
            <WelcomePage>
              <Typography>Select a contact to start a conversation.</Typography>
            </WelcomePage>
          )}
        </InnerContainer>

        <ProfileInfoContainer
          className="profile-info-container"
          profileInfoOpen={profileInfoOpen}
          windowWidth={windowWidth}
        >
          <ContactDetails className="contact-details">
            {profileInfoOpen && (
              <>
                <CloseIcon
                  src="/close.png"
                  alt="Close"
                  onClick={closeProfileInfo}
                />

                <Frame>
                  {selectedContact && (
                    <>
                      <ContactProfilePic
                        src={selectedContact.profilePic}
                        onClick={() =>
                          openProfileZoomView(selectedContact?.profilePic)
                        }
                      />
                      {profileZoomViewOpen && (
                        <FullScreenImage
                          imageUrl={zoomedProfilePic}
                          onClose={closeProfileZoomView}
                        />
                      )}

                      <Contactname>{selectedContact.name}</Contactname>
                      <Contactphone>{selectedContact.number}</Contactphone>
                    </>
                  )}

                  <Line src={"Line.png"} />
                </Frame>
                <MiddleFrame>
                  <div
                    style={{
                      color: "#180a29",
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                      position: "absolute",
                    }}
                  >
                    Media
                  </div>

                  <Seeall src={"Seeall.png"} />
                </MiddleFrame>
                <ImageBox>
                  <Image1 src={"Rectangle15.png"} />
                  <Image2 src={"Rectangle16.png"} />
                  <Image3Container>
                    <Image3 src="Rectangle17.png" alt="Image 3" />
                    <Imageinside3 src="+10.png" alt="Image Inside 3" />
                  </Image3Container>
                </ImageBox>
                <LowerFrame>
                  <div
                    style={{
                      color: "#180a29",
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                      position: "absolute",
                    }}
                  >
                    Files
                  </div>

                  <Seeall src={"Seeall.png"} />
                </LowerFrame>
                <FileInfo>
                  {selectedContact?.files?.map((file, index) => (
                    <FileContainer key={index}>
                      <FileIconContainer>
                        <FileIcon src={file.fileicon} alt="File Icon" />
                      </FileIconContainer>

                      <FileDetails>
                        <FileName>{file.filename}</FileName>
                        <FileSize>{file.filesize}</FileSize>
                      </FileDetails>
                    </FileContainer>
                  ))}
                </FileInfo>
                <StarredMsgHeading>
                  <div
                    style={{
                      color: "#180a29",
                      fontSize: "18px",
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                      position: "absolute",
                    }}
                  >
                    Starred Messages
                  </div>

                  <Seeall src={"Seeall.png"} />
                </StarredMsgHeading>
              </>
            )}

            {profileInfoOpen && <div></div>}
          </ContactDetails>
        </ProfileInfoContainer>
      </Container>
    </>
  );
};

export default Dashboard;

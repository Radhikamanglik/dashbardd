import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { contactList, messagesList } from "../mockData";
import {
  Avatar as MuiAvatar,
  Card as MuiCard,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  ListItemText as MuiListItemText,
  Typography as MuiTypography,
} from "@mui/material";
import EmojiPicker from "emoji-picker-react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: red !important;
  color: #000;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
const ProfileInfo = styled.div`
  width: 300px;
  padding: 20px;
  border-right: 1px solid #ddd;
`;

const Card = styled(MuiCard)`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #191c24;
  color: #000;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const CustomListItem = styled(MuiListItem)`
  ${"" /* background-color: #fff; */}
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Avatar = styled(MuiAvatar)`
  width: 80px;
  height: 80px;
`;

const ListItemAvatar = styled(MuiListItemAvatar)`
  width: 40px;
  height: 40px;
`;

const Typography = styled(MuiTypography)`
  font-size: 16px;
`;

const WelcomePage = styled.div`
  text-align: center;
  margin-top: 20%;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  flex: 1;
  padding: 10px;

  overflow-y: auto;
  background: #e5ddd6;
`;

const MessageDiv = styled.div`
  display: flex;
  ${"" /* flex-direction: column; */}
  justify-content: ${({ isUsers }) => (isUsers ? "left" : "right")};
  ${
    "" /* justify-content: ${(props) => (props.isUsers ? "flex-end" : "flex-start")}; */
  }
`;

const Message = styled.div`
  background: ${(props) => (props.isUsers ? "white" : "#1e90ff")};
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  text-align: ${({ isUsers }) => (isUsers ? "left" : "right")};
`;

const ProfilePic = styled(Avatar)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const BottomCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;

  align-items: center;
  bottom: 0;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #fff;
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
  width: 28px;
  height: 28px;

  border-radius: 40%;
  opacity: 0.2;
  cursor: pointer;
`;
const EmojiPickerContainer = styled.div`
  position: relative;
`;
const PlusImage = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 40%;
  opacity: 0.2;
  cursor: pointer;
`;
const AudioImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 40%;
  opacity: 0.2;
  cursor: pointer;
`;
const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactList);
  const [pickerVisible, togglePicker] = useState(false);
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState(messagesList);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSearchInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    const filtered = contactList.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };
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
    }
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Header>
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchText}
              onChange={handleSearchInputChange}
              style={{ width: "50%", padding: "10px", marginBottom: "10px" }}
            />
          </Header>

          {filteredContacts.map((contact) => (
            <CustomListItem
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              button
            >
              <ListItemAvatar>
                <Avatar
                  src={contact.profilePic}
                  alt={contact.name}
                  sx={{ width: 40, height: 40 }}
                />
              </ListItemAvatar>
              <MuiListItemText
                primary={contact.name}
                secondary={contact.lastText}
                sx={{ color: "#000" }}
              />

              <MuiTypography variant="caption" color="textSecondary">
                {contact.lastTextTime}
              </MuiTypography>
            </CustomListItem>
          ))}
        </Card>
        <InnerContainer>
          <Card>
            {selectedContact ? (
              <>
                <ProfileHeader>
                  <ProfilePic src={selectedContact.profilePic} />
                  <Typography variant="h5">{selectedContact.name}</Typography>
                </ProfileHeader>
                <MessageContainer>
                  {messageList?.map((message) => (
                    <MessageDiv isUsers={message.senderID === 1}>
                      <Message isUsers={message.senderID === 1}>
                        {message?.text}
                      </Message>
                      {/* <div>{message.addedOn}</div> */}
                    </MessageDiv>
                  ))}
                </MessageContainer>

                <BottomCard>
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
                    src={"/face-smile-regular.svg"}
                    onClick={() => togglePicker(!pickerVisible)}
                  />
                  <PlusImage src={"/plus.png"} />

                  <MessageInput
                    placeholder="Enter your message..."
                    value={text}
                    onKeyDown={onEnterPress}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <AudioImage src={"/audio.jpg"} />
                </BottomCard>
              </>
            ) : (
              <WelcomePage>
                <Typography variant="h4" gutterBottom>
                  Welcome to ChatApp
                </Typography>
                <Typography variant="body1">
                  Select a contact to start a conversation.
                </Typography>
              </WelcomePage>
            )}
          </Card>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Chat;

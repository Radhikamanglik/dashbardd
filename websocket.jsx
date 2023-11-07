import React from "react";

import socketio from "socket.io-client";

const localhost = "https://bb55-116-75-244-114.ngrok-free.app";

export const socket = socketio.connect(localhost);

export const SocketContext = React.createContext();

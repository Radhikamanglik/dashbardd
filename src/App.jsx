import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chats";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

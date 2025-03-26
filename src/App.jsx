import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Signin from "./Signin";
import Profile from "./profile";
import AuthGuard from "./AuthGuard";
import Chat from "./chat";


const App = () => {
  return (
    <div className="profile-box">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="profile" element={<AuthGuard> <Profile /> </AuthGuard> }/>
          <Route path="chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

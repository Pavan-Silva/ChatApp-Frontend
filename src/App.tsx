import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
      <BrowserRouter basename="/ChatApp-Frontend/">
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/chat" Component={ChatPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import AppStly from "./App.module.scss";
import "./global.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav-bar/nav-bar";
import Dashboard from "./components/dashboard/dashboard";
import Jobs from "./components/jobs/jobs";
import Profile from "./components/profile/profile";
import Chat from "./components/chat/chat";
import Calendar from "./components/calendar/calendar";
import Settings from "./components/settings/settings";

function App() {
  return (
    <div className={AppStly.App}>
      <Header />
      <div className={AppStly.container}>
        <div className={AppStly.smallContainer}>
          <NavBar />
        </div>
        <div className={AppStly.bigContainer}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

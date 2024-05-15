import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Workout from "./pages/Workout/Workout";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Exercises from "./pages/Exercises";
import Upgrade from "./pages/Upgrade";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Workout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="upgrade" element={<Upgrade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

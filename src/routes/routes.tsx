import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Index";
import Practice from "../pages/Practice/Practice";
import Hiragana from "../pages/Alphabet/Hiragana/Hiragana";
import AiChat from "../pages/AiChat/AiChat";
import Introduce from "../pages/Introduce/Introduce";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/Login";
import Lesson from "../pages/Lesson/Lesson";
import Upgrade from "../pages/Upgrade/Upgrade";
import Vocabulary from "../pages/Vocabulary/VOcabulary";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/alphabet/hiragana" element={<Hiragana />} />
      <Route path="/aichat" element={<AiChat />} />
      <Route path="/intro" element={<Introduce />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/lesson/:id" element={<Lesson />} />
      <Route path="/upgrade" element={<Upgrade />} />
      <Route path="/vocabulary/:id" element={<Vocabulary />} />
    </Routes>
  );
};

export default AppRoutes;

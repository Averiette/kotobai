import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Index";
import Practice from "@pages/Practice/Practice";
import PracticeDetail from "@pages/Practice/PracticeDetail";
import Hiragana from "@pages/Alphabet/Hiragana/Hiragana";
import AiChat from "@pages/AiChat/AiChat";
import Introduce from "@pages/Introduce/Introduce";
import SignUp from "@pages/SignUp/SignUp";
import LogIn from "@pages/LogIn/Login";
import Lesson from "@pages/Lesson/Lesson";
import Upgrade from "@pages/Upgrade/Upgrade";
import Vocabulary from "@pages/Vocabulary/Vocabulary";
import Dialogue from "@pages/Dialogue/Dialogue";
import DialogueDone from "@pages/DialogueDone/DialogueDone";
import Grammar from "@pages/Grammar/Grammar";
import Payment from "@pages/Payment/Payment";
import PaymentResultHandler from "@Components/PaymentResultHandler/PaymentResultHandler";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <PaymentResultHandler />
            <Home />
          </>
        }
      />
      <Route
        path="/upgrade"
        element={
          <>
            <PaymentResultHandler />
            <Upgrade />
          </>
        }
      />
      <Route path="/practice" element={<Practice />} />
      <Route path="/practice/:id" element={<PracticeDetail />} />
      <Route path="/alphabet/hiragana" element={<Hiragana />} />
      <Route path="/aichat" element={<AiChat />} />
      <Route path="/" element={<Introduce />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/lesson/:id" element={<Lesson />} />
      <Route path="/vocabulary/:id" element={<Vocabulary />} />
      <Route path="/dialogue/:id" element={<Dialogue />} />
      <Route path="/dialogue/done" element={<DialogueDone />} />
      <Route path="/grammar" element={<Grammar />} />
      <Route path="/payment/:id" element={<Payment />} />
    </Routes>
  );
};

export default AppRoutes;

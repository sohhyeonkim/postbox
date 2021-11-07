import React from "react";
import Mailform from "./components/Mailform";
import Mypage from "./components/Mypage";
import Withdrawal from "./components/Withdrawal";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mailform />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/withdraw" element={<Withdrawal />} />
      </Routes>
    </>
  );
}

export default App;

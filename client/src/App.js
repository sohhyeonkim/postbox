import React from "react";
import Mailform from "./components/Mailform";
import Mypage from "./components/Mypage";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mailform />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;

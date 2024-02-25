import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Edit from "./components/Edit";
import Create from "./components/Create";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

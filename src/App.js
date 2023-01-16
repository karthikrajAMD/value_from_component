import "./App.css";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ActionAreaCard from "./ActionAreaCard";
import Drawer from "./Drawer";
import Chart from "./Chart";
import Navbar from "./Navbar";
import React from "react";
import Profile from "./Profile";

import { Context } from "./Context";
import { useState } from "react";
import Cardbody from "./Cardbody";

function App() {
  const [context, setContext] = useState("block");
  return (
    <>
      <div className="app">
        <Context.Provider value={[context, setContext]}>
          <div className="sidebar-app">
            <Drawer />
          </div>
          <div className="content-col   ">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/facts" element={<ActionAreaCard />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/card" element={<Cardbody />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Context.Provider>
      </div>
    </>
  );
}

export default App;

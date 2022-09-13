import "./App.css";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ActionAreaCard from "./ActionAreaCard";
import Drawer from "./Drawer";
import Chart from "./Chart";
import Navbar from "./Navbar";
import React from "react";
import Piechart from "./Piechart";
import { Context } from "./Context";
import { useState } from "react";
function App() {
  const [context, setContext] = useState("block");
  return (
    <>
      <div className="app">
        <Context.Provider value={[context, setContext]}>
          <div>
            <Drawer />
          </div>
          <div className="content-col   ">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Card" element={<ActionAreaCard />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/pie" element={<Piechart />} />
            </Routes>
          </div>
        </Context.Provider>
      </div>
    </>
  );
}

export default App;

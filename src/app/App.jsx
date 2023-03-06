import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth";
import DataUser from "../pages/dataUser";
import './../style/style.css'

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/:id" element={<DataUser />} />
      </Routes>
    </div >
  )
}

export default App

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;

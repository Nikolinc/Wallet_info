import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
}

export default App;

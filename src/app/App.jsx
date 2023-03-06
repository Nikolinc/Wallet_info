import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getTokenStore } from "../hooks/useValidation";
import './../style/style.css'

function App() {
  const navigate = useNavigate();

  if (getTokenStore()) {
    return navigate(`/wallet/${localStorage.getItem("token")}`);
  } else {
    return navigate(`/auth`);
  }
}

export default App

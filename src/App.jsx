import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <>
      <LoginForm />
      <SignupForm />
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import './styles/main.css'
import { HowToUse } from "./components/HowToUse";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <HowToUse/>
    </div>
  );
}

export default App;

import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ProfilPhoto from "./component/profil/ProfilPhoto";
import FullName from "./component/profil/FullName";
import Address from "./component/profil/Address";
import Project from "./component/profil/Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <ProfilPhoto />
          <div>
            <FullName />
            <Address />
            <Project />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

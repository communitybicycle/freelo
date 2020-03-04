import React from "react";

import AppBar from "./components/AppBar";
import Board from "./components/Board";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Board />
      </div>
    );
  }
}

export default App;

import React from "react";

import AppBarHeader from "./components/AppBarHeader";
import Board from "./components/Board";
import styled from "styled-components";
import "./App.css";

const Application = styled.div`
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Application classname="App">
        <AppBarHeader />
        <Board />
      </Application>
    );
  }
}

export default App;

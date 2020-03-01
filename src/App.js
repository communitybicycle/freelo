import React from "react";
import DraggableCollection from "./components/DraggableCollection";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DraggableCollection />
      </div>
    );
  }
}

export default App;

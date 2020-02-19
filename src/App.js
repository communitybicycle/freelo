import React from "react";
import Boards from "./components/boards";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: 2
    };
  }

  handleNewTable = () => {
    if (this.state.boards < 4) {
      this.setState({
        boards: this.state.boards + 1
      });
    }
  };

  render() {
    var boards = [];
    for (let i = 0; i < this.state.boards; i++) {
      boards.push(<Boards />);
    }
    return (
      <div className="App">
        <h1>Trello</h1>
        <div id="container">
          {boards}
          <div onClick={this.handleNewTable}>+ Add a New Board</div>
        </div>
      </div>
    );
  }
}

export default App;

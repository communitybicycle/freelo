import React from "react";
import Header from "./header";
import Items from "./items";

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Throw out the trash", "Do the dishes"]
    };
  }
  handleItemEdit = id => {
    console.log(id);
  };

  render() {
    return (
      <div className="table">
        <div className="header">
          <Header />
        </div>
        <hr />
        <div className="items">
          <Items />
        </div>
      </div>
    );
  }
}

export default Boards;

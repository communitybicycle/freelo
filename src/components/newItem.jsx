import React from "react";

class NewItem extends React.Component {
  render() {
    return (
      <div className="new-item" onClick={this.props.handleNewItem}>
        <p>+ Add a New Item</p>
      </div>
    );
  }
}

export default NewItem;

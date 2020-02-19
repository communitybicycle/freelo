import React from "react";

class RightClickMenu extends React.Component {
  render() {
    return (
      <div className={this.props.menuVisibility}>
        <ul className="menu right-click">
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    );
  }
}

export default RightClickMenu;

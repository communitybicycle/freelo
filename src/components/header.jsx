import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.state = {
      title: "Todos",
      isInEditMode: false
    };
  }

  changeEditMode = e => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateTitle = () => {
    this.setState({
      isInEditMode: false,
      title: this.titleInput.current.value
    });
  };

  renderEditView = () => {
    return (
      <>
        <input
          type="text"
          className="header-input"
          defaultValue={this.state.title}
          spellCheck="false"
          maxLength="12"
          ref={this.titleInput}
          onBlur={this.updateTitle}
          autoFocus
        />
      </>
    );
  };

  renderDefaultView = () => {
    return (
      <h2 className="header-text" onClick={this.changeEditMode}>
        {this.state.title}
      </h2>
    );
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Header;

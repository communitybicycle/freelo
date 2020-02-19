import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      text: this.props.item.text,
      isInEditMode: this.props.item.isInEditMode
    };
  }

  handleItemEdit = event => {
    console.log(event.target);
  };

  changeEditMode = e => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateText = () => {
    this.setState({
      isInEditMode: false,
      text: this.textInput.current.value
    });
  };

  renderEditView = () => {
    return (
      <div className="item">
        <textarea
          className="item-input"
          defaultValue={this.state.text}
          spellCheck="false"
          ref={this.textInput}
          onBlur={this.updateText}
          autoFocus
        />
      </div>
    );
  };

  renderDefaultView = () => {
    return (
      <div
        className="item"
        id={this.props.id}
        onClick={this.changeEditMode}
        key={this.props.id}
      >
        {this.state.text}
      </div>
    );
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Item;

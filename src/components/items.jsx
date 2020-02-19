import React from "react";
import Item from "./item";
import NewItem from "./newItem";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.state = {
      items: [
        { text: "Throw out the trash", isInEditMode: false },
        { text: "Do the dishes", isInEditMode: false }
      ]
    };
  }

  handleNewItem = () => {
    console.log("CLICIEKDE");
    const newItem = "Test";
    this.setState({
      items: [...this.state.items, { text: newItem, isInEditMode: true }]
    });
  };

  render() {
    return (
      <>
        {this.state.items.map(item => {
          const id = "table0-" + this.state.items.indexOf(item);
          return (
            <Item id={id} onClick={this.handleItemEdit} key={id} item={item} />
          );
        })}
        <NewItem handleNewItem={this.handleNewItem} />
      </>
    );
  }
}

export default Items;

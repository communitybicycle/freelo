import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNewTask,
  editCollectionTitle,
  saveCollectionTitle
} from "../actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TextareaAutosize from "react-textarea-autosize";
import Task from "./Task";
import {
  Container,
  Header,
  Title,
  TitleInput,
  TaskList,
  Footer
} from "./CollectionStyles";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.column.title
    };
  }

  handleNewTask = () => {
    this.props.addNewTask(this.props.column.id);
  };

  handleEditTitle = () => {
    this.props.editCollectionTitle(this.props.column.id);
  };

  handleMoveCursorToEnd = evt => {
    evt.target.setSelectionRange(
      evt.target.value.length,
      evt.target.value.length
    );
  };

  handleChange = evt => {
    this.setState({ title: evt.target.value });
  };

  handleKeyPress = evt => {
    if (evt.key === "Enter") {
      this.props.saveCollectionTitle(this.props.collectionId, this.state.title);
    }
  };

  handleDeselect = evt => {
    // evt.stopPropagation();
    this.props.saveCollectionTitle(this.props.collectionId, this.state.title);
  };

  renderCollectionTitle = () => {
    const { editingCollectionTitle, collectionId } = this.props;
    if (editingCollectionTitle && editingCollectionTitle === collectionId) {
      return (
        <TitleInput onBlur={this.handleDeselect}>
          <TextareaAutosize
            ref={node => (this.textArea = node)}
            name="test"
            id="collection-textarea"
            defaultValue={this.state.title}
            onFocus={this.handleMoveCursorToEnd}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Enter list title..."
            autoFocus
          />
        </TitleInput>
      );
    }
  };

  render() {
    const { editingCollectionTitle, collectionId, index } = this.props;
    return (
      <Draggable draggableId={collectionId} index={index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Header {...provided.dragHandleProps}>
              {editingCollectionTitle &&
              editingCollectionTitle === collectionId ? (
                this.renderCollectionTitle()
              ) : (
                <Title onClick={this.handleEditTitle}>
                  {this.props.column.title}
                </Title>
              )}
              <MoreHorizIcon />
            </Header>
            <Droppable droppableId={collectionId}>
              {provided => (
                <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                  {this.props.tasks.map((task, index) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={index}
                      columnId={collectionId}
                    />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
            <Footer onClick={this.handleNewTask}>+ Add another card</Footer>
          </Container>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => {
  return { editingCollectionTitle: state.board.meta.editingCollectionTitle };
};

const mapDispatchToProps = {
  addNewTask,
  editCollectionTitle,
  saveCollectionTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { editTask, saveTask, deleteTask } from "../actions";

const Container = styled.div`
  background: #fafafa;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  padding: 6px;
  margin-bottom: 8px;
  min-height: 17px;
  overflow-wrap: break-word;
`;

const Textbox = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 8px;

  textarea {
    display: block;
    resize: none;
    border: none;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
    outline: none;
    width: 236px;
    min-height: 17px;
    padding: 6px;
    font-weight: 300;
    font-size: 14px;
  }
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.task.content
    };
  }

  saveTask = () => {
    this.state.content === ""
      ? this.props.deleteTask(this.props.task.id, this.props.columnId)
      : this.props.saveTask(this.props.task.id, this.state.content);
  };

  handleClick = () => {
    this.props.editTask(this.props.task.id);
  };

  handleMoveCursorToEnd = evt => {
    evt.target.setSelectionRange(
      evt.target.value.length,
      evt.target.value.length
    );
  };

  handleChange = evt => {
    this.setState({ content: evt.target.value });
  };

  handleKeyPress = evt => {
    if (evt.key === "Enter") {
      this.saveTask();
    }
  };

  handleDeselect = evt => {
    // evt.stopPropagation();
    this.saveTask();
  };

  renderTask = () => {
    if (
      this.props.editingTask &&
      this.props.editingTask === this.props.task.id
    ) {
      return (
        <Textbox onBlur={this.handleDeselect}>
          <TextareaAutosize
            ref={node => (this.textArea = node)}
            name="task-textarea"
            id="task-textarea"
            defaultValue={this.props.task.content}
            onFocus={this.handleMoveCursorToEnd}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Enter a new title for this task..."
            autoFocus
          />
        </Textbox>
      );
    }
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={this.props.editingTask !== false}
      >
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={this.handleClick}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  };

  render() {
    console.log("RENDERING TASK");
    return this.renderTask();
  }
}

const mapStateToProps = state => {
  return { ...state.board.meta };
};

const mapDispatchToProps = {
  editTask,
  saveTask,
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

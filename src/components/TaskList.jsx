import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

class TaskList extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id}>
        {provided => <Task ref={provided.innerRef} />}
      </Draggable>
    );
  }
}

export default TaskList;

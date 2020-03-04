import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background: #fafafa;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  padding-left: 6px;
  margin-bottom: 8px;
  min-height: 29px;
  display: flex;
  align-items: center;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  moveCollections,
  moveTaskWithinCollection,
  moveTaskAcrossCollections
} from "../actions";
import styled from "styled-components";
import Collection from "./Collection";

const Container = styled.div`
  background-color: #f1f4f7;
  height: 100%;
  padding: 23px 72px 0 72px;

  display: flex;
  align-items: flex-start;
`;

class Board extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Moving collections
    if (type === "column") {
      const newColumnOrder = Array.from(this.props.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      this.props.moveCollections(newColumnOrder);
      return;
    }

    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];

    // Movement within collection
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      this.props.moveTaskWithinCollection(source.droppableId, newColumn);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    this.props.moveTaskAcrossCollections(newStart, newFinish);
    return;
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.columnOrder.map((columnId, index) => {
                const column = this.props.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => this.props.tasks[taskId]
                );

                return (
                  <Collection
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.board };
};

const mapDispatchToProps = {
  moveCollections,
  moveTaskWithinCollection,
  moveTaskAcrossCollections
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

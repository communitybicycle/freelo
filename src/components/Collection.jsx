import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTask } from "../actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Task from "./Task";
import { Container, Header, Title, TaskList, Footer } from "./CollectionStyles";

class Collection extends Component {
  handleNewTask = () => {
    this.props.addNewTask(this.props.column.id);
  };

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Header {...provided.dragHandleProps}>
              <Title>{this.props.column.title}</Title>
              <MoreHorizIcon />
            </Header>
            <Droppable droppableId={this.props.column.id}>
              {provided => (
                <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                  {this.props.tasks.map((task, index) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={index}
                      columnId={this.props.column.id}
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

const mapDispatchToProps = {
  addNewTask
};

export default connect(null, mapDispatchToProps)(Collection);

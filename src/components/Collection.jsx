import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styled from "styled-components";
import Task from "./Task";

// import TaskList from "./TaskList";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 250px;
  min-height: 100px;
  padding: 0 9px;
  margin-right: 21px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  padding: 12px 0 12px 3px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  letter-spacing: 0.15px;
  line-height: 1.5;
`;

const TaskList = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.15px;

  color: #000000;
`;

const Footer = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding-top: 6px;
  margin-bottom: 12px;
`;

class Collection extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>{this.props.column.title}</Title>
          <MoreHorizIcon />
        </Header>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        <Footer>+ Add another card</Footer>
      </Container>
    );
  }
}

export default Collection;

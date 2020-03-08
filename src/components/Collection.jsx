import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNewTask,
  deleteCollection,
  editCollectionTitle,
  saveCollectionTitle
} from "../actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "react-textarea-autosize";
import Task from "./Task";
import {
  Container,
  Header,
  Title,
  TitleText,
  TitleInput,
  TaskList,
  CollectionMenuIcon,
  Footer
} from "./CollectionStyles";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.column.title,
      anchorEl: null
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

  saveCollectionTitle = () => {
    this.props.saveCollectionTitle(this.props.collectionId, this.state.title);
  };

  handleDeselect = evt => {
    // evt.stopPropagation();
    console.log("SAVING TITLE!");
    this.saveCollectionTitle();
  };

  handleOpenMenu = event => {
    this.setState({ ...this.state, anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ ...this.state, anchorEl: null });
  };

  handleDeleteCollection = () => {
    this.props.deleteCollection(this.props.collectionId);
    this.handleCloseMenu();
  };

  renderCollectionTitle = () => {
    const { editingCollectionTitle, collectionId, editingTask } = this.props;
    if (
      editingCollectionTitle &&
      editingCollectionTitle === collectionId &&
      editingTask === false
    ) {
      return (
        <TitleInput onBlur={this.handleDeselect}>
          <TextareaAutosize
            ref={node => (this.textArea = node)}
            name="collection-title-textarea"
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
    console.log("RENDERING COLLECTION");
    const {
      editingCollectionTitle,
      collectionId,
      index,
      editingTask
    } = this.props;
    return (
      <Draggable draggableId={collectionId} index={index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Header {...provided.dragHandleProps}>
              <Title onClick={this.handleEditTitle}>
                {editingCollectionTitle &&
                editingCollectionTitle === collectionId &&
                editingTask === false ? (
                  this.renderCollectionTitle()
                ) : (
                  <TitleText>{this.props.column.title}</TitleText>
                )}
              </Title>
              <CollectionMenuIcon>
                <IconButton
                  size="small"
                  disableRipple
                  aria-controls={collectionId + "-menu"}
                  aria-haspopup="true"
                  onClick={this.handleOpenMenu}
                >
                  <MoreHorizIcon />
                </IconButton>
              </CollectionMenuIcon>
              <Menu
                id={collectionId + "-menu"}
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleCloseMenu}
              >
                <MenuItem onClick={this.handleDeleteCollection}>
                  Delete
                </MenuItem>
              </Menu>
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
  return {
    editingCollectionTitle: state.board.meta.editingCollectionTitle,
    editingTask: state.board.meta.editingTask
  };
};

const mapDispatchToProps = {
  addNewTask,
  deleteCollection,
  editCollectionTitle,
  saveCollectionTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);

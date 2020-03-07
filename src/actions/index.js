let nextTaskId = 5;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTaskId++,
  text
});

export const addNewTask = collectionId => ({
  type: "ADD_NEW_TASK",
  taskId: `task-${nextTaskId++}`,
  collectionId
});

export const editTask = taskId => ({
  type: "EDIT_TASK",
  taskId
});

export const saveTask = (taskId, content) => ({
  type: "SAVE_TASK",
  taskId,
  content
});

export const deleteTask = (taskId, collectionId) => ({
  type: "DELETE_TASK",
  taskId,
  collectionId
});

export const moveTaskWithinCollection = (collectionId, newColumn) => ({
  type: "MOVE_TASK_WITHIN_COLLECTION",
  collectionId,
  newColumn
});

export const moveTaskAcrossCollections = (newStart, newFinish) => ({
  type: "MOVE_TASK_ACROSS_COLLECTIONS",
  newStart,
  newFinish
});

export const moveCollections = newColumnOrder => ({
  type: "MOVE_COLLECTIONS",
  newColumnOrder
});

let nextTaskId = 4;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTaskId++,
  text
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

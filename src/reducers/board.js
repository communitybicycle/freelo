import initialData from "../initial-data";

const board = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            id: action.taskId,
            content: ""
          }
        },
        columns: {
          ...state.columns,
          [action.collectionId]: {
            ...state.columns[action.collectionId],
            taskIds: [
              ...state.columns[action.collectionId].taskIds,
              action.taskId
            ]
          }
        },
        meta: {
          editingTask: action.taskId
        }
      };

    case "EDIT_TASK":
      return {
        ...state,
        meta: {
          editingTask: action.taskId
        }
      };

    case "SAVE_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            id: action.taskId,
            content: action.content
          }
        },
        meta: {
          editingTask: false
        }
      };

    case "DELETE_TASK":
      let newTasklist = {
        ...state.tasks
      };
      delete newTasklist[action.taskId];
      let newTaskIds = state.columns[action.collectionId].taskIds.filter(
        item => item !== action.taskId
      );
      return {
        ...state,
        tasks: {
          ...newTasklist
        },
        columns: {
          ...state.columns,
          [action.collectionId]: {
            ...state.columns[action.collectionId],
            taskIds: [...newTaskIds]
          }
        },
        meta: {
          editingTask: false
        }
      };

    case "MOVE_TASK_WITHIN_COLLECTION":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.collectionId]: action.newColumn
        }
      };

    case "MOVE_TASK_ACROSS_COLLECTIONS":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.newStart.id]: action.newStart,
          [action.newFinish.id]: action.newFinish
        }
      };

    case "MOVE_COLLECTIONS":
      return {
        ...state,
        columnOrder: action.newColumnOrder
      };

    case "ADD_NEW_COLLECTION":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.collectionId]: {
            id: action.collectionId,
            title: "",
            taskIds: []
          }
        },
        columnOrder: [...state.columnOrder, action.collectionId],
        meta: {
          ...state.meta,
          editingCollectionTitle: action.collectionId
        }
      };

    case "EDIT_COLLECTION_TITLE":
      return {
        ...state,
        meta: {
          editingTask: false,
          editingCollectionTitle: action.collectionId
        }
      };

    case "SAVE_COLLECTION_TITLE":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.collectionId]: {
            ...state.columns[action.collectionId],
            title: action.title
          }
        },
        meta: {
          editingTask: false,
          editingCollectionTitle: false
        }
      };

    default:
      return state;
  }
};
export default board;

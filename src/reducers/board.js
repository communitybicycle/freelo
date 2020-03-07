import initialData from "../initial-data";

const board = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

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
          editingTask: null
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
          editingTask: null
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

    default:
      return state;
  }
};
export default board;

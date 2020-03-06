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
      }

    default:
      return state;
  }
};
export default board;

const initialState = [];
  
  export default function todo(state = initialState, action) {
    if (action.type === 'ADD_ITEM') {
      return [
        ...state,
        action.item
      ];
    }
    return state;
  }

/*
{id: 2, accessories: [1,2], drinks: [3]}


*/


export const initialState = [
    {id: 2, count: 5, accessories: [1,2], drinks: [3]}
  ];
  
  const ADD = "ADD";
  const MARK = "MARK";
  const DELETE = "DELETE";
  
  export function soupReducer(state, action) {
    switch (action.type) {
      case ADD:
        return [...state, action.payload.soup];
      case MARK:
        return state.map((soup, i) => {
          if (i === action.payload.soupId)
            return { ...soup, done: action.payload.done };
  
          return soup;
        });
      case DELETE:
        return state.filter((_soup, i) => action.payload.soupId !== i);
      default:
        return state;
    }
  }
  
  export function addAction(soup) {
    return {
      type: ADD,
      payload: {
        soup: { ...soup }
      }
    };
  }
  
  export function markAction(soupId, done) {
    return {
      type: MARK,
      payload: {
        soupId,
        done
      }
    };
  }
  
  export function deleteAction(soupId) {
    return {
      type: DELETE,
      payload: {
        soupId
      }
    };
  }
  
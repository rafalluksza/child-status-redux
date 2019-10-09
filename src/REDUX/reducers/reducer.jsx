import { ADD_CHILD, DELETE_CHILD } from "../actions/actions";

const initialState = [] ;

const monitor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD: {
      return  [
          ...state,
          {
            name: action.name
          }
        ]
    }
    case DELETE_CHILD:
      return state.filter((data, i)=> i !== action.id);

    default:
      return state;
  }
};
export default monitor;

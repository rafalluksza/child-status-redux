import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD } from "../actions/actions";

const initialState = {
  children: {
    byId: {
      1: {
        name: "Jan",
        parent: "Paweł",
        phone: "123456789",
        surname: "Nowak"
      },
      2: {
        name: "Paweł",
        parent: "Paweł",
        phone: "123456789",
        surname: "Kura"
      },
      3: {
        name: "Maria",
        parent: "Paweł",
        phone: "123456789",
        surname: "Ptak"
      }
    }
  }
};

const monitor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD: {
      return [
        ...state,
        {
          ...action.values
        }
      ];
    }
    case DELETE_CHILD:
      return state.filter((data, i) => i !== action.id);
    case EDIT_CHILD:
      return state.map(child => {
        console.log(child);
        console.log(child.id);
        return child.id === action.id
          ? { ...child, editing: !child.editing }
          : child;
      });
    default:
      return state;
  }
};
export default monitor;

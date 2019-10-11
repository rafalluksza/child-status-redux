import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD, UPDATE_CHILD } from "../actions/actions";

const initialState = [
      {
        id: 0,
        name: "Jan",
        parent: "Paweł",
        phone: "123456789",
        surname: "Nowak"
      },
      {
        id: 1,
        name: "Paweł",
        parent: "Paweł",
        phone: "123456789",
        surname: "Kura"
      },
      {
        id: 2,
        name: "Maria",
        parent: "Paweł",
        phone: "123456789",
        surname: "Ptak"
      },
  ];

const monitor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD: {
      return [...state,
      {
      ...action.data
      }
      ];
    }
    case DELETE_CHILD:
      return state.filter((data, i) => (i !== action.id));
    case EDIT_CHILD:
      return state.map(child => {
        return child.id === action.id
          ? { ...child, editing: !child.editing }
          : child;
      });
    case UPDATE_CHILD:
      return state.map((child)=> {
        if (child.id === action.id) {
        return {
          ...child,
          name: action.data.name,
          surname: action.data.surname,
          phone: action.data.phone,
          parent: action.data.parent,
          editing: !child.editing
        }
        }else return child;
      })
    default:
      return state;
  }
};
export default monitor;

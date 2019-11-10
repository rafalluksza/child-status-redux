import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD, UPDATE_CHILD } from "../actions/actions";

const initialState = [
      {
        id: 0,
        name: "Jan",
        parent: "Paweł",
        phone: "123456789",
        surname: "Nowak",
        photo: "https://images.unsplash.com/photo-1510516863697-99224a43369f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      },
      {
        id: 1,
        name: "Paweł",
        parent: "Paweł",
        phone: "123456789",
        surname: "Kura",
        photo: "https://images.unsplash.com/photo-1529672425113-d3035c7f4837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      },
      {
        id: 2,
        name: "Maria",
        parent: "Paweł",
        phone: "123456789",
        surname: "Ptak",
        photo: "https://images.unsplash.com/photo-1534806391029-791d2695c38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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

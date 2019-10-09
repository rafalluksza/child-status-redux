export const ADD_CHILD = "Add Child";
export const DELETE_CHILD = "Delete Child";

export const addChild = (name) => {
    return {
        type: ADD_CHILD,
        name
    }
};

export const deleteChild = (id) => {
    return {
        type: DELETE_CHILD,
        id: id
    }
};

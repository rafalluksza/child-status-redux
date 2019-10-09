export const ADD_CHILD = "Add Child";
export const DELETE_CHILD = "Delete Child";

export const addChild = (values) => {
    return {
        type: ADD_CHILD,
        values
    }
};

export const deleteChild = (id) => {
    return {
        type: DELETE_CHILD,
        id: id
    }
};

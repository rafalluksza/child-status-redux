export const ADD_CHILD = "[monitor] Add Child";
export const DELETE_CHILD = "[monitor] Delete Child";
export const EDIT_CHILD = "[monitor] Edit Child";

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

export const editChild = (values) => {
    return {
        type: EDIT_CHILD,
        values
    }
}

export const ADD_CHILD = "[monitor] Add Child";
export const DELETE_CHILD = "[monitor] Delete Child";
export const EDIT_CHILD = "[monitor] Edit Child";
export const UPDATE_CHILD = "[monitor] Update Child";


let nextId = 4;
export const addChild = (data) => {
    return ({
        type: ADD_CHILD,
        id: nextId++,
        data: data,
    })
};

export const deleteChild = (id) => {
    return {
        type: DELETE_CHILD,
        id: id
    }
};

export const editChild = (id) => {
    return {
        type: EDIT_CHILD,
        id: id,
    }
}

export const updateChild = (id, data) => {
    return {
        type: UPDATE_CHILD,
        id: id,
        data: data,
    }
}

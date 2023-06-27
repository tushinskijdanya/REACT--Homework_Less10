const notes = [];

const noteState = {
    notes: notes,
    quant: notes.length
}

export const noteReducer = (state = noteState, action) => {
    switch(action.type) {
        case 'PUSH_NOTE':
            return {...state, notes: [...state.notes, action.payload], quant: state.quant + 1};
        case 'REMOVE_NOTE':
            state.notes.splice(action.payload, 1)
            let temp = state.notes;
            return {...state, notes: temp, quantity: state.quant - 1};
        case 'EDIT_NOTE':
            state.notes[action.payload.id - 1] = action.payload;
            let temp1 = state.notes;
            return {...state, notes: temp1};
        default: return state;
    }
}

export const pushNoteAC = (payload) => {
    return {type: 'PUSH_NOTE', payload};
}

export const removeNoteAC = (payload) => {
    return {type: 'REMOVE_NOTE', payload};
}

export const editNoteAC = (payload) => {
    return {type: 'EDIT_NOTE', payload};
}
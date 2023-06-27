import { recipes } from "../data/kuzya`s_recipes";

const postState = {
    posts: recipes,
    quantity: recipes.length
}

export const postReducer = (state = postState, action) => {
    switch(action.type) {
        case 'PUSH_POST':
            return {...state, posts: [...state.posts, action.payload], quantity: state.quantity + 1};
        case 'REMOVE_POST':
            let temp = state.posts;
            temp.splice(action.payload, 1);
            return {...state, posts: temp, quantity: state.quantity - 1};
        default: return state;
    }
}

export const pushPostAC = (payload) => {
    return {type: 'PUSH_POST', payload};
}

export const removePostAC = (payload) => {
    return {type: 'REMOVE_POST', payload};
}
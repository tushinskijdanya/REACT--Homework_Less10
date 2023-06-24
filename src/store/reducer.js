import { createStore } from "redux";
import { recipes } from "../data/kuzya`s_recipes";

const defaultState = {
    posts: recipes,
    quantity: recipes.length
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'PUSH_POST':
            return {...state, posts: state.posts.push(action.payload), quantity: state.quantity + 1};
        case 'REMOVE_POST':
            return {...state, posts: state.posts.split(action.payload, 1), quantity: state.quantity - 1}
        default: return state;
    }
}

export const PostStore = createStore(reducer);

export const pushPostAC = (payload) => {
    return {type: 'PUSH_POST', payload};
}

export const removePostAC = (payload) => {
    return {type: 'REMOVE_POST', payload};
}
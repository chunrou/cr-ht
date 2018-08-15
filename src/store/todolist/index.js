import state from './state'

import { ADD_NEW_TODO } from './const'

const reducer = (previousState = state, action) => {

        let new_state = { ...previousState }
        new_state.todos = previousState.todos.slice()

        switch ( action.type ) {
            case ADD_NEW_TODO:
                new_state = handler.addNewTodo(new_state, action.title);
            break;

            default: break;
        }

        return new_state

}

export default reducer


const handler = {
    addNewTodo (state, title) {
        state.todos.push({
            title, id: ++state.id
        })

        return state
    }
}
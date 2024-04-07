import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World"}],
    input:''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos.filter((todo)=>todo.id === action.payload).text = action.payload
        },
        updateInput: (state, action)=>{
            state.input = action.payload
        },
        
    }
})

export const {addTodo, removeTodo, updateTodo, updateInput} = todoSlice.actions

export default todoSlice.reducer
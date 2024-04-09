import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: '1', text: "Hello World"}],
    input:'',
    todoId:''
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
        updateTodo: (state, action) => {
            const index =  state.todos.findIndex(todo => todo.id == action.payload.id)                                                               
            const newArray = [...state.todos]
            newArray[index].text = action.payload.text
            state.todos = newArray
            state.todoId = ''
        },
        updateInput: (state, action)=>{
            state.input = action.payload
        },
        
        updateTodoInput: (state, action)=>{
            state.input = action.payload.text
            state.todoId = action.payload.id
        }

        
    }
})

export const {addTodo, removeTodo, updateTodo, updateInput, updateTodoInput} = todoSlice.actions

export default todoSlice.reducer
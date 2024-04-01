import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: Date.now(),
        todo: "",
        completed: false
    }],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}
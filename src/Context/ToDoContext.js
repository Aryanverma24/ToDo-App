import React,{useContext,createContext} from "react";

export const ToDoContext = createContext({
    Todos : [{
        id:1,
        msg:"Todo msg",
        completed: false
    }],
    addTodo : (msg) => {},
    updateTodo: (id,msg) =>{},
    deleteTodo : (id) =>{},
    toggleComplete : (id) => {}
})

export const ToDoProvider = ToDoContext.Provider

export default function useToDo(){
    return useContext(ToDoContext)
}
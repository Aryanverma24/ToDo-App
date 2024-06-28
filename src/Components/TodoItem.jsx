import React, { useState } from 'react'
import useToDo from '../Context/ToDoContext'

function TodoItem({todo}) {
    const {updateTodo,deleteTodo,toggleComplete} = useToDo();

    const [edit,setEdit] = useState(false);
    const [message,setMessage] = useState(todo.msg);

    const editTodo = () =>{
        updateTodo(todo.id,{...todo,msg:message})
        setEdit(false);
    }
    const toggleCom =() => {
        toggleComplete(todo.id)
    }
  return (
   <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 shadow-sm gap-x-3 shadow-white/50 duration-300 text-black ${todo.completed?"bg-[#c6e9a7]": "bg-[#ccbed7]"}`}>
    <input
     type="checkbox"
     className='cursor-pointer'
     checked={todo.completed}
     onChange={toggleCom} />
     <input 
        type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${edit ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
        value={message} 
        onChange={(e)=> setMessage(e.target.value)}
        readOnly={!edit}
        />
        <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (edit) {
                      editTodo();
                  } else setEdit((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {edit ? "📁" : "✏️"}
          </button>
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
   </div>
  )
}

export default TodoItem
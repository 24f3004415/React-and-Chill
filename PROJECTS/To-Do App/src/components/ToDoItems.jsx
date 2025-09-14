import React from 'react'
import ToDoItem from './TodoItem'


const ToDoItems = ({ toDoItems }) => {
    return (
        <div className="items-container">
            {toDoItems.map((item, index )=> <ToDoItem key={index}  todoName={item.name} todoDate={item.dueDate} ></ToDoItem>)}

        </div>
    )
}

export default ToDoItems

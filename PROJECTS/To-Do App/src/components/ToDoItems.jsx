import React from 'react'
import ToDoItem from './TodoItem'
import styles from './ToDoItems.module.css'

const ToDoItems = ({ toDoItems, onDeleteClick }) => {
    return (
        <div className={styles.itemsContainer}>
            {toDoItems.map((item, index) => <ToDoItem key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick = { onDeleteClick } ></ToDoItem>)}

        </div>
    )
}

export default ToDoItems

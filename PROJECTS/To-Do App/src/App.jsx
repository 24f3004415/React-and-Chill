import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";



const App = () => {

  const [todoItems, setTodoItems] = useState([])

  let handleNewitem = (Todo, todoDue) => {

    const newTodoItems = [
      ...todoItems, {
        name: Todo,
        dueDate: todoDue
      }
    ]
    setTodoItems(newTodoItems)
  }

const handleDelete = (todoName)=>{

  const newTodoItems = todoItems.filter((iter)=> iter.name!== todoName)
  setTodoItems(newTodoItems)
}

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddclick={handleNewitem} />
      {todoItems.length == 0 && <WelcomeMessage  />}
      <ToDoItems toDoItems={todoItems} onDeleteClick = { handleDelete } ></ToDoItems>

    </center>
  )
}

export default App


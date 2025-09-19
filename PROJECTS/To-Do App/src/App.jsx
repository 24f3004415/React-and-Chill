import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";



const App = () => {

  let initialToDoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2023"
  },
  {
    name: "Go TO College",
    dueDate: "4/10/2023"
  }]

  const [todoItems, setTodoItems] = useState(initialToDoItems)

  let handleNewitem = (Todo, todoDue) => {
    console.log(`Due task: ${Todo}  Due date: ${todoDue}`);

    const newTodoItems = [
      ...todoItems, {
        name: Todo,
        dueDate: todoDue
      }
    ]
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddclick={handleNewitem} />
      <ToDoItems toDoItems={todoItems} ></ToDoItems>

    </center>
  )
}

export default App


import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";



const App = () => {

  let toDoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2023"
  },
  {
    name: "Go TO College",
    dueDate: "4/10/2023"
  }]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ToDoItems toDoItems={toDoItems} ></ToDoItems>

    </center>
  )
}

export default App


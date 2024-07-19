import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";



function App() {
  
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate)=>{
    const newTodoList = [...todoItems,{
      name: itemName,
      dueDate: itemDueDate
    }]
    setTodoItems(newTodoList);
  }
  const handleDeleteItem = (TodoItemName)=>{
    const newList = todoItems.filter(item => item.name !== TodoItemName);
    setTodoItems(newList);
    console.log(`item deleted: ${TodoItemName}`)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem} />
      {todoItems.length === 0 ? <b>Todo Event List is Empty!!!!</b> : <TodoItems todoItems={todoItems} onClickDelete = {handleDeleteItem} ></TodoItems>}
    </center>
  );
}

export default App;

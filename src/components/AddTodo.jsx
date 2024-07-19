import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  const handleInputName = (e)=>{
    settodoName(e.target.value)
  }
  const handleInputDate = (e)=>{
    settodoDate(e.target.value)
  }
  const handleAddButton = ()=>{
    onNewItem(todoName,todoDate);
    settodoDate("");
    settodoName("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handleInputName} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleInputDate} value={todoDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButton} disabled = {todoName.length == 0 && todoDate.length == 0}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
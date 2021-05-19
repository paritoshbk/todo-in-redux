
import React from "react";


const TodoItem = (props) => {
  const { item,  removeTodo, completeTodo } = props;

 
  return (
    <li id="container"
      key={item.id}
      className="card"
    >
      <div >
      <span>
        {item.item}
        </span>
        <button id="btn"
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          Delete
        </button>{" "}
        
        {item.completed === false && (
          <button id="btn"
            onClick={() => completeTodo(item.id)}
          >
            Done
          </button>
        )}
       
      </div>
      {item.completed}
    </li>
  );
};

export default TodoItem;

import React from "react";

const ToDoList = (props) =>{
    return (
    <>
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"></i>
    <li> {props.text} </li>;
    </div>
    </>
    );
};

export default ToDoList;
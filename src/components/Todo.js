import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteManager = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeManager = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            };
            return item;
        }))
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeManager} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteManager} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
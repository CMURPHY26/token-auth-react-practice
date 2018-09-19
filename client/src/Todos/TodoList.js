import React from 'react';
import Todo from "./Todo";
import { AppContextConsumer } from "../AppContext";

function TodoList() {
    return (
        <AppContextConsumer>
            {
                globalState => globalState.todos.map(todo => {
                    return (
                        <Todo
                            key={todo._id}
                            todo={todo}
                            addTodo={globalState.addTodo}
                            editTodo={globalState.editTodo}
                            deleteTodo={globalState.deleteTodo}
                        />
                    )
                })
            }
        </AppContextConsumer>
    )
}

export default TodoList;

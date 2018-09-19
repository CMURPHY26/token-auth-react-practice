import React from 'react';
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm"
import { AppContextConsumer } from "../AppContext";

function TodoList() {
    return (
        <AppContextConsumer>
            {
                globalState => {
                    const todos = globalState.todos.map(todo => {
                        return (
                            <Todo
                                key={todo._id}
                                todo={todo}
                                editTodo={globalState.editTodo}
                                deleteTodo={globalState.deleteTodo}
                            />
                        )
                    })
                    return (
                        <main>
                            <AddTodoForm
                                addTodo={globalState.addTodo}
                            />
                            {todos}
                        </main>
                    )
                }
            }
        </AppContextConsumer>
    )
}

export default TodoList;

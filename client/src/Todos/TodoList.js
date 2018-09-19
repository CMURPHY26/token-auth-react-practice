import React, { Component } from 'react';
import Todo from "./Todo";
import { AppContextConsumer } from "../AppContext";

function TodoList() {
    return (
        <AppContextConsumer>
            {
                globalState => globalState.todos.map(todo => {
                    return (
                        <Todo
                            todo={todo}
                            addTodo={globalState.addTodo}
                            editTodo={this.editTodo}
                            deleteTodo={this.deleteTodo}
                        />
                    )
                })
            }
        </AppContextConsumer>
    )
}

export default TodoList;

import React, { Component } from 'react';
import Todo from "./Todo";
import { AppContextConsumer } from "../AppContext";

class TodoList extends Component {

    render() {
        // const todos = this.props.todos.map(todo => {
        //     return (
        //         <Todo
        //             key={todo._id}
        //             todo={todo}
        //         />
        //     )
        // })

        return (
            <AppContextConsumer>
                {globalState => {
                    console.log(globalState)
                    return globalState.todos.map(todo => {
                        return <Todo
                            todo={todo}
                            addTodo={globalState.addTodo}
                            editTodo={this.editTodo}
                            deleteTodo={this.deleteTodo}
                        />
                    })
                }}
            </AppContextConsumer>
        )
    }
}

export default TodoList

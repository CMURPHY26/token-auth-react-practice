import React, { Component } from 'react';
import TodoFormContainer from "./AddTodoFormContainer"

class TodoContainer extends Component {

    handleCompleted = (e) => {
        this.props.editTodo(this.props.todo._id, { completed: e.target.checked })
    }

    handleRemove = () => {
        this.props.deleteTodo(this.props.todo._id);
    }

    render() {
        const todos = this.props.todos.map(todo => {
            return (
                <TodoContainer
                    key={todo._id}
                    todo={todo}/>
            )
        })

        return (
            <div>
                <TodoFormContainer/>
                {todos}
            </div>
        )
    }
}

export default TodoContainer;

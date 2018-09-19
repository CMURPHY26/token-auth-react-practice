import React, { Component } from "react"
import axios from "axios"

const AppContext = React.createContext()

export const AppContextConsumer = AppContext.Consumer;

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get("/api/todo")
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch(err => console.error(err))
    }

    addTodo = (newTodo) => {
        axios.post("/api/todo/", newTodo)
            .then(response => {
                this.setState(prevState => {
                    return { todos: [...prevState.todos, response.data] }
                });
            })
            .catch(err => console.error(err));
    }

    editTodo = (todoId, todo) => {
        axios.put(`/api/todo/${todoId}`, todo)
            .then(response => {
                this.setState(prevState => {
                    const updatedTodos = prevState.todos.map(todo => {
                        return todo._id === response.data._id ? response.data : todo
                    })
                    return { todos: updatedTodos }
                })
            })
            .catch(err => console.error(err));
    }

    deleteTodo = (todoId) => {
        axios.delete(`/api/todo/${todoId}`)
            .then(() => {
                this.setState(prevState => {
                    const updatedTodos = prevState.todos.filter(todo => {
                        return todo._id !== todoId
                    })
                    return { todos: updatedTodos }
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    editTodo: this.editTodo,
                    deleteTodo: this.deleteTodo,
                    todos: this.state.todos
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

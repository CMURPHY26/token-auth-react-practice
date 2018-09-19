import React, {Component} from 'react';
import TodoList from "./TodoList";

class TodoListContainer extends Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                title: ""
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputs);
        this.clearInputs()
    }

    render() {
        return (
            <TodoList
                todos={this.props.todos}/>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {loadTodos})(TodoListContainer)

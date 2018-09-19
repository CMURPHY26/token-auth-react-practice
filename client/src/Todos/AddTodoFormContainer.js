import React, {Component} from 'react';
import AddTodoForm from "./AddTodoForm";
import {connect} from "react-redux";
import {addTodo} from "../../redux/todos";

class AddTodoFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            title: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.clearInputs()
    }

    render() {
        return (
            <AddTodoForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                { ...this.state } />
        )
    }
}

export default AddTodoFormContainer;

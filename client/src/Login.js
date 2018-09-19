import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearInputs() {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
        this.clearInputs();
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;
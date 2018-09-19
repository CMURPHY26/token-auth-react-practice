import React, {Component} from 'react';

class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs() {
        this.setState({
            name: "",
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
                    <h3>Sign Up</h3>
                    <input onChange={this.handleChange}
                           value={this.state.username}
                           name="username"
                           type="text"
                           placeholder="Username"/>
                    <input onChange={props.handleChange}
                           value={this.state.password}
                           name="password"
                           type="password"
                           placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;




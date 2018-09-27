import React from 'react';
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import TodoList from "./Todos/TodoList";

function App() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/todos" component={TodoList}/>
                <Route exact path="/" render={() => <Redirect to="/todos"/>}/>
            </Switch>
        </div>
    )
}

export default App;

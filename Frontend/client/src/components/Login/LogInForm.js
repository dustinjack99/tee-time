import React, { Component } from "react";
import API from "../utils/api";
import "./stylesheet.css";
import { Redirect } from "react-router-dom";
import { setInStorage } from "../utils/storage";

class LogInForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toDashboard: false,
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value
        API.login(
            email,
            password
        ).then(
            result => {
                let successful = result.data.success;

                if (successful) {
                    // console.log("Dan look here", result)
                    setInStorage(result.data.token, result);

                    // window.location.href = '/dashboard'
                    this.setState({ toDashboard: true });
                } else {
                    alert("Error: your login data is wrong.");
                }
            }
        );
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div
                className="container">
                <div
                    className="row">
                    <div
                        className="col text-center">
                        <h1>Welcome to Tee-Time!</h1>
                        <form>
                            <div
                                className="form-group">
                                <label
                                    htmlFor="email-input">
                                    Email address
                                        </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email-input"
                                    name='email'
                                    placeholder="Email">

                                </input>
                            </div>
                            <div
                                className="form-group">
                                <label
                                    htmlFor="password-input">
                                    Password
                                        </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password-input"
                                    name="password"
                                    placeholder="Password">

                                </input>
                            </div>
                            <button
                                type="submit"
                                id='login-btn'
                                className="btn btn-default"
                                onClick={
                                    (e) => this.handleSubmit(e)
                                }
                            >Login
                                </button>
                        </form>
                        <div>
                            <p>Don't have an account? Sign up <a
                                href="/signup">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default LogInForm;
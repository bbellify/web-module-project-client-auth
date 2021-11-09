import React from 'react';

import axios from 'axios';

class Login extends React.Component {

    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
    }}

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res=> {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.setState({
                    ...this.state,
                    isLoading: false
                });
                this.props.history.push('/friends')
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    isLoading: false
                })
            })
    }

    handleChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
    }

    render() {
        return(
            <div>
                {this.state.isLoading && <h2>Logging in...</h2>}
                <form onSubmit={this.login}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login
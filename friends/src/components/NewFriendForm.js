import React from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

class NewFriendForm extends React.Component {

    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    postFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state)
        .then(
            this.props.history.push('/friends')
        )
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return(
            <div>
                <form onSubmit={this.postFriend}>
                    <label>Name:
                        <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Age:
                        <input
                            type='text'
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewFriendForm
import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {

    state = {
        friends: [],
    }

    componentDidMount() {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.length === 0 && <h2>Grabbing friends...</h2>}
                {this.state.friends.map(f => {
                    return <h3>{f.name}</h3>
                })}

            </div>
        )
    }
}

export default FriendsList
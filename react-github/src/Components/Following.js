import React from 'react';
import axios from 'axios';
import FollCard from './FollCard.js';


class Following extends React.Component {
constructor() {
    super();
    this.state={
        following: []
    }
}
componentDidMount() {
    axios
        .get(`https://api.github.com/users/wolfwood87/following`)
        .then(res => {
            console.log(res)
            let followingUser = res.data
            this.setState({
                following: followingUser
            })
        })
        .catch(err => {
            console.log(err)
        })
    
}

componentDidUpdate() {
    console.log(this.state.following)
}

render(){
    return(
        <div className='foll-cont'>
            {this.state.following.map((name) => (  
                <FollCard className="foll-card" key={`folling${name.id}`} avatar={name.avatar_url} url={name.url}/>
            ))}
        </div>
    )
}
}
export default Following;
import React from 'react';
import axios from 'axios';
import FollCard from './FollCard.js';


class Followers extends React.Component {
constructor() {
    super();
    this.state={
        follower: []
    }
}
componentDidMount() {
    axios
        .get(`https://api.github.com/users/wolfwood87/followers`)
        .then(res => {
            console.log(res)
            let followerUser = res.data
            this.setState({
                follower: followerUser
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
            {this.state.follower.map((name) => (  
                <FollCard className="foll-card" key={`folling${name.id}`} avatar={name.avatar_url} url={name.url}/>
            ))}
        </div>
    )
}
}
export default Followers;
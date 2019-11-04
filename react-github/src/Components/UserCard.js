import React from 'react';
import Following from './Following.js';
import Followers from './Followers.js';

const UserCard = (props) => {

return(
    <div>
        <img src={props.user.avatar_url} />
        <h1>{props.user.name}</h1>
        <p>{`Profile: ${props.user.html_url}`}</p>
        <h3>Followers</h3>
        <Followers />
        <h3>Following</h3>
        <Following /> 
    </div>
    )
}

export default UserCard;
import React from 'react';

const FollCard = (props) => {
    return (
        <div>
            <img className="foll-img" src={props.avatar}/>
            <h3>{props.url}</h3>
        </div>
    )
}

export default FollCard
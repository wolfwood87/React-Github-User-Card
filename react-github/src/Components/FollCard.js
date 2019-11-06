import React from 'react';
import styled from 'styled-components';

const LightLabel = styled.h3`  
  color: #A3CED5;
`;

const FollCard = (props) => {
    return (
        <div>
            <img className="foll-img" src={props.avatar}/>
            <LightLabel>{props.url}</LightLabel>
        </div>
    )
}

export default FollCard
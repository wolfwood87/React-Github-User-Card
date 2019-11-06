import React from 'react';
import Following from './Following.js';
import Followers from './Followers.js';
import styled from 'styled-components';

const Container = styled.div`
        display: flex;       
`;
const CardContainer = styled(Container)`
        border: 1px solid black;
        flex-direction: column;
        align-items: center;
        background-color: #A3CED5;
`;
const Card = styled.div`
        border: 1px solid black;
        width: 50%;
        background-color: #428691;
`;
const FollContainer = styled(Container)`
        align-items: space-evenly;
        justify-content: space-evenly;

`
const Foll = styled.div`
        border: 1px solid black;
        width: 30%;
        background-color: #061F23;
`;
const LightLabel = styled.h3`  
  color: #A3CED5;
`;

const UserCard = (props) => {

    
return(
    <CardContainer>
        <Card>
            <h1>{props.user.name}</h1>
            <img src={props.user.avatar_url} />
            <p>{`Profile: ${props.user.html_url}`}</p>
        </Card>
        <FollContainer className="container">
            <Foll>
                <LightLabel>Followers</LightLabel>
                <Followers />
            </Foll>
            <Foll>
                <LightLabel>Following</LightLabel>
                <Following /> 
            </Foll>
        </FollContainer>
    </CardContainer>
    )
}

export default UserCard;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard.js';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #061F23;
`;
const LightHeader = styled.h1`  
  color: white;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/wolfwood87')
      .then((results) => {
        console.log(results.data);
        let newUser=results.data
        this.setState({
          user: newUser
        })
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  componentDidUpdate() {
    console.log(this.state.user)
  }
  render(){
  return (
    <Header className="App">
      <LightHeader>Github User</LightHeader>
      <UserCard user={this.state.user}/>
    </Header>
  )
}
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
    <div className="App">
    </div>
  )
}
}
export default App;

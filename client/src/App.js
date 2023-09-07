import React, { Component } from 'react';
import io from 'socket.io-client';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      message: ""
    }
  }

componentDidMount(){
  const socket = io.connect('/');
  socket.on('msg',(data) => {
    this.setState({message: data})
  })
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App
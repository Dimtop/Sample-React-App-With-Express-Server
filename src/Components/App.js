import React, { Component } from 'react';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      data: ""
    };
  }

  componentDidMount(){
    fetch("/api/test")
    .then(res => res.json())
    .then( (result) =>{
      this.setState({data:result.result});
    });

  }

  render() {
    return (
        <div>
            <p>{this.state.data}</p>
        </div>
    );
  }
}

export default App;